const express = require('express');

const Chars = require('../routes/router.js');

const server = express();

server.use(express.json());
server.use('/chars', Chars);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'Walk Without Rhythm' });
});

module.exports = server;