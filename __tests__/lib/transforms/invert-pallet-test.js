'use strict';

const invert = require('../../../lib/transforms/invert-pallet');


describe('invert transform', () => {
  it('inverts all the colors in the bmp', () => {
    //pretend bit map?
    var bmp = {
      palette : new Buffer([0, 200, 255,55]),
    };
    invert(bmp);
    expect(bmp.palette).toEqual(new Buffer([255, 5, 5, 0, 200]));
  });
});