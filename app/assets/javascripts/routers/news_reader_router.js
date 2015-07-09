NewsReader.Routers.NewsReaderRouter = Backbone.Router.extend({
  initialize: function() {
    this.feeds = new NewsReader.Collections.Feeds();
  },

  routes: {
    "": "index"
  },

  index: function(){
    var indexView = new NewsReader.Views.IndexView({collection: this.feeds})
    indexView.collection.fetch();
    $("#content").append(indexView.render().$el);
  }

})