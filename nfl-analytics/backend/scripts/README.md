# NFL Analytics Data Import Scripts

This directory contains scripts for importing NFL data from CSV files into the PostgreSQL database.

## Import Data Script

### Overview
The `import_data.js` script processes CSV files containing NFL data and imports them into the database. It handles:
- Team data
- Player data
- Weekly roster data
- Game logs
- Play-by-play data

### CSV File Requirements
The script expects CSV files to be in the following format and location:
- Path: `C:/Users/johnn/Documents/Standardized Data/`
- File naming pattern:
  - Game logs: `YYYY-Advanced-Gamelog-Standardized.csv`
  - Play-by-play: `YYYY-Advanced-PBP-Data-Standardized.csv`
  - Weekly roster: `YYYY-Weekly-Roster-Key-Standardized.csv`

### Running the Import
To run the import script:
```
npm run import-data
```

### Error Handling
The script processes data in batches to prevent long-running transactions. If an error occurs in one batch, the script:
1. Logs the error
2. Rolls back that specific batch
3. Continues with the next batch

### Customization
To modify the script:
- Adjust the `BATCH_SIZE` constant to control how many records are processed in a single transaction
- Modify the `DATA_DIR` constant if your CSV files are in a different location
- Update the CSV column mappings if your file format changes