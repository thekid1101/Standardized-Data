import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  TablePagination, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  CircularProgress, 
  Alert,
  Chip,
  Divider,
  Grid
} from '@mui/material';
import { fetchGames, fetchGamesBySeasonAndWeek } from '../services/api';
import { Game } from '../types';
import Card from '../components/common/Card';

// Available seasons (in a real app, this would be dynamic)
const seasons = [2023, 2022, 2021, 2020, 2019];

// Weeks in a season
const weeks = Array.from({ length: 18 }, (_, i) => i + 1);

const GamesPage: React.FC = () => {
  // State for games data
  const [games, setGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  
  // State for loading and error handling
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // State for pagination
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [totalGames, setTotalGames] = useState<number>(0);
  
  // State for filtering
  const [selectedSeason, setSelectedSeason] = useState<number>(seasons[0]);
  const [selectedWeek, setSelectedWeek] = useState<number | 'all'>('all');

  // Load games data
  useEffect(() => {
    const loadGames = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchGames(page + 1, rowsPerPage);
        setGames(response.data);
        setFilteredGames(response.data);
        setTotalGames(response.metadata?.total || response.data.length);
      } catch (err) {
        setError('Failed to fetch games. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, [page, rowsPerPage]);

  // Handle season and week filter changes
  useEffect(() => {
    const loadFilteredGames = async () => {
      setLoading(true);
      setError(null);
      try {
        if (selectedWeek === 'all') {
          // If no specific week is selected, load all games for the season
          const response = await fetchGames(page + 1, rowsPerPage);
          setFilteredGames(response.data);
          setTotalGames(response.metadata?.total || response.data.length);
        } else {
          // Load games for specific season and week
          const gamesData = await fetchGamesBySeasonAndWeek(selectedSeason, selectedWeek as number);
          setFilteredGames(gamesData);
          setTotalGames(gamesData.length);
        }
      } catch (err) {
        setError('Failed to fetch games. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadFilteredGames();
  }, [selectedSeason, selectedWeek, page, rowsPerPage]);

  // Handle pagination
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Determine if a game is in the past
  const isGameInPast = (gameDate: string) => {
    const gameDateTime = new Date(gameDate);
    const now = new Date();
    return gameDateTime < now;
  };

  return (
    <Card title="NFL Games" className="mb-6">
      {/* Filter Controls */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel id="season-filter-label">Season</InputLabel>
            <Select
              labelId="season-filter-label"
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value as number)}
              label="Season"
            >
              {seasons.map((season) => (
                <MenuItem key={season} value={season}>{season}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel id="week-filter-label">Week</InputLabel>
            <Select
              labelId="week-filter-label"
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value as number | 'all')}
              label="Week"
            >
              <MenuItem value="all">All Weeks</MenuItem>
              {weeks.map((week) => (
                <MenuItem key={week} value={week}>Week {week}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Loading and Error States */}
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {/* Games Table */}
      {!loading && !error && (
        <TableContainer component={Paper} sx={{ boxShadow: 'none', border: '1px solid #e0e0e0' }}>
          <Table sx={{ minWidth: 650 }} aria-label="games table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Week</TableCell>
                <TableCell>Home Team</TableCell>
                <TableCell>Score</TableCell>
                <TableCell>Away Team</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredGames.length > 0 ? (
                filteredGames.map((game) => (
                  <TableRow 
                    key={game.key} 
                    hover
                    sx={{ 
                      bgcolor: isGameInPast(game.gameDate) ? 'rgba(0, 0, 0, 0.02)' : 'inherit'
                    }}
                  >
                    <TableCell>{formatDate(game.gameDate)}</TableCell>
                    <TableCell>Week {game.week}</TableCell>
                    <TableCell>
                      <Link to={`/teams/${game.homeTeam}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {game.homeTeam}
                        </Typography>
                      </Link>
                    </TableCell>
                    <TableCell>
                      {game.homeScore !== null && game.awayScore !== null ? (
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                          {game.homeScore} - {game.awayScore}
                        </Typography>
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          vs
                        </Typography>
                      )}
                    </TableCell>
                    <TableCell>
                      <Link to={`/teams/${game.awayTeam}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {game.awayTeam}
                        </Typography>
                      </Link>
                    </TableCell>
                    <TableCell>
                      {isGameInPast(game.gameDate) ? (
                        <Chip 
                          label="Final" 
                          size="small" 
                          color="primary" 
                          variant="outlined"
                        />
                      ) : (
                        <Chip 
                          label="Upcoming" 
                          size="small" 
                          color="secondary" 
                          variant="outlined"
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      <Link to={`/games/${game.key}`} style={{ textDecoration: 'none' }}>
                        <Chip 
                          label="View Details" 
                          size="small" 
                          color="primary"
                        />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    <Typography variant="body2" color="text.secondary">
                      No games found.
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50]}
            component="div"
            count={totalGames}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      )}
    </Card>
  );
};

export default GamesPage; 