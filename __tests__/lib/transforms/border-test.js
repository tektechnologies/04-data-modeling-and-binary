'use strict';

const transform = require('../../../lib/transforms/border');

describe('transforms/border', () => {
  it('adds a border with color 0', () => {
    var bmp = {
      height: 4,
      width: 5,
      img: new Buffer([
        1, 2, 3, 4, 7, // row 0
        5, 6, 7, 8, 3, // row 1
        9, 1, 2, 3, 1, // row 2
        5, 6, 7, 8, 4, // row 3
      ]),
    };

    transform(bmp);

    expect(bmp.img)
      .toEqual(new Buffer([
        0, 0, 0, 0, 0, // row 0
        0, 6, 7, 8, 0, // row 1
        0, 1, 2, 3, 0, // row 2
        0, 0, 0, 0, 0, // row 3
      ]));
  });
});