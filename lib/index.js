/**
 * TODO:
 *
 * - Async version
 */

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
  // Read $PATH to get set up bin folders
  var paths = process.env.PATH.split(':');

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

/**
 * Expose module
 */

module.exports = there;
