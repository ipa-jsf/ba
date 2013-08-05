// Generated by CoffeeScript 1.6.2
(function() {
  define(['backbone', 'templates/compoentDevChart', 'models/lineChart', 'views/lineChart'], function(Backbone, chartTmpl, LineChart, LineChartView) {
    return Backbone.View.extend({
      tagName: 'div',
      className: 'componentDevChart',
      initialize: function() {
        this.listenTo(this.options.testGroups, 'change:empty change:selected', this.groupsChanged);
        this.lineChartModel = new LineChart({
          key: this.options.key
        });
        return this.lineChartView = new LineChartView({
          model: this.lineChartModel
        });
      },
      render: function() {
        this.$el.html(chartTmpl());
        this.$('.chart').html(this.lineChartView.render().el);
        return this;
      },
      groupsChanged: function() {
        var models,
          _this = this;

        models = [];
        this.options.testGroups.each(function(testGroup) {
          if (testGroup.get('selected') && !testGroup.get('empty')) {
            return models.push(testGroup);
          }
        });
        switch (models.length) {
          case 0:
            return this.noItemSelected();
          case 1:
            return this.oneItemSelected(models[0]);
          default:
            return this.multipleItemsSelected();
        }
      },
      noItemSelected: function() {
        return this.errorOccured('no item selected');
      },
      multipleItemsSelected: function() {
        return this.errorOccured('multiple items selected');
      },
      oneItemSelected: function(testGroup) {
        this.noError();
        return this.lineChartModel.set('testGroup', testGroup);
      },
      errorOccured: function(msg) {
        this.$('.error').show().html(msg);
        this.$('.chart').hide();
        return this.lineChartModel.set('testGroup', null);
      },
      noError: function() {
        this.$('.error').hide();
        return this.$('.chart').show();
      }
    });
  });

}).call(this);