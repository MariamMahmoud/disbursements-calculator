module.exports = {
	create: `CREATE TABLE disbursements (
    id SERIAL PRIMARY KEY,
    merchant_id INT REFERENCES merchants(id),
    start_of_week TIMESTAMP NOT NULL,
    disbursement_amount VARCHAR(255) NOT NULL
  );`
};