const { Pool } = require('pg');
const orders = require('./orders.json');
const merchants = require('./merchants.json');
const shoppers = require('./shoppers.json');

const pool = new Pool({
	user: 'your_db_user',
	host: 'your_db_host',
	database: 'your_database_name',
	password: 'your_password',
	port: 5432
});

const seedOrders = async () => {
	const client = await pool.connect();
	try {
		const seedData = JSON.parse(orders);
		for (const order of seedData) {
			const { merchant_id, shopper_id, amount, created_at, completed_at } = order;
			await client.query(`
        INSERT INTO orders (merchant_id, shopper_id, amount, created_at, completed_at)
        VALUES ($1, $2, $3, $4, $5)
      `, [merchant_id, shopper_id, amount, created_at, completed_at]);
		}
	} finally {
		client.release();
	}
};

const seedMerchants = async () => {
	const client = await pool.connect();
	try {
		const seedData = JSON.parse(merchants);
		for (const merchant of seedData) {
			const { name, email, cif } = merchant;
			await client.query(`
          INSERT INTO merchants (name, email, cif)
          VALUES ($1, $2, $3)
        `, [name, email, cif]);
		}
	} finally {
		client.release();
	}
};

const seedShoppers = async () => {
	const client = await pool.connect();
	try {
		const seedData = JSON.parse(shoppers);
		for (const shopper of seedData) {
			const { name, email, cif } = shopper;
			await client.query(`
          INSERT INTO shoppers (name, email, nif)
          VALUES ($1, $2, $3)
        `, [name, email, nif]);
		}
	} finally {
		client.release();
	}
};
  
  
// TODO: make it more generic, to accomodate for any added seed file
seedOrders();
seedMerchants();
seedShoppers();
