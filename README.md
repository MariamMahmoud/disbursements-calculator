# Disbursements Calculator
[![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=shield)](https://circleci.com/gh/MariamMahmoud/<TODO_REPO_NAME>)

### About App
App exposes:
- An endpoint that exposes the disbursements for a given merchant on a given week. If no merchant is provided return for all of them.
- A Cron job that runs every Monday of the week to persist the dimbursemets of the previous week for each merchant

### Technology used
- Node.js (express)
- Postgress DB
- Docker
- Swagger
- CircleCI

### Run Job
Use the following command to run Jobs `npm run jobs`

### Data Base Commands
- Use the following command to run migrations `npm run migrate`
- Use the following command to run Jobs `npm run seed`

### Start application
Use the following command to run app `npm start`


### Run tests
Use the following command to run tests `npm test`

### TODOs:
- Add swagger docs
- Add tests
- Setup circle ci project 
