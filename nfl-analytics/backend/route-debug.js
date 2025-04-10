// Debug script to print all registered routes
const express = require('express');
const app = express();

// Middleware to print route registration
app.use((req, res, next) => {
  console.log(`Registered route handler: ${req.method} ${req.path}`);
  next();
});

// Add a few test routes
app.get('/test1', (req, res) => res.json({ message: 'Test 1' }));
app.get('/api/test2', (req, res) => res.json({ message: 'Test 2' }));
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// List all routes at startup
function listRoutes() {
  console.log('\nRegistered routes:');
  
  const routes = [];
  app._router.stack.forEach(middleware => {
    if (middleware.route) {
      // Route
      const path = middleware.route.path;
      const methods = Object.keys(middleware.route.methods)
        .filter(method => middleware.route.methods[method])
        .map(method => method.toUpperCase());
      
      routes.push(`${methods.join(', ')} ${path}`);
    } else if (middleware.name === 'router') {
      // Router middleware
      const path = middleware.regexp.toString().split('\\')[1]?.replace('\\/?(?=\\/|$)', '') || '/';
      
      if (middleware.handle.stack) {
        middleware.handle.stack.forEach(handler => {
          if (handler.route) {
            const routePath = handler.route.path;
            const methods = Object.keys(handler.route.methods)
              .filter(method => handler.route.methods[method])
              .map(method => method.toUpperCase());
            
            routes.push(`${methods.join(', ')} ${path}${routePath}`);
          }
        });
      }
    }
  });
  
  routes.forEach(route => console.log(`  ${route}`));
}

// Start a test server
const port = 3002; // Different port to avoid conflicts
app.listen(port, () => {
  console.log(`Debug server running on port ${port}`);
  listRoutes();
});