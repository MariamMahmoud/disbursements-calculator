'use strict';

const moment = require('moment');
 /**
 * Gets Monday of current or given week.
 * 
 * @param d day of week to calculate Monday from.
 * @returns Monday of a given week at 00:00:00 am
 */
const getMonday = (d) => {
   return moment(d).startOf('week').toDate();
}
 /**
 * Gets EndofWeek of current or given Monday.
 * 
 * @param d Monday where the week begins.
 * @returns Sunday of a given week at 11:59:59 pm
 */
  const getEndOfWeek = (d) => {
    return moment(d).endOf('week').toDate();
  }
  
module.exports = {
    getMonday,
    getEndOfWeek
}