#!/usr/bin/env node

'use strict';

//var MonthYear = require('/lib/month.js');

console.log('zellers file is running');

let modifiedMonth = function (month) {
  var mod;

  if (month === 1) {
    mod = 13;
    {
    return month + 12;
   };

  } if (month === 2) {
    mod = 14;
     {
    return month + 12;
   };

  } else {
    mod = month;

  }
  return mod;
 };

let modifiedYear = function (year, month) {
  if (month < 3){
    var year = year - 1;

  } else {
    year = year;
  }
  return year;
};

let getDay = function (year, month, day) {
  modifiedMonth(month);
  modifiedYear(year, month);
  var h = (day + parseInt(((month + 1) * 26) / 10) + year + parseInt(year / 4) + 6 * parseInt(year / 100) + parseInt(year / 400) - 1) % 7;
    return h;
};


module.exports = {
  modifiedMonth: modifiedMonth,
  modifiedYear: modifiedYear,
  getDay: getDay
}
