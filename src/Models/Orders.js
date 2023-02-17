'use strict';
const _ = require('lodash');
const queryExecuter = require('../DB/queryExecuter');

// TODO: complete CRUD, update / delete order


const create = async (order) => {
	const createQueryString = '';
	await queryExecuter.execut(createQueryString);
	// TODO: handle DB failures
};


// saves completed_at Time
// no use case for it yet
const complete = async (orderId) => {
	// TODO: make sure this is the time format accepted byt DB
	const completedTime = Date.now();
	const updateQueryString = ''; // TODO: add query

	await queryExecuter.execut(updateQueryString);
	// TODO: handle DB failures
};

const findCompletedInInWeek = async (weekStart) => {
	// TODO: get begin and end of week
	const weekStart = '';
	const weekEnd = '';

    // TODO: Double check query syntax
	const findQueryString = `SELECT * FROM orders WHERE completed_at IN RANGE ${weekStart} AND ${weekEnd}`; 
	const disbursements = await queryExecuter.execut(findQueryString);

	return _.groupBy(disbursements,merchant_id);
};

module.exports = {
	create,
	complete,
	findCompletedInInWeek
};