var isbin = require('../');

describe('isbin', function() {
  it('accepts binary, additional path and callback', function(done) {
    isbin('ls', '/etc', function(exists) {
      exists.should.be.a('boolean');
      done();
    })
  });

  it('accepts array of paths', function(done) {
    isbin('ls', ['/etc', '/home'], function(exists) {
      exists.should.be.a('boolean');
      done();
    });
  });

  it('accepts just binary and callback', function(done) {
    isbin('ls', function(exists) {
      exists.should.be.a('boolean');
      done();
    });
  });
});
