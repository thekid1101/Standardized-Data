// TCP client test
const net = require('net');

const HOST = 'localhost';
const PORT = 3001;

console.log(`Attempting TCP connection to ${HOST}:${PORT}...`);

const client = new net.Socket();
let connected = false;

client.connect(PORT, HOST, () => {
    connected = true;
    console.log(`✅ CONNECTED TO ${HOST}:${PORT}`);
    console.log('This confirms a server is accepting connections at the TCP level');
    console.log('If your HTTP server is running but not responding, it might be an application-level issue');
    
    // Send a simple HTTP request
    client.write('GET /health HTTP/1.1\r\nHost: localhost\r\nConnection: close\r\n\r\n');
});

client.on('data', (data) => {
    console.log('\nServer response:');
    console.log(data.toString());
    client.destroy();
});

client.on('close', () => {
    if (connected) {
        console.log('Connection closed');
    }
});

client.on('error', (err) => {
    console.log(`❌ ERROR: ${err.message}`);
    
    if (err.code === 'ECONNREFUSED') {
        console.log('Connection was refused. This means no server is listening on this port.');
        console.log('Make sure your Express server is actually running and binding to this port.');
    }
});

// Set a timeout
setTimeout(() => {
    if (!connected) {
        console.log('Connection timed out after 5 seconds');
        client.destroy();
    }
}, 5000);