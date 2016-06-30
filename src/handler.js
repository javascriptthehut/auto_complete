
//modules from other files
var urlPaths = require('./urlPaths');

//handler function which executes code according to a specific url path
//connected to urlPaths.js where all the paths and their respective code is.
const handler = function(request, response){
  var url = request.url;//
  if(url === '/'){
    urlPaths.urlPathToIndex(request, response);
  } else if (url.includes('/find')){
    urlPaths.urlPathToFind(request, response);
  } else {
    response.writeHead(404);
    response.end('WRONG!');
  }
};

//export functions
module.exports = handler;
