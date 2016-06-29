var fs = require('fs');

const handler = function(request, response){
  var url = request.url;
  if(url === '/'){
    fs.readFile(__dirname + '/../public/index.html', function(err, data){
      if(err) throw err;
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(data);
    });
  };
};

module.exports = handler;
