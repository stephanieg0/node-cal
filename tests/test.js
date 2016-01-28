'use strict';

const {expect} = require('chai');
const {execSync} = require('child_process');

describe('test suite', () => {
  const Output = require('../lib/month.js');

  describe('CLI', () => {
    xit('should handle the current month', () => {
      const goal = execSync('cal').toString();
      const output = execSync('./cal.js').toString();

      expect(output).to.equal(goal);
    });
  });

  describe("Zeller's congruence", () => {
    const zellers = require('../zellers.js');
    describe('.modified_month', () => {
      it('return 13 for January', () => {
        const mod = zellers.modifiedMonth(1);
        expect(mod).to.equal(13);
      });

       it('return 14 for February', () => {
        const mod = zellers.modifiedMonth(2);
        expect(mod).to.equal(14);
      });

    });
     //2012, 2 === 14
     //2012, 3 === 3

    describe('.modified_year', function (){
      it('return 2014 for January 2015', () => {
      expect(zellers.modifiedYear(2015, 1)).to.equal(2014);
      });

       it('return 2015 for February 2015', () => {
      expect(zellers.modifiedYear(2016, 2)).to.equal(2015);
      });

       it('return 2017 for March 2017', () => {
      expect(zellers.modifiedYear(2017, 3)).to.equal(2017);
      });
    });
    //.modified year
    // 2016, 2 === 2015
    // 2017, 3 === 2017
    describe('.getDay', () => {
      it('returns 2 (Tuesday) for March 1, 2016', () => {
        expect(zellers.getDay(2000, 3, 1)).to.equal(3);
      });

       it('returns 1 (Monday) for March 1, 2100', () => {
        expect(zellers.getDay(2100, 3, 1)).to.equal(1);
      });

       it('returns 0 (Sunday) for March 2, 2200', () => {
        expect(zellers.getDay(2200, 3, 2)).to.equal(0);
      });

    });
    //.calculate
    // 2000, 3, 1 === 3
    // 2100, 3, 1 === 1
   // 2200, 3, 2 === 0
    // 2300, 3, 1 === 4
  });//end of zellers

    //my calendar
    describe('get the current month and year', () => {
    it('daysInMonth(), output total of days the current month has (Jan, 2016)', () => {
      expect(Output.daysInMonth(1, 2016)).to.equal(31);
    });

    it('currentMonth(), output current month and year', () => {
      expect(Output.currentMonth(1, 2016)).to.equal('January 2016\n');
    });

    xit('currentMonth(), should match layout of cal calendar', () => {
      const calResult = execSync('cal').toString();
      expect(Output.currentMonth()).to.equal(calResult);
    });
  });

    describe('daysInMonth(), should get days of a different month/year', () => {
      it('should output the total of days of a different date like, Feb 2017', () => {
      expect(Output.daysInMonth(2, 2017)).to.equal(28);
      });

      it('daysInMonth(), should get days of a different date like, April 2001', () => {
      expect(Output.daysInMonth(4, 2001)).to.equal(30);
      });


      it('currentMonth(), should output a different month and year, March 2017', () => {
      expect(Output.currentMonth(3, 2017)).to.equal('March 2017\n');
      });

    });

});//end of test suite
