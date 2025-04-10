// Check if port 3001 is being used
const net = require('net');

const server = net.createServer();
const port = 3001;

server.once('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`✅ Port ${port} is already in use - likely by your server`);
    console.log('This suggests your server is running correctly');
    
    // Additional diagnostics
    console.log('\nTrying to connect to the server...');
    const client = net.createConnection({ port: port }, () => {
      console.log(`✅ Successfully connected to port ${port}`);
      console.log('This confirms a server is accepting connections');
      client.end();
    });
    
    client.on('error', (err) => {
      console.log(`❌ Failed to connect to port ${port}: ${err.message}`);
      console.log('This suggests the server might not be accepting connections');
    });
  } else {
    console.log(`❌ Error checking port ${port}: ${err.message}`);
  }
});

server.once('listening', () => {
  console.log(`❌ Port ${port} is NOT in use!`);
  console.log('This suggests your server is not running correctly');
  server.close();
});

server.listen(port);