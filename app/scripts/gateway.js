/*global define*/

define(
  ['backbone','marionette'],
function(Backbone, Marionette){
    'use strict';

    var gateway = new Marionette.Application();

    var FadeInRegion = Marionette.Region.extend({
        el: '#main',

        open: function(view){
            this.$el.hide();
            this.$el.html(view.el);
            this.$el.fadeIn('slow');
        }

    });

    gateway.addRegions({
        main: FadeInRegion
    });

    gateway.on("initialize:after", function () {
        if (!Backbone.History.started) Backbone.history.start();
    });

    return gateway;

});
