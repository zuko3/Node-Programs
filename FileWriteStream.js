const fs = require('fs');
const readStream = fs.createReadStream('info.txt')
const writeStream = fs.createWriteStream('output2.txt')
readStream.setEncoding('UTF8');

writeStream.on('finish', () => {
    console.log("writing to a file finished");
})
readStream.on('data', (chunk) => {
    writeStream.write(chunk,'UTF8');
})

readStream.on('end', () => {
    console.log("Reading file over")
    writeStream.end();
})

console.log("Program ended");



