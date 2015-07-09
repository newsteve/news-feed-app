NewsReader.Views.IndexView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, "sync", this.render)
  },

  template: JST["feeds/index"],

  render: function() {
    this.$el.html(this.template());

    this.collection.each(function(feed){
      var indexItemView = new NewsReader.Views.FeedListItemView({model: feed});
      this.$(".feed-list").append(indexItemView.render().$el);
    }.bind(this))

    return this;
  }
})