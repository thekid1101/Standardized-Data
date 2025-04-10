# API Connectivity Troubleshooting Guide

This document outlines the steps needed to fix API connectivity issues between the frontend and backend of the NFL Analytics application.

## Current Issues

1. WSL to Windows connectivity issues
2. Prisma client compatibility issues
3. API endpoint connectivity problems

## Step 1: Fix Prisma Client Generation

The Prisma client needs to be regenerated with the correct target platform:

```bash
# In Windows PowerShell, navigate to the backend directory
cd C:\Users\johnn\Documents\Standardized Data\nfl-analytics\backend

# Edit prisma/schema.prisma to add binaryTargets
# Add this line in the generator client block:
#   binaryTargets = ["native", "windows", "debian-openssl-3.0.x"]

# Generate Prisma client
npx prisma generate
```

## Step 2: Start the Backend Server

```bash
# In Windows PowerShell, navigate to the backend directory
cd C:\Users\johnn\Documents\Standardized Data\nfl-analytics\backend

# Start the server
npm run dev
```

## Step 3: Test API Connectivity

```bash
# In Windows PowerShell, navigate to the backend directory
cd C:\Users\johnn\Documents\Standardized Data\nfl-analytics\backend

# Test with the Windows-compatible API testing script
node windows-check-api.js
```

## Step 4: Test API in Browser

Open a browser and navigate to:
- http://localhost:3001/health
- http://localhost:3001/api/test

Verify that these endpoints return proper JSON responses.

## Step 5: Update Frontend Configuration (if needed)

If the API is accessible from the browser but not from the frontend application, update the frontend API configuration:

1. Edit `frontend/src/api/api.ts`
2. Update the `baseURL` to match your actual API URL

## Step 6: Start the Frontend

```bash
# In Windows PowerShell, navigate to the frontend directory
cd C:\Users\johnn\Documents\Standardized Data\nfl-analytics\frontend

# Install dependencies (if not already done)
npm install

# Start the development server
npm run dev
```

## Step 7: Verify Frontend-Backend Connectivity

1. Open the browser developer tools (F12)
2. Go to the Network tab
3. Interact with the frontend and observe API requests
4. Check for successful or failed requests
5. Use the response data to debug any remaining issues

## Additional Debugging Tips

1. Check WSL network configuration:
   ```bash
   ip addr
   ```

2. Check Windows network configuration:
   ```powershell
   ipconfig
   ```

3. Test cross-environment connectivity:
   ```bash
   # From WSL to Windows
   curl http://$(hostname).local:3001/health
   ```

4. Add more detailed API logging:
   - Add `console.log` statements to API endpoints
   - Log request and response details
   - Check server logs for errors

5. Frontend debugging:
   - Add request and response interceptors to Axios
   - Log API request details
   - Add error handling to API calls

## Next Steps for API Development

After fixing connectivity issues:

1. Complete and test all API endpoints
2. Add proper error handling
3. Add API documentation
4. Add request validation
5. Add authentication (if needed)
6. Add caching for common queries
7. Add rate limiting for API protection