'use strict';




module.exports = function (bmp){
  console.log('inverting color palette');
  bmp.palette.forEach((color, index) => {
    var invertedColor = ~color;
    bmp.palette[index] = invertedColor;
  });

};