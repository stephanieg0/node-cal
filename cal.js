#!/usr/bin/env node --harmony_destructuring

'use strict';
const getMonth = require('./lib/month.js');
const zellers = require('./zellers.js');
const getYear = require('./lib/year.js');
console.log('calendar responded: ');
console.log(" ");

const [,, ...args] = process.argv;

//Calculating month. Zero arguments will give current month.
if (args.length === 2 || args.length === 0){

  var [month, year] = args;

  let [MonthYear, returnedMonth, returnedYear] = getMonth.currentMonth(month, year);

  let Header = getMonth.centerHeader(MonthYear);

  let WeekDay = zellers.getDay(1, returnedMonth, returnedYear);

  let Days = getMonth.daysInMonth(returnedMonth, returnedYear);

  let DaysString = getMonth.daysLayout(Days, WeekDay);

  let Print = getMonth.printMonth(Header, DaysString);

//Calculating Year.
} else if (args.length === 1) {
  const [year] = args;

  getYear.currentYear(year);

  } else {

  console.log('Please put a date input, like 1 2016');
  process.exit(64);
  //echo $?
}

//const = generateMonth = require('./lib/month');
//console.log(generateMonth(2016, 1));

