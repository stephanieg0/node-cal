#!/usr/bin/env node --harmony_destructuring

"use strict";

var zeller = require('../zellers.js');

console.log('month file is running');

var daysString;

//Getting the number of days in current month
let daysInMonth = function (month, year) {
    var totalDays = new Date(year, month, 0).getDate();
     //console.log(totalDays);
    checkDaySpaces(totalDays);
    return totalDays;
}

let checkDaySpaces = function (totalDays) {
   var days = [];

   for (var i = 1; i <= totalDays; i++) {
      days.push(i);
   }
   daysString = days.toString().replace(/,/g, " ");
   //console.log('daysString', daysString);
   return daysString;

}

//Centering Header
let centerHeader = function (month, year) {
  var Header = month + " " + year + "\n";

  var totalSpaces = 20;

  var headerSpaces = Math.round((20 - Header.length) / 2);

  var spaceString = " ";
  var Header = spaceString.repeat(headerSpaces) + Header;

  console.log(Header);
  return Header;

}


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

    //days
    var monthNumb = date.getMonth()+1;
    daysInMonth(monthNumb, currentYear);

    //Output
    var MonthYear = currentMonth + " " + currentYear + "\n";
    //"Su Mo Tu We Th Fr Sa\n" + daysString;

    //center header
    centerHeader(currentMonth, currentYear);

    return MonthYear;

}

let drawMonth = function () {
  console.log(Header);
}

module.exports = {
  currentMonth: currentMonth,
  daysInMonth: daysInMonth
}
