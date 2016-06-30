
//node modules
var fs = require('fs');

//modules from other files
var handler = require('./handler.js');
var renderData = require('./wordfinder.js');
var loadfile = require('./loadfile');

//load index.html when hitting '/'
function loadIndex(request, response) {
  fs.readFile(__dirname + '/../public/index.html', function(err, data){
    if(err) throw err;
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(data);
  });
}

//load data according to url with certain letters (i.e /find/abc) and manipulate
//according to worldfinder.js
function findUrlPath(request, response){
  var url = request.url;
  var searchWord = url.substring(6);//search letters after 'url../find/'
  loadfile.readFileAsString('dictionary/words.txt', function(fileAsString){
    var output = renderData.renderDataFnc(fileAsString, searchWord); //from wordfinder.js
    console.log(output, searchWord, url); //for the sake of testing
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(output); //finish by giving back the result (word) from server
  });
}

//export functions
module.exports = {
  urlPathToIndex: loadIndex,
  urlPathToFind: findUrlPath
};
