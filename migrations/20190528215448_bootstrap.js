// what changes are to be applied to theh database
exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', function(tbl) {
      // primary key called id, integer, auto-increment
      
      tbl.increments();

      tbl.string('name', 128).notNullable().unique();
      tbl.timestamps(true, true);
  })
};

//how can i undo the changes
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('roles');
};
