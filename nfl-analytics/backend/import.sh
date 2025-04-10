#!/bin/bash
echo "Starting NFL Analytics data import..."
echo ""
echo "This script will import all CSV data into the SQLite database"
echo ""

echo "Running import script..."
npm run import

if [ $? -ne 0 ]; then
  echo "Error during data import."
  exit 1
fi

echo ""
echo "Data import completed successfully!"