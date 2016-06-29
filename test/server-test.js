var tape = require('tape');
var shot = require('shot');

var handler = require('../src/handler.js');

tape('test a get request to the / endpoint', function(t){
  shot.inject(handler, {method: 'get', url: '/'}, function(res){
    t.equal(res.statusCode, 200, '/ has status code of 200');
    console.log(res.payload);
    t.ok(res.payload.includes('<!DOCTYPE'), 'finds the index.html file');//check if its truthy - 'if something exist is true', like an array,string(also empty) is true but zero(0), undefinied, false, "", null and nun are not
    t.equal(res.headers['Content-Type'], 'text/html', 'respond with type/html');// you can test if it sees also a js file or a css file ect.
    t.end();
  });
});
