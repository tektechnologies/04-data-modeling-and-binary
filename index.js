'use strict';

const requireAll = require('require-all');
const Bitmap =require('./lib/bitmap');
const transformlibrary = requireAll(`${__dirname}/lib/transforms`);
console.log(transformlibrary);
console.log(process.argv);
//fancy
const[/*node*/, /*filename*/, inFile, outFile, ...transformNames] = process.argv;

console.log({inFile, outFile, transformNames});

var bmp = Bitmap.fromFile(inFile);


//todo: find transform
// const invert = require('./lib/transorms/invert-palette');
transformNames.forEach(transformName => {
  var transform = transformLibrary[transformName];

  if(transform){
    transform(bmp);
  }else{
    console.warn(`Transforming with  '${transformName}' not found`);
  }
});
// Manual transform
// transforms.forEach(t => t(bmp));
// invert(bmp);
bmp.writeToFile(outFile);