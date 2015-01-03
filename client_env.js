var jsdom = require ('jsdom');

module.exports.setup = setup = function(callback) {
  if(typeof window != 'undefined') return callback(window);
  
  // Setup a jsdom env and globally expose window along with other libraries
  jsdom.env({
    html: '<html><body><div id="AppBase"></div></body></html>',
    done: function(errs, window) {

      global.window = window;
      global._ = require('underscore');
      global.Backbone = require('backbone');
      global.Backbone.$ = global.$ = require('jquery');

      // for Marionette
      global.Marionette = require('backbone.marionette');
      global.Handlebars = require('handlebars');
      global.document = window.document;    // marionette expects a global document

      // The DOMParser is required by Jquery for XML responses for XmlHttpRequests
      global.DOMParser = require('xmldom').DOMParser;

      // This simulates 'local-storage' from the browser
      Storage = require("dom-storage")
         , global.localStorage = new Storage('./db.json', {strict: false, ws: '  ' });

      // RDL:  To allow backbone request to go out ot a real server
      // http://garajeando.blogspot.com/2012/06/avoiding-xmlhttprequest-problem-using.html?showComment=1419891827156#c8720227427382308485
      global.$.support.cors = true;
      var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
      global.$.ajaxSettings.xhr = function () {
         return new XMLHttpRequest;
      }

      global.App = {};

      // Let's go!
      callback();
    }
  });
}
