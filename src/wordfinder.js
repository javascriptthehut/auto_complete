var fs = require('fs');
var asyncWaterfall = require('async-waterfall');

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

function renderData(input, word){
  var array = makeArray(input);
  var matches = findMatchesArray(array, word);
  return stringifyArray(matches);
}

module.exports = {
  makeArrayFunction: makeArray,
  findMatchesArrayFnc: findMatchesArray,
  stringifyArrayFnc: stringifyArray,
  renderDataFnc: renderData
};
