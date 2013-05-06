/*global define*/

define(['backbone','marionette','templates'], function (Backbone, Marionette, JST) {
    'use strict';

    var RegisterView = Marionette.ItemView.extend({
        className: 'hero-unit',
        template: JST['app/scripts/templates/Register.ejs'],
        events: {
            'click button.register': 'register',
            'click button.show-login': 'showLogin'
        },

        register: function(e) {
            e.preventDefault();
            console.log('registering');
        },

        showLogin: function() {
            Backbone.history.navigate('#login', {trigger: true});
        }
    });

    return RegisterView;
});
