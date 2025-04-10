@echo off
echo Setting up NFL Analytics database with test data...
echo.
echo This script will:
echo 1. Generate Prisma client
echo 2. Reset the database
echo 3. Import team data only
echo.

echo Generating Prisma client...
call npx prisma generate
if %ERRORLEVEL% NEQ 0 (
  echo Error generating Prisma client
  goto end
)

echo.
echo Resetting database...
call npx prisma migrate reset --force
if %ERRORLEVEL% NEQ 0 (
  echo Error resetting database
  goto end
)

echo.
echo Importing team data...
call npm run test-import
if %ERRORLEVEL% NEQ 0 (
  echo Error importing team data
  goto end
)

echo.
echo Test data import complete!
echo You can now run the test server with:
echo   test-server.bat
echo.

:end
pause