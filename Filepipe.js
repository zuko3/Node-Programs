const fs = require('fs');

const readableStream  = fs.createReadStream('info.txt');
const writableStream =  fs.createWriteStream('output.txt');

readableStream.on('end', () => console.log("reading file over"))

writableStream.on('finish',()=>console.log('writig over'));

readableStream.pipe(writableStream);
console.log("program ended");
