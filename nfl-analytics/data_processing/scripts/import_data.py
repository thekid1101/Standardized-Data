#!/usr/bin/env python3
"""
NFL Data Import Script

This script imports data from CSV files into a PostgreSQL database using the schema
defined in the Prisma schema file.
"""

import os
import sys
import pandas as pd
import psycopg2
from datetime import datetime
import csv
from pathlib import Path
import re

# Database connection parameters
DB_PARAMS = {
    'dbname': 'nfl_analytics',
    'user': 'postgres',
    'password': '390860',
    'host': 'localhost',
    'port': '5432'
}

# Data file paths
DATA_DIR = Path('../../..')
GAMELOG_PATTERN = r'\d{4}-Advanced-Gamelog-Standardized\.csv'
PBP_PATTERN = r'\d{4}-Advanced-PBP-Data-Standardized\.csv'
ROSTER_PATTERN = r'\d{4}-Weekly-Roster-Key-Standardized\.csv'

def connect_to_db():
    """Establish connection to the PostgreSQL database."""
    try:
        conn = psycopg2.connect(**DB_PARAMS)
        return conn
    except Exception as e:
        print(f"Error connecting to database: {e}")
        sys.exit(1)

def get_files_by_pattern(pattern):
    """Return files matching the given regex pattern in DATA_DIR."""
    files = []
    p = re.compile(pattern)
    
    # Print the directory being searched
    print(f"Searching for files in: {DATA_DIR.resolve()}")
    
    # List all CSV files in the directory
    all_csv_files = list(DATA_DIR.glob('*.csv'))
    print(f"Found {len(all_csv_files)} CSV files in directory")
    
    for file in all_csv_files:
        if p.match(file.name):
            print(f"Matched file: {file.name}")
            files.append(file)
        else:
            print(f"Did not match: {file.name}")
    
    print(f"Total matched files for pattern {pattern}: {len(files)}")
    return files

def extract_season_from_filename(filename):
    """Extract season year from filename."""
    match = re.search(r'(\d{4})-', filename)
    if match:
        return int(match.group(1))
    return None

def process_roster_files():
    """Process weekly roster files and insert data into players and weekly_rosters tables."""
    # Get all roster files
    roster_files = get_files_by_pattern(ROSTER_PATTERN)
    
    # Dictionary to track players we've already processed
    processed_players = set()
    
    for file_path in roster_files:
        season = extract_season_from_filename(file_path.name)
        if not season:
            continue
        
        print(f"Processing roster file: {file_path}")
        
        # Read the CSV file
        df = pd.read_csv(file_path)
        
        # Process in smaller batches to avoid long transactions
        batch_size = 1000
        total_rows = len(df)
        
        for batch_start in range(0, total_rows, batch_size):
            # Create a new connection for each batch
            conn = connect_to_db()
            cursor = conn.cursor()
            
            try:
                batch_end = min(batch_start + batch_size, total_rows)
                print(f"Processing batch {batch_start} to {batch_end} of {total_rows}")
                
                # Process rows in this batch
                batch_df = df.iloc[batch_start:batch_end]
                
                for _, row in batch_df.iterrows():
                    player_id = row['player_id']
                    
                    # Insert player if not already processed
                    if player_id not in processed_players:
                        try:
                            dob = None
                            if 'dob' in row and pd.notna(row['dob']):
                                dob = datetime.strptime(row['dob'], "%Y-%m-%d")
                            
                            cursor.execute(
                                "INSERT INTO players (id, name, position) VALUES (%s, %s, %s) ON CONFLICT (id) DO NOTHING",
                                (player_id, row['name'], row.get('position'))
                            )
                            processed_players.add(player_id)
                        except Exception as e:
                            print(f"Error inserting player {player_id}: {e}")
                            # Don't continue with weekly roster insert if player insert failed
                            continue
                    
                    # Insert weekly roster entry
                    try:
                        cursor.execute(
                            """
                            INSERT INTO weekly_rosters (player_id, week, season, team, jersey_number, position)
                            VALUES (%s, %s, %s, %s, %s, %s)
                            ON CONFLICT (player_id, week, season, team) DO NOTHING
                            """,
                            (
                                player_id,
                                int(row['week']),
                                season,
                                row['team'],
                                int(row.get('number', 0)) if pd.notna(row.get('number', 0)) else None,
                                row.get('position')
                            )
                        )
                    except Exception as e:
                        print(f"Error inserting weekly roster for {player_id}, week {row['week']}: {e}")
                
                # Commit the batch
                conn.commit()
                print(f"Successfully committed batch {batch_start} to {batch_end}")
                
            except Exception as e:
                # If anything goes wrong, rollback the whole batch
                conn.rollback()
                print(f"Error in batch {batch_start} to {batch_end}: {e}")
                print("Rolled back batch")
            finally:
                # Always close cursor and connection
                cursor.close()
                conn.close()
    
    print("Roster data import completed")

