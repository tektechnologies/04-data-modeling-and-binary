'use strict';

const invert = require('../../../lib/transforms/invert');

describe('invert transform', () => {
  it('inverts palette', () => {
    var bmp = {
      paletteColorCount: 1,
      palette: new Buffer([0, 200, 255, 55]),
    };

    invert(bmp);

    expect(bmp.palette)
      .toEqual(new Buffer([255, 55, 0, 200]));
  });

  it('inverts img if no palette', () => {
    var bmp = {
      paletteColorCount: 0,
      img: new Buffer([0, 200, 255, 55]),
    };

    invert(bmp);

    expect(bmp.img)
      .toEqual(new Buffer([255, 55, 0, 200]));
  });

});