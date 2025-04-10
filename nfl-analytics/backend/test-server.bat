@echo off
echo Starting NFL Analytics Test Server...
echo.
echo This will generate the Prisma client and start a minimal test server
echo.

echo Generating Prisma client...
call npx prisma generate
if %ERRORLEVEL% NEQ 0 (
  echo Error generating Prisma client
  goto end
)

echo.
echo Starting test server...
echo Press Ctrl+C to stop the server.
echo.

call npm run test-server

:end
pause