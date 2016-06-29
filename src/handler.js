var fs = require('fs');
var renderData = require('./wordfinder.js');
var loadfile = require('./loadfile');

function loadIndex(request, response) {
  fs.readFile(__dirname + '/../public/index.html', function(err, data){
    if(err) throw err;
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(data);
  });
}

const handler = function(request, response){
  var url = request.url;
  if(url === '/'){
    loadIndex(request, response);
  } else if (url.includes('/find')){
    var searchWord = url.substring(6);
    loadfile.readFileAsString('dictionary/words.txt', function(fileAsString){
      var output = renderData.renderDataFnc(fileAsString, searchWord);
      console.log(output, searchWord, url);
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end(output);
    });
  } else {
    response.writeHead(404);
    response.end('WRONG!');
  }

};

module.exports = handler;


///
