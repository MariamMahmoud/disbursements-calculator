module.export ={
	create:  `CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    nif VARCHAR(255) NOT NULL
  );`
};