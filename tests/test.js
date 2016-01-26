'use strict';

const {expect} = require('chai');
const {execSync} = require('child_process');

describe('test suite', () => {
  describe('CLI', () => {
    it('should handle the current month', () => {
      const goal = execSync('cal').toString();
      const output = execSync('./cal.js').toString();

      expect(output).to.equal(goal);
    });
  });

  describe("Zellar's congruence", () => {
    //const zellars = require(../zellars.js);
    describe('.modified_month', () => {
      it('return 13 for January', () => {
        const mod = zellars.modifiedMonth(2012, 01);

        expect(mod).to.equal(13);
      });
      //2012, 2 === 14
      //2012, 3 === 3
    });
    //.modified year
    //2000, 1 === 1999
    //2012,2 === 2011
    //2013, 3 === 2013
    //
    //.calculate
    //2014, 3, 2 === 1
    //2012, 1, 1 === 1
    //2012, 1, 12 === 5
    //1799, 2, 1 === 6
    //2000, 11, 1 === 4
  });
});
