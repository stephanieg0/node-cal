'use strict';

const {expect} = require('chai');
const {execSync} = require('child_process');

describe('test suite', () => {
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
    });
    //.modified year
    // 2016, 2 === 2015
    // 2017, 3 === 2017
    describe('.getDay', () => {
      it('returns 2 (Tuesday) for March 1, 2016', () => {
        expect(zellers.getDay(2000, 3, 1)).to.equal(3);
      });
    });
    //.calculate
    // 2000, 3, 1 === 3
    // 2100, 3, 1 === 1
    // 2200, 3, 2 === 0
    // 2300, 3, 1 === 4

    describe('get the current month', () => {
      const Output = require('../lib/month.js');
      it('should load the current month', () => {
        const calResult = execSync('cal').toString();
        expect(Output.currentMonth()).to.equal(calResult);
      });
    });
  });
});
