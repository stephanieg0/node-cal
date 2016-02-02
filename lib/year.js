#!/usr/bin/env node --harmony_destructuring

"use strict";
const getMonth = require('./month.js');
const zellers = require('../zellers.js');
const _ = require('lodash');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//Getting the months
let getMonths = function (year) {

  var WeekDay = [];
  var Days = [];
  var DaysString = [];
  var Print = [];

  for (var i = 1; i < months.length; i++) {

    //WeekDay.push(zellers.getDay(1, i, year));

    //Days.push(getMonth.daysInMonth(i, year));

  }//end loop
}

//centering Headers
let headerLayout = function () {

  var finalSpaces = [];

  for (var i = 0; i < months.length; i ++){
    //console.log(months[i]);
    var frontSpaces = Math.floor((20 - months[i].length) / 2);
    var backSpaces = 20 - (months[i].length + frontSpaces);

    finalSpaces.push(" ".repeat(frontSpaces) + months[i] + " ".repeat(backSpaces));

  }
//64 spaces across
    var weekDays = 'Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa\n';
    finalSpaces.splice(3, 0, '\n');
    finalSpaces.splice(4,0, weekDays);
    finalSpaces.splice(8, 0, '\n');
    finalSpaces.splice(9,0, weekDays);
    finalSpaces.splice(13, 0, '\n');
    finalSpaces.splice(14,0, weekDays);
    finalSpaces.splice(18, 0, '\n');
    finalSpaces.splice(19,0, weekDays);

    var HeaderSpaces = finalSpaces.join().replace(/,/g, "");

    console.log(HeaderSpaces);
    return HeaderSpaces;
}

function MakeYear (year) {
  headerLayout();
}

module.exports = {
  MakeYear: MakeYear
}
