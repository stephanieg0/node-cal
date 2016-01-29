'use strict';

const {expect} = require('chai');
const {execSync} = require('child_process');

describe('test suite', () => {
  const Output = require('../lib/month.js');
  const zellers = require('../zellers.js');

  describe('CLI', () => {
    xit('should handle the current month', () => {
      const goal = execSync('cal').toString();
      const output = execSync('./cal.js').toString();

      expect(output).to.equal(goal);
    });
  });

  describe("Zeller's congruence", () => {
    describe('.modified_month', () => {
      it('return 13 for January', () => {
        expect(zellers.modifiedMonth(1)).to.equal(13);
      });

       it('return 14 for February', () => {
        expect(zellers.modifiedMonth(2)).to.equal(14);
      });

    });
     //2012, 2 === 14
     //2012, 3 === 3

    describe('.modified_year', function (){
      it('return 2014 for January 2015', () => {
      expect(zellers.modifiedYear(1, 2015)).to.equal(2014);
      });

       it('return 2015 for February 2016', () => {
      expect(zellers.modifiedYear(2, 2016)).to.equal(2015);
      });

       it('return 2017 for March 2017', () => {
      expect(zellers.modifiedYear(3, 2017)).to.equal(2017);
      });
    });
    //.modified year
    // 2016, 2 === 2015
    // 2017, 3 === 2017
    describe('.getDay', () => {
      it('returns 3 (Wednesday) for March 1, 2000', () => {
        expect(zellers.getDay(1, 3, 2000)).to.equal(3);
      });

       it('returns 1 (Monday) for March 1, 2100', () => {
        expect(zellers.getDay(1, 3, 2100)).to.equal(1);
      });

       it('returns 0 (Sunday) for March 2, 2200', () => {
        expect(zellers.getDay(2, 3, 2200)).to.equal(0);
      });

      it('returns 5 (Friday) for January 1, 2016', () => {
        expect(zellers.getDay(1, 1, 2016)).to.equal(5);
      });

    });
    //.calculate
    // 2000, 3, 1 === 3
    // 2100, 3, 1 === 1
   // 2200, 3, 2 === 0
    // 2300, 3, 1 === 4
  });//end of zellers

    //my calendar
    describe('currentMonth(), get month and year', () => {

    it('currentMonth(), output current month and year', () => {
      expect(Output.currentMonth(1, 2016)).to.eql([ 'January 2016\n', 1, 2016 ]);
    });

    it('currentMonth(), should output a different month and year, March 2017', () => {
      expect(Output.currentMonth(3, 2017)).to.eql(['March 2017\n', 3, 2017]);
    });

    xit('currentMonth(), should match layout of cal calendar', () => {
      const calResult = execSync('cal').toString();
      expect(Output.currentMonth(1, 2016)).to.equal(calResult);
    });
  });

    describe('daysInMonth(), should total of days of month and year', () => {
      it('should output total of days for Feb 2017', () => {
      expect(Output.daysInMonth(2, 2017)).to.equal(28);
      });

      it('should output total of days for April 2001', () => {
      expect(Output.daysInMonth(4, 2001)).to.equal(30);
      });

      it('output total of days for Jan, 2016', () => {
      expect(Output.daysInMonth(1, 2016)).to.equal(31);
       });
    });

    describe('daysLayout(), should output all the days passed from daysInMonth', () => {
      it('should output complete day layout for Feb 1, 2016', () => {

      var [MonthYear, returnedMonth, returnedYear]= Output.currentMonth(2, 2016);

      var Days = Output.daysInMonth(returnedMonth, returnedYear);

      var WeekDay = zellers.getDay(1, returnedMonth, returnedYear);

      expect(Output.daysLayout(Days, WeekDay)).to.eql('    1  2  3  4  5  6\n 7  8  9 10 11 12 13\n14 15 16 17 18 19 20\n21 22 23 24 25 26 27\n28 29');
      });

      it('should output complete day layout for Jan 1, 2016', () => {

      var [MonthYear, returnedMonth, returnedYear]= Output.currentMonth(1, 2016);

      var Days = Output.daysInMonth(returnedMonth, returnedYear);

      var WeekDay = zellers.getDay(1, returnedMonth, returnedYear);

      expect(Output.daysLayout(Days, WeekDay)).to.eql('                1  2\n 3  4  5  6  7  8  9\n10 11 12 13 14 15 16\n17 18 19 20 21 22 23\n24 25 26 27 28 29 30\n31');
      });

    });

});//end of test suite
