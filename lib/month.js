#!/usr/bin/env node --harmony_destructuring

"use strict";
console.log('month file is running');

//const zeller = require('../zellers.js');
const _ = require('lodash');


//Getting month and year
let currentMonth = function (month, year) {
    var date = new Date();

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

    return [MonthYear, month, currentYear];

}

//Getting the number of days in current month
let daysInMonth = function (month, year) {
   var Days = new Date(year, month, 0).getDate();

   return Days;
}

let daysToString = function (Days, WeekDay) {
  console.log("WeekDay", WeekDay);
   //Calculating spaces by repeating a space per 3 characters.
   var weekSpaces = " ".repeat(WeekDay * 3);
   var counter = 20 - (Days * 3);

    for (var i = 1; i <= Days; i++) {
      //add a space in front of single digits
      if (i < 10){
        weekSpaces += " " + (i);

      } else {
        weekSpaces += (i);
        if (i === Days) {
          break;
        }
      }


      //store numbers in array
      //days.push(i);
   }
  //convert to string and take off the commas.
  // var DaysString = days.toString().replace(/,/g, " ");


  return weekSpaces;
}

//Centering Header
let centerHeader = function (MonthYear) {

  var totalSpaces = 20;

  var headerSpaces = Math.round((20 - MonthYear.length) / 2);

  var spaceString = " ";
  var Header = spaceString.repeat(headerSpaces) + MonthYear;
  return Header;

}

let printMonth = function (Header, DaysString) {
  const week = "Su Mo Tu We Th Fr Sa\n";

  const Print = Header + week + DaysString;
  console.log(Print);


}



module.exports = {
  currentMonth: currentMonth,
  centerHeader: centerHeader,
  daysInMonth: daysInMonth,
  daysToString: daysToString,
  printMonth: printMonth
}
