const http = require('http');
const handler = require('../src/handler.js');

var env2 = require('env2')('.env');

const server = http.createServer(handler);

var port = 4000;

server.listen(port);

console.log('Server is running on: ' + port);
