exports.seed = function(knex) {
  return knex('characters')
    .truncate()
    .then(function () {
      return knex('characters').insert([
        { 
          name: 'Paul Atreides',
          affiliation: 'House Atreides'
        },
        { 
          name: 'Lady Jessica',
          affiliation: 'House Atreides'
        },
        { 
          name: 'Stilgar Ben Fifwari',
          affiliation: 'Sietch Tabr'
        }
      ]);
    });
};
