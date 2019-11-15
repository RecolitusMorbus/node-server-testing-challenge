exports.up = function(knex) {
  return knex.schema.createTable('characters', tbl => {
    tbl.increments();
    tbl
      .string('name', 244)
      .notNullable()
      .unique();
    tbl
      .string('affiliation', 244);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('characters');
};
