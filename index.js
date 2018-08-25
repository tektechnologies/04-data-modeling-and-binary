'use strict';

const requireAll = require('require-all');
const Bitmap =require('./lib/bitmap');
const transformLibrary = requireAll(`${__dirname}/lib/transforms`);
//console.log(transformLibrary);
//console.log(process.argv);
//fancy
const[/*node*/, /*filename*/, inFile, outFile, ...transforms] = process.argv;

console.log({inFile, outFile, transforms});

var bmp = Bitmap.fromFileSync(inFile);


//todo: find transform
// const invert = require('./lib/transorms/invert-palette');

transforms.forEach(transformName => {
  var transform = transformLibrary[transformName];

  if(transform){
    transform(bmp);
  }else{
    console.warn(`Transform '${transformName}' not found`);
  }
});
// Manual transform
// transforms.forEach(t => t(bmp));
// invert(bmp);
bmp.writeToFileSync(outFile);