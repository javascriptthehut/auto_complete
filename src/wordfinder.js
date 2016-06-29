var fs = require('fs');

let wordArray = [];

var readFile = function(callback){
  fs.readFile('dictionary/words.txt', function(err, data){
    if(err) throw err;
    var result = callback(data.toString());
    return result;
    // wordArray.push(result);
  });
};

function makeArray(string){
  return string.split('\n');
}

// function findMatchesArray(){
//   //will reaturn a new array
// }
//
// function stringifyArray(){
//
// }

module.exports = {
  readFileFunction: readFile,
  makeArrayFunction: makeArray
};
