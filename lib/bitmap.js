'use strict';

const fs = require('fs');


class Bitmap{
  constructor(buffer){
    this.buffer = buffer;
    this.type = buffer.toString('utf-8', 0, 2);
    this.size = buffer.readUInt32LE(2);
    this.offset = buffer.readUIntLE(0x0A, 4);
    this.img = buffer.slice(this.offset);


    this.headerSize = buffer.readUIntLE(0x0E, 4);
    this.width = buffer.readUIntLE(0x12, 4);
    this.height = buffer.readUIntLE(0x16, 4);
    this.paletteColorCount = buffer.readUIntLE(0x2E, 4);

    //color pallet
    const bytesPerColor = 4;
    const paletteOffset = 0x36;
    const paletteEndOffset = Math.min(
      this.offset, //otherwise the pallet offset will be the pallet offset 1024 bytes in our pallet
      paletteOffset + this.palletColorCount * bytesPerColor);
    this.palette = buffer.slice(paletteOffset, paletteEndOffset);


  }

  // static fromFile(path){
  //   const buffer = fs.readFileSync(path);
  //   return new Bitmap(buffer);
  // }


  writeToFile(path){
    fs.writeFileSync(path, this.buffer);

  }


}










module.exports = Bitmap;