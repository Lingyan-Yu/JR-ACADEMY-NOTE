/*
const time = require('./date.js')

const dt = new Date()
const newDT = time.convertDate(dt)

console.log('newDT', newDT)
*/

const moment = require('moment')
const newDT = moment().format('YYYY-MM-DD hh:mm:ss')
console.log('newDT', newDT)