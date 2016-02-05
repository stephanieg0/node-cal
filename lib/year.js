#!/usr/bin/env node --harmony_destructuring

"use strict";
const getMonth = require('./month.js');
const zellers = require('../zellers.js');
const _ = require('lodash');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//centering Header
let headerLayout = function () {

  var finalSpaces = [];

  for (var i = 0; i < months.length; i ++){
    //console.log(months[i]);
    var frontSpaces = Math.floor((20 - months[i].length) / 2);
    var backSpaces = 20 - (months[i].length + frontSpaces);

    finalSpaces.push(" ".repeat(frontSpaces) + months[i] + " ".repeat(backSpaces));

  }

//Spacing and breaks for the header
    var weekDays = 'Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa\n';
    finalSpaces.splice(1, 0, "  ");
    finalSpaces.splice(3, 0, "  ");
    finalSpaces.splice(5, 0, '\n');
    finalSpaces.splice(6,0, weekDays);
    finalSpaces.splice(8, 0, "  ");
    finalSpaces.splice(10, 0, "  ");
    finalSpaces.splice(12, 0, '\n');
    finalSpaces.splice(13,0, weekDays);
    finalSpaces.splice(15, 0, "  ");
    finalSpaces.splice(17, 0, "  ");
    finalSpaces.splice(19, 0, '\n');
    finalSpaces.splice(20,0, weekDays);
    finalSpaces.splice(22, 0, "  ");
    finalSpaces.splice(24, 0, "  ");
    finalSpaces.splice(26, 0, '\n');
    finalSpaces.splice(27,0, weekDays);

    var HeaderSpaces = finalSpaces.join().replace(/,/g, "");

    //console.log(HeaderSpaces);
    return HeaderSpaces;
}

//Getting the total of days in each month
let DaysInMonths = function (year) {
   const Days = [];
    for (var i = 1; i <= 12; i++) {

      Days.push(getMonth.daysInMonth(i, year));
    }

    return Days;
}

//Getting the day of the week of which each month starts
let WeekDay = function (year) {
  const weekdays = [];
  for (var i = 1; i <= 12; i++) {

    weekdays.push(zellers.getDay(1, i, year));
  }

  return weekdays;
}


let DaysString = function (returnedDays, returnedWeekdays) {
  const DaysLayout = [];
  //Calculating spaces by repeating a space per 3 characters.
   var weekLayout = " ".repeat(WeekDay * 3);
   var counter = 20 - (WeekDay * 3);
}

function MakeYear (year) {
  headerLayout();

  const returnedDays = DaysInMonths(year);

  const returnedWeekdays = WeekDay(year);

  //DaysString(returnedDays, returnedWeekdays);
}

module.exports = {
  MakeYear: MakeYear
}