def process_teams():
    """Create team records based on team codes found in roster files."""
    conn = connect_to_db()
    cursor = conn.cursor()
    
    # Get all roster files to extract team codes
    roster_files = get_files_by_pattern(ROSTER_PATTERN)
    team_codes = set()
    
    for file_path in roster_files:
        df = pd.read_csv(file_path)
        team_codes.update(df['team'].unique())
    
    # Insert teams
    for code in team_codes:
        try:
            cursor.execute(
                "INSERT INTO teams (code) VALUES (%s) ON CONFLICT (code) DO NOTHING",
                (code,)
            )
        except Exception as e:
            print(f"Error inserting team {code}: {e}")
    
    # Commit and close
    conn.commit()
    cursor.close()
    conn.close()
    print(f"Inserted {len(team_codes)} teams")

def process_gamelog_files():
    """Process game log files and insert data into player_game_stats table."""
    conn = connect_to_db()
    cursor = conn.cursor()
    
    # Get all gamelog files
    gamelog_files = get_files_by_pattern(GAMELOG_PATTERN)
    
    for file_path in gamelog_files:
        season = extract_season_from_filename(file_path.name)
        if not season:
            continue
        
        print(f"Processing gamelog file: {file_path}")
        
        # Read the CSV file
        df = pd.read_csv(file_path)
        
        # Track game keys we've processed
        processed_games = set()
        
        # Process rows
        for _, row in df.iterrows():
            player_id = row['player']
            week = int(row['week'])
            team = row['team']
            opponent = row['opponent']
            
            # Create a unique game key
            game_key = f"{season}_{week}_{team}_{opponent}"
            
            # Insert game if not already processed
            if game_key not in processed_games:
                try:
                    # Assume the season starts in September
                    game_date = datetime(season, 9, 1)
                    
                    cursor.execute(
                        """
                        INSERT INTO games (key, week, season, game_date, home_team, away_team)
                        VALUES (%s, %s, %s, %s, %s, %s)
                        ON CONFLICT (key) DO NOTHING
                        """,
                        (game_key, week, season, game_date, team, opponent)
                    )
                    processed_games.add(game_key)
                except Exception as e:
                    print(f"Error inserting game {game_key}: {e}")
            
            # Insert player game stats
            try:
                cursor.execute(
                    """
                    INSERT INTO player_game_stats (
                        player_id, game_key, team, position, snaps, snap_share, fantasy_points,
                        pass_attempts, completions, pass_yards, pass_t_ds, interceptions,
                        carries, rush_yards, rush_t_ds, targets, receptions, receiving_yards,
                        receiving_t_ds, air_yards, scrimmage_yards, total_t_ds, total_touches,
                        opportunities, evaded_tackles, yards_created, yards_per_carry,
                        yards_per_target, yards_per_reception
                    )
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                    ON CONFLICT (player_id, game_key) DO NOTHING
                    """,
                    (
                        player_id, game_key, team, row.get('position'),
                        int(row.get('snaps', 0)) if pd.notna(row.get('snaps', 0)) else None,
                        float(row.get('snap_share', 0)) if pd.notna(row.get('snap_share', 0)) else None,
                        float(row.get('fantasy_points', 0)) if pd.notna(row.get('fantasy_points', 0)) else None,
                        int(row.get('pass_attempts', 0)) if pd.notna(row.get('pass_attempts', 0)) else None,
                        int(row.get('completions', 0)) if pd.notna(row.get('completions', 0)) else None,
                        int(row.get('pass_yards', 0)) if pd.notna(row.get('pass_yards', 0)) else None,
                        int(row.get('pass_touchdowns', 0)) if pd.notna(row.get('pass_touchdowns', 0)) else None,
                        int(row.get('interceptions', 0)) if pd.notna(row.get('interceptions', 0)) else None,
                        int(row.get('carries', 0)) if pd.notna(row.get('carries', 0)) else None,
                        int(row.get('rush_yards', 0)) if pd.notna(row.get('rush_yards', 0)) else None,
                        int(row.get('rush_touchdowns', 0)) if pd.notna(row.get('rush_touchdowns', 0)) else None,
                        int(row.get('targets', 0)) if pd.notna(row.get('targets', 0)) else None,
                        int(row.get('receptions', 0)) if pd.notna(row.get('receptions', 0)) else None,
                        int(row.get('receiving_yards', 0)) if pd.notna(row.get('receiving_yards', 0)) else None,
                        int(row.get('receiving_touchdowns', 0)) if pd.notna(row.get('receiving_touchdowns', 0)) else None,
                        int(row.get('air_yards', 0)) if pd.notna(row.get('air_yards', 0)) else None,
                        int(row.get('scrimmage_yards', 0)) if pd.notna(row.get('scrimmage_yards', 0)) else None,
                        int(row.get('total_touchdowns', 0)) if pd.notna(row.get('total_touchdowns', 0)) else None,
                        int(row.get('total_touches', 0)) if pd.notna(row.get('total_touches', 0)) else None,
                        int(row.get('opportunities', 0)) if pd.notna(row.get('opportunities', 0)) else None,
                        int(row.get('evaded_tackles', 0)) if pd.notna(row.get('evaded_tackles', 0)) else None,
                        int(row.get('yards_created', 0)) if pd.notna(row.get('yards_created', 0)) else None,
                        float(row.get('yards_per_carry', 0)) if pd.notna(row.get('yards_per_carry', 0)) else None,
                        float(row.get('yards_per_target', 0)) if pd.notna(row.get('yards_per_target', 0)) else None,
                        float(row.get('yards_per_reception', 0)) if pd.notna(row.get('yards_per_reception', 0)) else None
                    )
                )
            except Exception as e:
                print(f"Error inserting player game stats for {player_id}, game {game_key}: {e}")
    
    # Commit and close
    conn.commit()
    cursor.close()
    conn.close()
    print("Game log data import completed")

