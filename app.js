const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Node.js Pipeline!');
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on port 3000');
});


