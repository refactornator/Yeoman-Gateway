/*global define*/

define(['backbone','marionette','templates'], function (Backbone, Marionette, JST) {
    'use strict';

    var LoginView = Marionette.ItemView.extend({
        className: 'hero-unit',
        template: JST['app/scripts/templates/Login.ejs'],

        events: {
            'click button.login': 'login',
            'click button.show-register': 'showRegister'
        },

        login: function(e) {
            e.preventDefault();
            console.log('logging in');
        },

        showRegister: function() {
            Backbone.history.navigate('#signup', {trigger: true});
        }
    });

    return LoginView;
});
