'use strict';

module.exports = function(bmp) {
  const { width, height, img } = bmp;
  console.log('width', width);
  console.log('height', height);

  // TODO: use this everywhere
  let borderWidth = 1;

  // First row
  for (let col = 0; col < width; col++) {
    img[getPixelOffset(0, col)] = 0;
  }

  // Last row
  for (let col = 0; col < width; col++) {
    img[getPixelOffset(height - 1, col)] = 0;
  }

  // First column
  for (let row = 0; row < height; row++) {
    for (let i = 0; i < borderWidth; i++) {
      img[getPixelOffset(row, i)] = 0;
    }
  }
  
  // Last column
  for (let row = 0; row < height; row++) {
    img[getPixelOffset(row, width - 1)] = 0;
  }
  
  function getPixelOffset(row, col) {
    return width * row + col;
  }
};