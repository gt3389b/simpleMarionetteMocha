var clientenv = require('../client_env');
var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

describe('AngryCats', function() {
  var channels;
  
  beforeEach(function(done) {
    clientenv.setup(function() {
      require('../assets/js/models/angrycat');
      require('../assets/js/collections/angrycat');
      done();
    });
  });
  
  describe('collection', function() {

    it('expects a non-zero collection length', function() {
      cats = new AngryCats([
          new AngryCat({ name: 'Wet Cat', image_path: 'assets/images/cat2.jpg' }),
          new AngryCat({ name: 'Bitey Cat', image_path: 'assets/images/cat1.jpg' }),
          new AngryCat({ name: 'Surprised Cat', image_path: 'assets/images/cat3.jpg' })
      ]);

      expect(cats.models).not.to.be.empty;
    });

    // use the fetched values from previous test
    it('expects models with fields', function() {
      for(i=0; i<cats.models.length; i++){
        expect(cats.models[i].attributes).keys('image_path', 'name', 'rank', 'vote');
      }
    });

    it('expects rank is incrementing', function() {
      for(i=0; i<cats.models.length; i++){
        expect(cats.models[i].attributes['rank']).is.equal(i+1);
      }
    });

    it('add model', function() {
      cats.add(new AngryCat({
        name: 'Cranky Cat',
        image_path: 'assets/images/cat4.jpg',
        rank: cats.size() + 1
      }));
    
      expect(cats.models.length).is.equal(4);
    })

  });
});
