# NFL Analytics Backend Setup Guide

This guide will walk you through setting up the NFL Analytics backend from scratch.

## Prerequisites

- Node.js (v14+)
- PostgreSQL database server
- NFL data files in CSV format

## Step 1: Install Dependencies

First, install all the required npm packages:

```bash
# Install backend dependencies
cd /path/to/nfl-analytics/backend
npm install
```

## Step 2: Configure Environment Variables

Create a `.env` file in the backend directory with the following settings:

```
DATABASE_URL="postgresql://username:password@localhost:5432/nfl_analytics"
PORT=3001
DATA_DIR="/path/to/your/csv/files"
BATCH_SIZE=100
```

Make sure to replace:
- `username` and `password` with your PostgreSQL credentials
- `/path/to/your/csv/files` with the absolute path to your NFL CSV data files

## Step 3: Initialize the Database

1. Create a new PostgreSQL database:

```bash
psql -U postgres -c "CREATE DATABASE nfl_analytics;"
```

2. Apply the database migrations:

```bash
npm run prisma:migrate
```

3. Generate the Prisma client:

```bash
npm run prisma:generate
```

## Step 4: Import the Data

Run the data import script to load all CSV data into the database:

```bash
npm run import-data
```

This process may take some time depending on the amount of data being imported. The script includes detailed logging to track progress.

## Step 5: Start the Server

Start the development server:

```bash
npm run dev
```

The API will be available at http://localhost:3001/api

## Troubleshooting

### Database Connection Issues

If you encounter database connection errors:

1. Verify your PostgreSQL service is running
2. Check the database credentials in your `.env` file
3. Ensure your database exists with `psql -U postgres -l`

### Import Errors

If the data import process fails:

1. Check that the CSV files are in the correct directory specified by `DATA_DIR`
2. Verify the CSV file naming format (e.g., `2023-Advanced-Gamelog-Standardized.csv`)
3. Examine the error logs for specific issues
4. Try running the import with a smaller batch size by setting `BATCH_SIZE=50` in your `.env` file

### API Errors

If the API returns errors:

1. Check the console for error messages
2. Verify the database contains data by running `npm run prisma:studio`
3. Ensure all migrations have been applied
4. Restart the server with `npm run dev`