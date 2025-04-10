@echo off
echo Setting up NFL Analytics database...
echo.
echo This script will:
echo 1. Generate Prisma client
echo 2. Apply database migrations
echo 3. Import data from CSV files (optional)
echo.

echo Generating Prisma client...
call npx prisma generate
if %ERRORLEVEL% NEQ 0 (
  echo Error generating Prisma client
  goto end
)

echo.
echo Applying database migrations...
call npx prisma migrate deploy
if %ERRORLEVEL% NEQ 0 (
  echo Error applying migrations
  goto end
)

echo.
echo Database setup complete!

echo.
set /p import_data=Do you want to import data from CSV files? (y/n): 
if /i "%import_data%"=="y" (
  echo.
  echo Running data import...
  call npm run import
  if %ERRORLEVEL% NEQ 0 (
    echo Error during data import
    goto end
  )
  echo.
  echo Data import complete!
)

echo.
echo You can now start the server with:
echo   start-backend.bat
echo.

:end
pause