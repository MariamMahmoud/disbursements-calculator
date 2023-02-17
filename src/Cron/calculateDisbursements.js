'use strict';

const  cron = require('node-cron');
const disbursements = require('../Services/disbursement');
// eslint-disable-next-line no-undef
const timeSchedule = process.env.TIME_SCHEDULE || '0 0 * * MON';

const runJob = async() => {
	try {
		cron.schedule(timeSchedule, async() => {
			await disbursements.calculate();
		});
	} catch(error) {
		// TODO: log error
		const err = {
			name: 'Crone Job crashed',
			details: error.stack,
			message: error.message,
		};

		throw err;
	}
};

runJob().then(() => console.log('job started'));