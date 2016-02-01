#!/usr/bin/env node --harmony_destructuring

"use strict";
const getMonth = require('./month.js');
const zellers = require('../zellers.js');
const _ = require('lodash');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let getMonths = function (year) {

  var WeekDay = [];
  var Days = [];
  var DaysString = [];
  var Print = [];

  for (var i = 1; i < months.length; i++) {

    WeekDay.push(zellers.getDay(1, i, year));

    Days.push(getMonth.daysInMonth(i, year));

    //DaysString.push(getMonth.daysLayout(Days, WeekDay).replace(/,/g, ""));
    //Print.push(getMonth.printMonth(months[i], DaysString));

  }//end loop
  //console.log(WeekDay);
  //console.log(Days);
}

let headerLayout = function () {

  var finalSpaces = [];

  for (var i = 0; i < months.length; i ++){
    //console.log(months[i]);
    var frontSpaces = Math.floor((20 - months[i].length) / 2);
    var backSpaces = 20 - (months[i].length + frontSpaces);

    finalSpaces.push(" ".repeat(frontSpaces) + months[i] + " ".repeat(backSpaces));

  }
      console.log(finalSpaces.join());
      //console.log(months);
      return finalSpaces;
}

let printYear = function () {

}

module.exports = {
  getMonths: getMonths,
  headerLayout: headerLayout
}
