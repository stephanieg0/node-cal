"use strict";

console.log('month file is running');

let currentMonth = function () {
    var date = new Date();
    console.log('date', date);

    //Month
    var month = new Array();
    month[0] = 'January';
    var currentMonth = month[date.getMonth()];

    //Year
    var currentYear = date.getFullYear();

    //calendar spaces
    var headSpaces;

    //Output
    var output = "    " + currentMonth + " " + currentYear + "\n" +
      "Su Mo Tu We Th Fr Sa\n";
    console.log(output);
}

module.exports = {
  currentMonth: currentMonth
}