def process_pbp_files():
    """Process play-by-play files and insert data into plays and play_players tables."""
    conn = connect_to_db()
    cursor = conn.cursor()
    
    # Get all PBP files
    pbp_files = get_files_by_pattern(PBP_PATTERN)
    
    for file_path in pbp_files:
        season = extract_season_from_filename(file_path.name)
        if not season:
            continue
        
        print(f"Processing PBP file: {file_path}")
        
        # Read the CSV file in chunks to manage memory
        chunk_size = 10000
        chunk_iterator = pd.read_csv(file_path, chunksize=chunk_size)
        
        for chunk_idx, chunk in enumerate(chunk_iterator):
            print(f"Processing chunk {chunk_idx+1}")
            
            # Process rows in chunk
            for _, row in chunk.iterrows():
                nfl_play_id = str(row.get('nfl_play_id', ''))
                game_key = row.get('game_key', '')
                
                if not nfl_play_id or not game_key:
                    continue  # Skip if missing essential identifiers
                
                # Insert play data
                try:
                    cursor.execute(
                        """
                        INSERT INTO plays (
                            id, game_key, week, quarter, minutes, seconds, down, yards_to_go,
                            off_team, def_team, play_type, yards_gained, is_first_down, red_zone,
                            pass_play, run_play, touchdown, turnover
                        )
                        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                        ON CONFLICT (id) DO NOTHING
                        """,
                        (
                            nfl_play_id, game_key, 
                            int(row.get('week', 0)) if pd.notna(row.get('week', 0)) else None,
                            int(row.get('quarter', 0)) if pd.notna(row.get('quarter', 0)) else None,
                            int(row.get('minutes', 0)) if pd.notna(row.get('minutes', 0)) else None,
                            int(row.get('seconds', 0)) if pd.notna(row.get('seconds', 0)) else None,
                            int(row.get('down', 0)) if pd.notna(row.get('down', 0)) else None,
                            int(row.get('yards_to_go', 0)) if pd.notna(row.get('yards_to_go', 0)) else None,
                            row.get('off_team'),
                            row.get('def_team'),
                            row.get('type'),
                            int(row.get('yards_gained', 0)) if pd.notna(row.get('yards_gained', 0)) else None,
                            bool(row.get('first_down', 0)) if pd.notna(row.get('first_down', 0)) else None,
                            bool(row.get('red_zone', 0)) if pd.notna(row.get('red_zone', 0)) else None,
                            bool(row.get('pass', 0)) if pd.notna(row.get('pass', 0)) else None,
                            bool(row.get('run', 0)) if pd.notna(row.get('run', 0)) else None,
                            bool(row.get('td', 0)) if pd.notna(row.get('td', 0)) else None,
                            bool(row.get('turnover', 0) or row.get('interception', 0) or row.get('fumble_lost', 0)) if pd.notna(row.get('turnover', 0) or row.get('interception', 0) or row.get('fumble_lost', 0)) else None
                        )
                    )
                except Exception as e:
                    print(f"Error inserting play {nfl_play_id}: {e}")
                
                # Process players involved in the play
                player_roles = [
                    ('qb', 'qb'), ('runner', 'rb'), ('targeted_player', 'target'),
                    ('rb1', 'rb1'), ('rb2', 'rb2'), ('rb3', 'rb3'),
                    ('wr1', 'wr1'), ('wr2', 'wr2'), ('slot1', 'slot1'), ('slot2', 'slot2'), ('wr5', 'wr5'),
                    ('te1', 'te1'), ('te2', 'te2'), ('te3', 'te3')
                ]
                
                for db_field, role in player_roles:
                    player_id = row.get(db_field)
                    if pd.notna(player_id) and player_id:
                        try:
                            # Determine role-specific stats
                            targeted = False
                            completed = False
                            air_yards = None
                            yards_gained = None
                            
                            if role == 'target' and pd.notna(row.get('targeted_player')):
                                targeted = True
                                completed = bool(row.get('completion', 0)) if pd.notna(row.get('completion', 0)) else False
                                air_yards = int(row.get('air_yards', 0)) if pd.notna(row.get('air_yards', 0)) else None
                            
                            if role == 'rb' and pd.notna(row.get('runner')):
                                yards_gained = int(row.get('yards_gained', 0)) if pd.notna(row.get('yards_gained', 0)) else None
                            
                            cursor.execute(
                                """
                                INSERT INTO play_players (
                                    play_id, player_id, role, targeted, completed, air_yards, yards_gained
                                )
                                VALUES (%s, %s, %s, %s, %s, %s, %s)
                                ON CONFLICT (play_id, player_id, role) DO NOTHING
                                """,
                                (
                                    nfl_play_id, player_id, role, targeted, completed, air_yards, yards_gained
                                )
                            )
                        except Exception as e:
                            print(f"Error inserting play player {player_id} for play {nfl_play_id}: {e}")
            
            # Commit after each chunk
            conn.commit()
    
    # Close connection
    cursor.close()
    conn.close()
    print("Play-by-play data import completed")

def main():
    """Main execution function."""
    print("Starting NFL data import")
    
    # Create teams first (they're referenced by other tables)
    process_teams()
    
    # Import roster data
    process_roster_files()
    
    # Import game log data
    process_gamelog_files()
    
    # Import play-by-play data (most complex and largest)
    process_pbp_files()
    
    print("NFL data import completed successfully")

if __name__ == "__main__":
    main()