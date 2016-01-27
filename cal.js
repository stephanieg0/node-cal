#!/usr/bin/env node --harmony_destructuring

'use strict';

console.log('calendar responded: ');

const [,, ...args] = process.argv;
//console.log(args);

if (args.length === 2){
  const [month, year] = args;

  console.log(`generateMonth(${year}, ${month})`);
} else if (args.length === 1) {
  const [year] = args;

  console.log(`generateMonth(${year})`);
} else {

  console.log('Sorry!! input not valid');
  process.exit(64);
  //echo $?
}

//const = generateMonth = require('./lib/month');
//console.log(generateMonth(2016, 1));

