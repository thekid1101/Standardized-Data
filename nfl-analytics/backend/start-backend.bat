@echo off
echo Starting NFL Analytics Backend Server...
echo.
echo This will generate the Prisma client and start the development server
echo.

echo Generating Prisma client...
call npx prisma generate
if %ERRORLEVEL% NEQ 0 (
  echo Error generating Prisma client.
  goto end
)

echo.
echo Starting development server...
echo Press Ctrl+C to stop the server.
echo.

call npm run dev

:end
pause