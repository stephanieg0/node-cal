#!/usr/bin/env node --harmony_destructuring

"use strict";

var zeller = require('../zellers.js');

console.log('month file is running');

//Getting month and year
let currentMonth = function (month, year) {
    var date = new Date();
    //console.log('date', date);

    //Month
    var months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    if (month) {

      var currentMonth = months[month];

    } else {

      var currentMonth = months[date.getMonth()+1];
    }

    //Year
    if (year) {
      var currentYear = year;
    } else {
      var currentYear = date.getFullYear();
    }

    //pass month and year to get days
    //var monthNumb = date.getMonth()+1;

    //Output for test
    var MonthYear = currentMonth + " " + currentYear + "\n";

    console.log('currentMonth ** ', currentMonth);

    //center header
    //centerHeader(currentMonth, currentYear);
    //get days in month
    //daysInMonth(month, currentYear);
    //var Header = centerHeader(currentMonth, currentYear);

    return [MonthYear, month, currentYear];

}

//Getting the number of days in current month
let daysInMonth = function (month, year) {
   var totalDays = new Date(year, month, 0).getDate();

   daysToString(totalDays);

   return totalDays;
}

let daysToString = function (totalDays) {
   var days = [];

    for (var i = 1; i <= totalDays; i++) {
      days.push(i);
   }

   var daysString = days.toString().replace(/,/g, " ");

   return daysString;
}

//Centering Header
let centerHeader = function (MonthYear) {

  var totalSpaces = 20;

  var headerSpaces = Math.round((20 - MonthYear.length) / 2);

  var spaceString = " ";
  var Header = spaceString.repeat(headerSpaces) + MonthYear;

  return Header;

}

let drawMonth = function (Header, daysString) {
  const week = "Su Mo Tu We Th Fr Sa\n";
  console.log(Header + week + daysString);


}



module.exports = {
  currentMonth: currentMonth,
  daysInMonth: daysInMonth,
  drawMonth: drawMonth
}
