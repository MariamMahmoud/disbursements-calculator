'use strict';

const app = require('./src/Routes');
const { Pool } = require('pg');

const PORT = 8080;
const pool = new Pool({
	user: 'myuser',
	host: 'localhost',
	database: 'mydb',
	password: 'mypassword',
	port: 5432,
});

app.listen(PORT, async function() {
	console.log(`Listening on ${PORT}`);
	try{
		await pool.connect();
		console.log('DB connected');
		return true;
	} catch(error) {
		console.log(error);
		throw error;
	}
});