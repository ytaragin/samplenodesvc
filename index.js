const http = require('http');

const requestListener = function (req, res) {
    console.log(`Connection from ${req.socket.remoteAddress}:${req.socket.remotePort}`)
    res.writeHead(200);
    res.end('Hello, World!');
}

const server = http.createServer(requestListener);

console.log("Starting up")
server.listen(8080);

