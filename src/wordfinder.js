var fs = require('fs');
var asyncWaterfall = require('async-waterfall');

var readFile = function(callback){
  fs.readFile('dictionary/words.txt', function(err, data){
    if(err) throw err;
    callback(data.toString());
  });
};

function makeArray(string){
  return string.split('\n');
};

function findMatchesArray(array, word){
  var found = [];
  //will reaturn a new array with selected words
  for (var i=0; i < array.length; i++){
    if (array[i].indexOf(word) === 0){
      found.push(array[i]);
    }
  }
  return found;
}
//
function stringifyArray(input){
  return input.join(',');
}

module.exports = {
  readFileFunction: readFile,
  makeArrayFunction: makeArray,
  findMatchesArrayFnc: findMatchesArray,
  stringifyArrayFnc: stringifyArray
};
