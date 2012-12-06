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

function there(bin, additional, thereChecked) {
  // Read $PATH to get set up bin folders
  var paths = process.env.PATH.split(':') || [];

  // there(bin, 'path')
  if ('string' === typeof additional) {
    paths.push(additional);
  }

  return paths.reverse.some(function(path) {
    return fs.existsSync(path + '/' + bin);
  });
}

/**
 * Expose module
 */

module.exports = there;
