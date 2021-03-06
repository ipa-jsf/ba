// Generated by CoffeeScript 1.6.2
(function() {
  define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
      defaults: {
        count: -1
      },
      complies: function(number, test) {
        var count;

        count = this.get('count');
        return !number || !(count > 0) || number < count;
      }
    });
  });

}).call(this);
