const http = require('http');
const handler = require('../src/handler.js');
var loadfile = require('../src/loadfile');

var env2 = require('env2')('.env');

const server = http.createServer(handler);

var port = 4000;

///read it o startup and put in memory
loadfile.readFileAsString('dictionary/words.txt', function(){
  server.listen(port);

  console.log('Server is running on: ' + port);
});
