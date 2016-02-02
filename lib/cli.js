'use strict';

const getMonth = require('./month.js');
const getYear = require('./year.js');
console.log('calendar responded: ');
console.log(" ");

const [,, ...args] = process.argv;

//Calculating month. Zero arguments will give current month.
if (args.length === 2 || args.length === 0){

  var [month, year] = args;

  getMonth.MakeMonth(month, year);

//Calculating Year.
} else if (args.length === 1) {
  const [year] = args;

  getYear.getMonths(year);
  getYear.headerLayout();

  } else {

  console.log('Please put a date input, like 1 2016');
  process.exit(64);
  //echo $?
}

//const = generateMonth = require('./lib/month');
//console.log(generateMonth(2016, 1));

