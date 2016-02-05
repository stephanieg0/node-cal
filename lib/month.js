#!/usr/bin/env node --harmony_destructuring

"use strict";
//console.log('month file is running');

const _ = require('lodash');
const zellers = require('../zellers.js');


//Getting month and year
let currentMonth = function (month, year) {
    var date = new Date();

    //Month Section
    var months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    //if month is true assign the month to a string value.
    if (month) {

      var currentMonth = months[month];

    } else {
      //if month is not defined will assign the current month with getMonth function.
      var currentMonth = months[date.getMonth()+1];
      month = date.getMonth()+1;

    }

    //Year Section
    //if year is true assign year to current.
    if (year) {
      var currentYear = year;
    //if year is not defined get current year from getFullYear function.
    } else {
      var currentYear = date.getFullYear();
    }

    //Output for testing the month and year inputs
    //var MonthYear = currentMonth + " " + currentYear + "\n";
    var monthName = currentMonth;
    //Outout for test and other functions to call later.
    return [monthName, month, currentYear];

}

//Getting the number of days in current month
let daysInMonth = function (month, year) {
   var Days = new Date(year, month, 0).getDate();

   return Days;
}

let daysLayout = function (Days, WeekDay) {

  //Calculating spaces by repeating a space per 3 characters.
   var weekLayout = " ".repeat(WeekDay * 3);
   var counter = 20 - (WeekDay * 3);

   //looping through the amount of days of month
    for (var i = 1; i <= Days; i++) {
      //add a space in front of single digits
      if (i < 10){

        weekLayout += " " + (i);

      } else {

        weekLayout += (i);

      //break after the amount of days
        if (i === Days) {

          break;
          }
        }

      counter = counter - 2;

      if (counter === 0) {
        weekLayout += "\n";
        counter = 20;
      } else {
        weekLayout += " ";
        counter--;
      }
    }//end of loop

    const countBreaks = _.filter( weekLayout, x => x === "\n").length;
    let breaks = 0;

    switch (countBreaks) {
      case 3:
        breaks =  "\n\n\n";
        break;
      case 4:
        breaks = "\n\n";
        break;
      default:
        breaks = "\n";
    }

    return weekLayout;
}

//Centering Header
let centerHeader = function (month, year) {
  var MonthYear = month + " " + year + "\n";
  //console.log('centerHeader', MonthYear);
  var totalSpaces = 20;

  var headerSpaces = Math.round((20 - MonthYear.length) / 2);

  var spaceString = " ";
  var Header = spaceString.repeat(headerSpaces) + MonthYear;
  //console.log(Header);
  return Header;

}

//Printing full month
let printMonth = function (Header, DaysString) {
  const week = "Su Mo Tu We Th Fr Sa\n";
  var Print;

  Print = Header + week + DaysString;

  console.log(Print);

  return Print;

}

//calling functions in order
function MakeMonth (month, year) {

  let [monthName, returnedMonth, returnedYear] = currentMonth(month, year);

  let Header = centerHeader(monthName, returnedYear);

  let WeekDay = zellers.getDay(1, returnedMonth, returnedYear);

  let Days = daysInMonth(returnedMonth, returnedYear);

  let DaysString = daysLayout(Days, WeekDay);

  let Print = printMonth(Header, DaysString);

}

module.exports = {
  MakeMonth: MakeMonth,
  daysInMonth: daysInMonth
}
