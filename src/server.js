///SERVER REQUEST- AS SOON AS SERVER IS RUN, THE .txt FILE IS READ, THEN LOADED(exported from loadfile.js)
//INTO SERVER MEMORY. IN THAT WAY IT WILL NEVER HAVE TO BE LOADED AGAIN...

//node modules
const http = require('http'); //requiring an http module
const handler = require('../src/handler.js'); //requiring from the handler function
var loadfile = require('../src/loadfile'); //requiring from loadfile.js

const server = http.createServer(handler);

var port = 4000;

///read .txt file on startup of server and put in memory, readFileAsString function is imported from loadfile.js
loadfile.readFileAsString('dictionary/words.txt', function(){ //take from loadfile.js the readFileAsString function
  server.listen(port); //once you read the file, loaded it and strigified it, open server to listening.
  console.log('.txt file has loaded and Server is running on: ' + port);
});
