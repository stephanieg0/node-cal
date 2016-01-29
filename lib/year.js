#!/usr/bin/env node --harmony_destructuring

"use strict";
const getMonth = require('./month.js');
const _ = require('lodash');

let currentYear = function (year) {
  console.log(year);

  //defining months in the year.
  const months = _.range(1,13);
  var MonthYear = [];

  for (var i = 1; i <= months.length; i++) {

    MonthYear.push(getMonth.currentMonth(i, year));

    //getMonth.centerHeader(MonthYear);
  }
  console.log(MonthYear);
}

module.exports = {
  currentYear: currentYear
}
