'use strict';
const queryExecuter = require('../DB/queryExecuter');


const create = async(beginingOfCurrentWeek, merchant) => {
	const query = `INSER In Disbursements `; // TODO: fix query
	await queryExecuter.execut(query);
};
const findByMerchantIdByWeek = async(week, merchantId) => {
	const query = `SELECT * FROM disbursements 
		WHERE week = ${week} 
		AND merchant_id = ${merchantId}`;
	return queryExecuter.execut(query);

};
const findAllByWeek = async(week) => {
	const query = `SELECT * FROM disbursements 
		WHERE week = ${week} 
		GROUP_BY merchant_id`
	return queryExecuter.execut(query);

};

module.exports = {
	create,
	findByMerchantIdByWeek,
	findAllByWeek
};
