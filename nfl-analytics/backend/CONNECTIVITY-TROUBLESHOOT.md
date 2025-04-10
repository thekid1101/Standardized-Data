# Network Connectivity Troubleshooting

If you're having trouble connecting to your API server, follow these steps to diagnose and fix the issues.

## Step 1: Verify Server Is Running

1. Check if the server process is running:
   ```
   tasklist | findstr node
   ```

2. Check if the port is in use (run in PowerShell):
   ```
   Test-NetConnection -ComputerName localhost -Port 3001
   ```

3. Run the port check script:
   ```
   node port-check.js
   ```

## Step 2: Check Firewall Settings

Windows Firewall might be blocking connections:

1. Open Windows Defender Firewall:
   - Search for "firewall" in Windows search
   - Click "Windows Defender Firewall"

2. Check inbound rules:
   - Click "Advanced settings"
   - Select "Inbound Rules"
   - Check for any rules blocking Node.js or port 3001

3. Add an inbound rule (if needed):
   - Click "New Rule..." on the right panel
   - Select "Port" and click "Next"
   - Select "TCP" and enter "3001" in "Specific local ports"
   - Click "Next", select "Allow the connection", and follow the prompts

## Step 3: Check Antivirus Settings

Some antivirus programs might be blocking the connections:

1. Temporarily disable your antivirus
2. Try accessing the API again
3. If it works, add an exception for your Node.js application

## Step 4: Check Network Configuration

1. Verify your IP configuration:
   ```
   ipconfig /all
   ```

2. Try binding the server to different interfaces:
   - Edit the server code to bind to '0.0.0.0' (all interfaces)
   - Try binding explicitly to your machine's IP address

## Step 5: Test With Simple HTTP Client

Run the simple HTTP test script:
```
node simple-http-test.js
```

## Step 6: Check Express Routes Configuration

1. Verify your routes are registered correctly:
   ```
   node route-debug.js
   ```

2. Verify API endpoint paths:
   - Ensure health check is at `/health`
   - Ensure API routes are under `/api/*`

## Step 7: Check Development Environment

1. Try a different port:
   - Change the port in `.env` to 3002 or another port
   - Restart the server
   - Update test scripts with the new port

2. Try a different networking mode:
   - If using WSL, try running everything in Windows
   - If in Windows, ensure IPv6 is not causing conflicts

## Step 8: Database Connectivity

1. Verify PostgreSQL is running:
   ```
   sc query postgresql
   ```

2. Test direct database connection:
   ```
   psql -U postgres -d nfl_analytics -c "SELECT COUNT(*) FROM players"
   ```

## Additional Troubleshooting Commands

1. Check open network connections:
   ```
   netstat -ano | findstr 3001
   ```

2. Kill and restart Node.js:
   ```
   taskkill /F /IM node.exe
   ```

3. Check for conflicts:
   ```
   netstat -aon | findstr LISTENING
   ```