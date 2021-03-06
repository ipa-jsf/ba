// Generated by CoffeeScript 1.6.2
(function() {
  define(['backbone', 'views/componentDevChart', 'templates/componentDev', 'models/sortingOptions', 'views/sortingOptions'], function(Backbone, ComponentDevChart, componentDevTmpl, SortingOptions, SortingOptionsView) {
    return Backbone.View.extend({
      tagName: 'div',
      className: 'componentDevView',
      initialize: function() {
        this.sortingOptions = new SortingOptions;
        this.createChart('duration', 'Duration', 's');
        this.createChart('distance', 'Distance', 'm');
        return this.createChart('rotation', 'Rotation', 'deg');
      },
      render: function() {
        this.$el.html(componentDevTmpl());
        this.renderChart('duration');
        this.renderChart('distance');
        this.renderChart('rotation');
        this.renderSortingOptions();
        return this;
      },
      createChart: function(key, label, unit) {
        var _ref;

        this.charts = (_ref = this.charts) != null ? _ref : [];
        return this.charts[key] = new ComponentDevChart({
          key: key,
          testGroups: this.options.testGroups,
          sortingOptions: this.sortingOptions,
          label: label,
          unit: unit
        });
      },
      renderChart: function(key) {
        return this.$("." + key).html(this.charts[key].render().el);
      },
      renderSortingOptions: function() {
        var sortingOptions;

        sortingOptions = new SortingOptionsView({
          model: this.sortingOptions
        });
        return this.$('.sortingOptionsContainer').html(sortingOptions.render().el);
      }
    });
  });

}).call(this);
