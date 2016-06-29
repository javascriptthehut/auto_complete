var fs = require('fs');

module.exports = {
  readFileAsString,
  fileAsString: null
};

//a way of reading the file only once and not every time subsequently

function readFileAsString(filePath, callback) {
  if(module.exports.fileAsString){
    return callback(module.exports.fileAsString);
  }
  fs.readFile(filePath, function(err, data){
    if(err) throw err;
    module.exports.fileAsString = data.toString();
    callback(module.exports.fileAsString);
  });
}
