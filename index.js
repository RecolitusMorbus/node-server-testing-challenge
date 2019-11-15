require('dotenv').config();
const server = require('./api/server/server.js');

const PORT = process.env.PORT | 4000;

server.listen(PORT, () => {
  console.log(`+++LISTENING ON PORT ${PORT}+++`);
});