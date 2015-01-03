AngryCatView = Backbone.Marionette.ItemView.extend({
   template: Handlebars.compile("\n<td>{{ rank }}</td><td>{{ vote }}</td><td>{{ name }}</td><td><img class='angry_cat_pic' src='{{ image_path }}'/></td>"),
   tagName: 'tr',
   className: 'angry_cat'
});

AngryCatsView = Backbone.Marionette.CollectionView.extend({
   tagName: "table",
   id: "angry_cats",
   className: "table-striped table-bordered",
   template: Handlebars.compile("<thead><tr class='header'><th>Rank</th><th>Votes</th></thead><tbody></tbody>"),
   childView: AngryCatView
});
