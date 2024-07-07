const http = require('http');
const pool = require('./db'); // Assuming db.js exports the PostgreSQL pool

const server = http.createServer(async (req, res) => {
  if (req.url === '/hello') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello User, if you are reading this that means the server is working!\n');
  } else if (req.url === '/part2') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Thinking about adding a database or maybe a UI along with this, with time we will see how this goes.\n');
  } else if (req.url === '/data') {
    try {
      const result = await pool.query('SELECT * FROM students'); // students is the name of the table
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result.rows));
    } catch (err) {
      console.error(err.message);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error\n');
    }
  } else if (req.url === '/Updates') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('I am working on a PostgreSQL database to this basic server.\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server is running at http://127.0.0.1:3000/');
});
