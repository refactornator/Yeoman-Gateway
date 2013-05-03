/*global define*/

define(['backbone','marionette','templates'], function (Backbone, Marionette, JST) {
    'use strict';

    var LoginView = Marionette.ItemView.extend({
        className: 'hero-unit',
        template: JST['app/scripts/templates/Login.ejs'],

        events: {
            'click button.show-register': 'showRegister'
        },

        showRegister: function(e) {
            Backbone.history.navigate('#signup', {trigger: true});
        }
    });

    return LoginView;
});
