
//node module
var fs = require('fs');

//a function which reads the file only once and not every time subsequently (to be used on server.js):
function readFileAsString(filePath, callback) { //composed of the filepath(in this case, 'dictionary/words.txt') and a callback function
  if(module.exports.fileAsString){
    return callback(module.exports.fileAsString); //if the file exist already return it.
  }
  //use readfile node module, file path is 'dictionary/words.txt', callback loads data from filepath .txt and stringefies it
  fs.readFile(filePath, function(err, data){
    if(err) throw err;
    module.exports.fileAsString = data.toString(); //convert data into string
    callback(module.exports.fileAsString);//callback function exports data as string.
  });
}

//exporting modules
module.exports = {
  readFileAsString, //exporting to server.js
  fileAsString: null //starting off with file as null so that is can be strigified and loaded into server memory
};
