const fs = require('fs');
let data = "";
const readableStream = fs.createReadStream('info.txt');

readableStream.setEncoding('UTF8');

readableStream.on('data', (chunk) => {
    data += chunk;
})

readableStream.on('end', () => {
    console.log(data)
})

readableStream.on('error', (error) => {
    console.log(error)
})

console.log("program ended");