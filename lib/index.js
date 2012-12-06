/**
 * Require dependencies
 */

var fs    = require('fs')
  , async = require('async');

/**
 * Check if given binary exists
 *
 * @param  {String} bin                     Binary to test
 * @param  {String|Array} additional        Additional paths to check
 * @param  {Function(result)} thereChecked  Callback when check is done async
 * @return {Boolean}                        True if binary was found
 */

function there(bin, additional, thereChecked) {
  // Read $PATH to get set up bin folders
  var paths = process.env.PATH.split(':') || [];

  // there(bin, 'path')
  if ('string' === typeof additional) {
    paths.push(additional);
  }

  // async check
  if ('function' === typeof thereChecked) {
    return async.some(paths, function(path, pathChecked) {
      fs.exists(path + '/' + bin, pathChecked);
    }, thereChecked);
  }

  // sync check
  return paths.reverse().some(function(path) {
    return fs.existsSync(path + '/' + bin);
  });
};

/**
 * Expose module
 */

module.exports = there;
