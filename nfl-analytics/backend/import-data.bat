@echo off
echo Starting NFL Analytics data import...
echo.
echo This script will import all CSV data into the SQLite database
echo.

echo Running import script...
call npm run import

echo.
if %ERRORLEVEL% EQU 0 (
  echo Data import completed successfully!
) else (
  echo Error during data import.
)
pause