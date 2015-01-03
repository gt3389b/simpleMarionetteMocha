var clientenv = require('../client_env');
var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();
var sleep = require('sleep');

describe('Marionette', function() {
  
  beforeEach(function(done) {
    clientenv.setup(function() {
      //require('../assets/js/marionette');
      MyApp = new Backbone.Marionette.Application();
      done();
    });
  });
  
  describe('collection', function() {

    it('expects thrown Error if no regionId in options', function(done) {
      MyApp.addRegions({
        mainRegion: "#AppBase"
      });

      require('../assets/js/models/angrycat');
      require('../assets/js/collections/angrycat');
      require('../assets/js/views/list');

      MyApp.addInitializer(function(options){
        var angryCatsView = new AngryCatsView({
          collection: options.cats
        });

        MyApp.mainRegion.show(angryCatsView);
      });

      var cats = new AngryCats([
          new AngryCat({ name: 'Wet Cat', image_path: 'assets/images/cat2.jpg' }),
          new AngryCat({ name: 'Bitey Cat', image_path: 'assets/images/cat1.jpg' }),
          new AngryCat({ name: 'Surprised Cat', image_path: 'assets/images/cat3.jpg' })
      ]);

      MyApp.start({cats: cats});
      
      cats.add(new AngryCat({
        name: 'Cranky Cat',
        image_path: 'assets/images/cat4.jpg',
        rank: cats.size() + 1
      }));

      // Give some time for the view to render as they can be async
       setTimeout(function(){ 
         // complete the async beforeEach
         console.log($("#AppBase").html());
         done();
       }, 500);
    });
  });
});
