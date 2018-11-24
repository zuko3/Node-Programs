const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    if (request.url == '/message') {
        response.setHeader('Content-Type', 'text/html');
        response.write(
            `<html>
            <head><title>Node app</title></head>
            <body><h1>We recived message</h1></body>
        </html>
    `);
        return response.end();
    }
    response.statusCode =302;
    response.setHeader('Location','/message');
    fs.writeFileSync('info.txt','Dummy text');
    return response.end();
})
server.listen(3000,function(){
    console.log("server started at port 3000...")
})
