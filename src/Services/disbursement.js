'use strict';
const _ = require('lodash');

const { Orders,  Disbursements } = require('../Models');
const { getMonday } = require('../utils/helpers');

// TODO: expose an env with values in case we want to make them easily editable without re-deployment
const LESS_THAN_50_FEES = 0.01;
const BET_50_AND_300_FEES = 0.095;
const MORE_THAN300_FEES = 0.085;

const getDisbursementsPerMerchantInAWeek = async (day, merchantId) => {
    const beginingOfCurrentWeek = getMonday(day);

	return Disbursements.findByMerchantIdByWeek(beginingOfCurrentWeek, merchantId);
};

const getAllDisbursementsInAWeek = async (day) => {
    const beginingOfCurrentWeek = getMonday(day);
    
	return Disbursements.findAllByWeek(beginingOfCurrentWeek);
};

const calculate = async() => {
	const beginingOfCurrentWeek = getMonday(new Date());
	const recentlyCompletedOrdersPerMerchant = await Orders.findCompletedInInWeek(beginingOfCurrentWeek); // grouped by merchant Id
	const calculatedDispursements = recentlyCompletedOrdersPerMerchant.forEach(merchant => { // { merchant_id: []}
		_.reduce(_.values(merchant), (sum, amount) => {
			return sum + calculateFee(amount);
		}, 0);
	});

	calculatedDispursements.forEach(async merchant => {
		await Disbursements.create(beginingOfCurrentWeek, merchant);
	});
};

const calculateFee = (amount) => {
	if(amount < 50) {
		return amount*LESS_THAN_50_FEES;
	} else if(amount >= 50 && amount < 300) {
		return amount*BET_50_AND_300_FEES;
	} else {
		return amount * MORE_THAN300_FEES;
	}
};

module.exports = {
	getDisbursementsPerMerchantInAWeek,
	getAllDisbursementsInAWeek,
	calculate
};