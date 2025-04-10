@echo off
echo Importing NFL Analytics Data...
echo.
echo This script will:
echo 1. Reset the database
echo 2. Import teams, players, games, and stats
echo.

echo Resetting database...
call npm run reset
if %ERRORLEVEL% NEQ 0 (
  echo Error resetting database
  goto end
)

echo.
echo Importing data...
call npm run import
if %ERRORLEVEL% NEQ 0 (
  echo Error importing data
  goto end
)

echo.
echo Import complete!
echo You can now start the server with:
echo   start.bat
echo.

:end
pause