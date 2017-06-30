/**
 * Node.js Boilerplate
 */

const express = require('express');

const server = express();
const NODE_PORT = parseInt(process.env.NODE_PORT, 10);

server.get('/', (req, res) => {
  res.send('Hi!');
});

server.listen(NODE_PORT, () => {
  console.log(`Server listening on port ${NODE_PORT} in ${process.env.NODE_ENV} mode...`);
});
