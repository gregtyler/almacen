const fs = require('fs');
const parsePostFile = require('../lib/parsePostFile');

module.exports.find = function find(id) {
  return new Promise(function(resolve, reject) {
    fs.readdir('data', function(err, files) {
      if (err) reject(err);
      for (const filename of files) {
        if (filename.substr(9, filename.length - 12) === id) {
          fs.readFile(`data/${filename}`, 'utf-8', function(err, contents) {
            if (err) {
              reject(err);
            } else {
              const post = parsePostFile(contents);
              resolve(post);
            }
          });
        }
      }
    });
  });
};
