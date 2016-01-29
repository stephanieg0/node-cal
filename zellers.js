#!/usr/bin/env node

'use strict';

//var MonthYear = require('/lib/month.js');

//console.log('zellers file is running');

let modifiedMonth = function (month) {
  var modMonth;

  if (month <= 2) {
    modMonth = parseInt(month) + 12;
    //console.log('modified month', modMonth);
    return modMonth;

  } else {

  } return month;

 };

let modifiedYear = function (month, year) {

  if (month < 3){
    year = year - 1;

  } else {
    year = year;
  }

  return year;
};

let getDay = function (day, month, year) {
  let modMonth = modifiedMonth(month);
  let modYear = modifiedYear(month, year);
  var h = (day + Math.floor(((modMonth + 1) * 26) / 10) + modYear + Math.floor(modYear / 4) + 6 * Math.floor(modYear / 100) + Math.floor(modYear / 400) - 1) % 7;
  //Su:0, Mo: 1, Tu:2, We: 3, Th:4, Fr:5, Su:6

  if (h === -1) {
      h = 6;
  }

  //console.log('Zellers h result: ', h);
  return h;
};


module.exports = {
  modifiedMonth: modifiedMonth,
  modifiedYear: modifiedYear,
  getDay: getDay
}
