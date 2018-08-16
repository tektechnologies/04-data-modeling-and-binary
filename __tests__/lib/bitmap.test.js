const Bitmap = require('../../lib/bitmap');
const fileHouse = `${__dirname}/../../assets/house.bmp`;
const fileHouseOut = `${__dirname}/../../output/house.bmp`;
const fs = require('fs');

describe('Bitmap', () => {
  it('can read basic header fields', () => {
    var bmp = Bitmap.fromFile(fileHouse);
    expect(bmp.type).toBe('BM');
    expect(bmp.size).toBeGreaterThan(0);
    expect(bmp.offset).toBeGreaterThan(0);
    expect(bmp.img.length).toBeGreaterThan(0);
    expect(bmp.size).toBeGreaterThan(bmp.img.length);


    expect(bmp.headerSize).toBe(40);
    expect(bmp.width).toBe(256);
    expect(bmp.height).toBe(256);

    console.log(bmp.img);
    console.log(bmp.img.length);
    console.log(bmp.size.toString(16));
  });
  it('can write a new bmp file', () => {
    var bmp = Bitmap.fromFile(fileHouse);

    bmp.writeToFile(fileHouseOut);

    expect(fs.existsSync(fileHouseOut)).toBe(true);


  });

});