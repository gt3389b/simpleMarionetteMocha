AngryCats = Backbone.Collection.extend({
   model: AngryCat,
   initialize: function(cats){
      var rank = 1;
      _.each(cats, function(cat) {
      cat.set('rank', rank);
      ++rank;
      });
   }
});
