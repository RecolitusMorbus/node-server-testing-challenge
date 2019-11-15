const db = require('../../data/config/dbConfig.js');

module.exports = {
  find,
  findById,
  insert,
  remove
};

function find() {
  return db('characters');
};

function findById(id) {
  return db('characters')
    .where({ id })
    .first();
}

async function insert(char) {
  return db('characters')
    .insert(char, 'id')
    .then(([id]) => {
      return db('characters')
        .where({ id })
        .first();
    });
};

function remove(id) {
  return db('characters')
    .where({ id })
    .delete();
};