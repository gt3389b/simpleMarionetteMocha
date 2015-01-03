var clientenv = require('../client_env');
var expect = require('chai').expect;
var should = require('chai').should();

describe('AngryCat', function() {
  var channel;
  beforeEach(function(done) {
    clientenv.setup(function() {
      require('../assets/js/models/angrycat');
      done();
    });
  });
  
  describe('Model', function() {

    it('test create model AngryCat', function() {
      angrycat = new AngryCat({ name: 'Wet Cat', image_path: 'assets/images/cat2.jpg' });
      expect(angrycat).not.to.be.empty;
    });
  });

  describe('Defaults', function() {
    it("should default vote to zero",function() {
      expect(angrycat.get('vote')).to.be.equal(0);
    })
  });

  describe('Fields', function() {
    it("should match name",function() {
      expect(angrycat.get('name')).to.be.equal("Wet Cat");
    })

    it("should match image_path",function() {
      expect(angrycat.get('image_path')).to.be.equal("assets/images/cat2.jpg");
    })
  });
});
