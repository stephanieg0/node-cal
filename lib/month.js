"use strict";

console.log('month file is running');

var daysString;

//Getting the number of days in current month
let daysInMonth = function (month, year) {
    var totalDays = new Date(year, month, 0).getDate();
    var days = [];

    for (var i = 1; i <= totalDays; i++) {
      days.push(i);
     }
    daysString = days.toString().replace(/,/g, " ");
    console.log('daysString', daysString);

    return daysString;
}

let currentMonth = function () {
    var date = new Date();
    console.log('date', date);

    //Month
    var month = new Array();
    month[1] = 'January';
    var currentMonth = month[date.getMonth()+1];

    //Year
    var currentYear = date.getFullYear();

    //days
    var monthNumb = date.getMonth()+1;
    daysInMonth(monthNumb, currentYear);

    //Output
    console.log('******THIS IS MY CONSOLE.LOG******');
    var output = "    " + currentMonth + " " + currentYear + "\n" +
      "Su Mo Tu We Th Fr Sa\n" + daysString;
    console.log(output);

}


module.exports = {
  currentMonth: currentMonth
}
