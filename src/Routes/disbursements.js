'use strict';

const express = require('express');
const app = express();
const disburments = require('../Services/disbursement');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
// TODO: add authorization middleware
// TODO: use HTML response codes

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)),
app.get('/disbursements', async (req, res) => {
	try {
        const week = req.query.week;
        const merchantId = req.query.merchant;

		const response = merchantId ? 
            await disburments.getDisbursementsPerMerchantInAWeek(week, merchantId) :
            await disburments.getAllDisbursementsInAWeek(week);
		res.send({
			success: true,
			response,
		});
	} catch(error) {
		const err = {
			name: 'API disbursments crashed',
			details: error.stack,
			message: error.message,
		};

		res.send({
			success: false,
			error: err,
		});
	}
});

module.exports = app;