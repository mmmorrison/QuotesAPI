exports.up = function(knex, Promise) {
  return knex.schema.createTable('quotes', function(table){
    table.increments();
    table.text('quote');
    table.string('author');
    table.text('book');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('quotes');
};
