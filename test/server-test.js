
//node modules
var tape = require('tape');
var shot = require('shot');

//modules from other files
var handler = require('../src/handler.js');
var wordFinder = require('../src/wordFinder.js');
var urlBuilder = require('../public/urlBuilder.js')

//this test is from handler(make array and then load html)
tape('test a get request to the / endpoint', function(t){
  shot.inject(handler, {method: 'get', url: '/'}, function(res){
    t.equal(res.statusCode, 200, '/ has status code of 200');
    t.ok(res.payload.includes('<!DOCTYPE'), 'finds the index.html file');//check if its truthy - 'if something exist is true', like an array,string(also empty) is true but zero(0), undefinied, false, "", null and nun are not
    t.equal(res.headers['Content-Type'], 'text/html', 'respond with type/html');// you can test if it sees also a js file or a css file ect.
    t.end();
  });
});

tape('testing for 404 an ened point which won\'t be handling', function(t){
  shot.inject(handler, {method: 'get', url: '/9027597835'}, function(res){
    t.equal(res.statusCode, 404, '/something has status code of 404');
    t.end();
  });
});

//this test is from wordfinder (implements the data manipulation)
tape('turn data into array', function(t){
  t.deepEqual(wordFinder.makeArrayFunction('bee\nbumble\nhumble'), ['bee', 'bumble', 'humble']);
  t.end();
});

tape('function find matchesArray returns new array with matches', function(t){
  var actual = ['abc', 'bca', 'cde', 'bce'];
  var expected = ['bca', 'bce'];
  t.deepEqual(wordFinder.findMatchesArrayFnc(actual, 'bc'), expected);
  t.end();
});

tape('function stringefy turnes array into string with ","', function(t){
  var actual = ['bca', 'bce'];
  var expected = 'bca,bce';
  t.deepEqual(wordFinder.stringifyArrayFnc(actual), expected);
  t.end();
});

tape('test a get request to the /find/ endpoint', function(t){
  shot.inject(handler, {method: 'get', url: '/find/overmonopolizing'}, function(res){
    t.equal(res.statusCode, 200, '/ has status code of 200');
    t.ok(res.payload.includes('overmonopolizing'), 'found the word overmonopolizing');
    t.end();
  });
});

tape('test url is built correctly', function(t){
	urlBuilder.
})
