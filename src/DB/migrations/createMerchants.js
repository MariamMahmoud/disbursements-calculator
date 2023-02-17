module.exports = {
	create: `CREATE TABLE merchants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    cif VARCHAR(255) NOT NULL
  );`
};