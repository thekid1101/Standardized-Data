@echo off
echo Setting up NFL Analytics Backend...
echo.
echo This script will:
echo 1. Generate Prisma client
echo 2. Apply database migrations
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
echo Setup complete!
echo You can now import data with:
echo   import.bat
echo.

:end
pause