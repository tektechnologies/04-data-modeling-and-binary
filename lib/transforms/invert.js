'use strict';

const invertAll = (color,index,colors) => {
  var invertedColor = ~color;
  colors[index] = invertedColor;
};

module.exports = function (bmp) {
  console.log('inverting color palette');
  
  if (bmp.paletteColorCount) {
    bmp.palette.forEach(invertAll);
  } else {
    bmp.img.forEach(invertAll);
  }
};