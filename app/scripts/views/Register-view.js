/*global define*/

define(['backbone','marionette','templates'], function (Backbone, Marionette, JST) {
    'use strict';

    var RegisterView = Marionette.ItemView.extend({
        className: 'hero-unit',
        template: JST['app/scripts/templates/Register.ejs'],
        events: {
            'click button.show-login': 'showLogin'
        },

        showLogin: function(e) {
            Backbone.history.navigate('#login', {trigger: true});
        }
    });

    return RegisterView;
});
