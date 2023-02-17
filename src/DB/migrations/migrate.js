'use strict';
const { Migrations } = require('pg-migrations');
const migrationScripts = require('.');

const migrations = new Migrations({
  host: 'localhost',
  port: 5432,
  user: 'myuser',
  password: 'mypassword',
  database: 'mydb'
});

const up = async(migrationScript) => {
  await migrations.createTable();
  await migrations.createMigration(migrationScript);
}

// async function down() {
//   await migrations.dropTable();
// }


migrationScripts.forEach(migrationScript => {
    await up(migrationScript.create)
});