module.export = {
	create: `CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    merchant_id INT REFERENCES merchants(id),
    shopper_id INT REFERENCES shoppers(id),
    amount  REAL,
    created_at TIMESTAMP DEFAULT NOW(),
    completed_at TIMESTAMP,
  );`
};

