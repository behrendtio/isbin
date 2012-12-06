/**
 * Require dependencies
 */

var fs = require('fs');

/**
 * Check if given binary exists
 *
 * @param  {String} bin         Binary to test
 * @param  {Array} additional   Additional paths to check
 * @return {Boolean}            True if binary was found
 */

function there(bin, additional) {
  // there(bin, 'path')
  if ('string' === typeof additional) {
    additional = [additional];
  }

  // Merge default paths and additional ones
  paths = paths.concat(additional || []);

  var exists = false;

  paths.forEach(function(path) {
    if (fs.existsSync(path + '/' + bin)) {
      exists = true;
      return;
    }
  });

  return exists;
};

var paths = [
  '/usr/local/bin',
  '/usr/bin',
  '/usr/sbin'
];

/**
 * Expose module
 */

module.exports = there;
