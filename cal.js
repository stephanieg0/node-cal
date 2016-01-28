#!/usr/bin/env node --harmony_destructuring

'use strict';
const getMonth = require('./lib/month.js');
const zellers = require('./zellers.js');
console.log('calendar responded: ');

const [,, ...args] = process.argv;
//console.log(args);

if (args.length === 2){
  var [month, year] = args;

  let [MonthYear, returnedMonth, returnedYear] = getMonth.currentMonth(month, year);
  let Header = getMonth.centerHeader(MonthYear);
  let Days = getMonth.daysInMonth(month, year);
  let DaysString = getMonth.daysToString(Days);
  //let modMonth = zellers.modifiedMonth(month);
  let modDay = zellers.getDay(1, month, year);
  let Print = getMonth.printMonth(Header, DaysString);

} else if (args.length === 1) {
  const [year] = args;

  console.log(`generateMonth(${year})`);
} else {

  console.log('Please put a date input, like 1 2016');
  process.exit(64);
  //echo $?
}

//const = generateMonth = require('./lib/month');
//console.log(generateMonth(2016, 1));

