const { Pool } = require('pg');

const pool = new Pool({
	user: 'myuser',
	host: 'localhost',
	database: 'mydb',
	password: 'mypassword',
	port: 5432,
});

async function execut(query) {
	const client = await pool.connect();
	await client.query(query);
	console.log('query executed');
	client.release();
}

module.exports = {
	execut
};
