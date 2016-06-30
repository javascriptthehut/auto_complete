//WORDFINDER WILL MANIPULATE THE DATA(dicionary) FROM SERVER MEMORY, TO
//USE IN handler.js

//take data and split on each new line to make array of words
function makeArray(string){
  return string.split('\n');
};

//take array of words and a word given, loop through each array index and push matching
//array elements into new array. return new array with matching word.
function findMatchesArray(array, word){
  var found = [];
  //will reaturn a new array with selected words
  for (var i=0; i < array.length; i++){
    if (array[i].indexOf(word) === 0 && array[i] !== word){
      found.push(array[i]);
    }
    if (found.length > 19){
      return found;
    }
  }
  return found;
}

//convert array element into string
function stringifyArray(input){
  return input.join(',');
}

//render all the data connecting all the functions together
function renderData(input, word){ //input = fileAsString(data), word = searchWord(urlpath(i.e abc))
  var array = makeArray(input);
  var matches = findMatchesArray(array, word);
  return stringifyArray(matches);
}

//export funcntions
module.exports = {
  makeArrayFunction: makeArray,
  findMatchesArrayFnc: findMatchesArray,
  stringifyArrayFnc: stringifyArray,
  renderDataFnc: renderData
};
