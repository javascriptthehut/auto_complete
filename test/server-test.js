var tape = require('tape');
var shot = require('shot');

var handler = require('../src/handler.js');
var wordFinder = require('../src/wordFinder.js');

tape('test a get request to the / endpoint', function(t){
  shot.inject(handler, {method: 'get', url: '/'}, function(res){
    t.equal(res.statusCode, 200, '/ has status code of 200');
    t.ok(res.payload.includes('<!DOCTYPE'), 'finds the index.html file');//check if its truthy - 'if something exist is true', like an array,string(also empty) is true but zero(0), undefinied, false, "", null and nun are not
    t.equal(res.headers['Content-Type'], 'text/html', 'respond with type/html');// you can test if it sees also a js file or a css file ect.
    t.end();
  });
});

// tape('testing for 404 an ened point which won\'t be handling', function(t){
//   shot.inject(handler, {method: 'get', url: '/something'}, function(res){
//     t.equal(res.statusCode, 404, '/something has status code of 404');
//     t.end();
//   });
// });

tape('to see if server reads from .txt file in dictionary folder', function(t){
  wordFinder.readFileFunction(function callback(data){
    t.ok(data.includes('heterochromosome'));
    t.end();
  });
});

tape('turn data into array', function(t){
  t.deepEqual(wordFinder.makeArrayFunction('bee\nbumble\nhumble'), ['bee', 'bumble', 'humble']);
  t.end();
});
