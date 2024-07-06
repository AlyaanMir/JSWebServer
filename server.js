// Importing required modules
const http = require('http');

// Creating a server instance
const server = http.createServer((req, res) => {
  // Handling incoming requests
  if (req.url === '/hello') {
    // Responding with a simple message if the URL is '/hello'
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello User, if you are reading this that means the server is working!\n');
  }
  else if (req.url === '/part2'){
    res.writeHead(200,{ 'Content-Type': 'text/plain' });
    res.end('Thinking about adding a database or maybe a UI along with this, with time we will see how this goes.\n')
  } else {
    // Responding with a 404 error if the URL is not '/hello'
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

// Listening to port 3000 for incoming requests
server.listen(3000, '127.0.0.1', () => {
  console.log('Server is running at http://127.0.0.1:3000/');
});
