const db = require('../../data/config/dbConfig.js');

module.exports = {
  insert,
  getAll
};

async function insert(char) {
  return db('characters')
    .insert(char, 'id')
    .then(([id]) => {
      return db('characters')
        .where({ id })
        .first();
    });
};

function getAll() {
  return db('characters');
};