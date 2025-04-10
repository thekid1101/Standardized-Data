// Test basic TCP port binding
const net = require('net');

// Create a simple TCP server
const server = net.createServer((socket) => {
  console.log('Client connected');
  socket.write('Hello from server\r\n');
  socket.end();
});

// Try different ports
const ports = [3001, 8080, 5000, 9000];

function tryPort(portIndex) {
  if (portIndex >= ports.length) {
    console.log('All ports failed. Check for firewall or other issues blocking connections.');
    process.exit(1);
    return;
  }
  
  const port = ports[portIndex];
  console.log(`Trying to bind to port ${port}...`);
  
  server.once('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is already in use.`);
    } else {
      console.log(`Error on port ${port}: ${err.message}`);
    }
    // Try next port
    tryPort(portIndex + 1);
  });
  
  server.listen(port, '0.0.0.0', () => {
    const address = server.address();
    console.log(`✅ SUCCESS: Server listening on ${address.address}:${address.port}`);
    console.log('Try connecting with: telnet localhost ' + address.port);
    
    // After 10 seconds, close this server and try the next port
    setTimeout(() => {
      server.close(() => {
        console.log(`Closed server on port ${port}`);
        tryPort(portIndex + 1);
      });
    }, 10000);
  });
}

// Start trying ports
tryPort(0);