/*global define*/

define(['jquery', 'backbone','marionette','templates','backbone-validation','backbone.syphon'], function ($, Backbone, Marionette, JST, Validation, Syphon) {
    'use strict';

    var RegisterView = Marionette.ItemView.extend({
        className: 'hero-unit',
        template: JST['app/scripts/templates/Register.ejs'],

        events: {
            'click button.register': 'register',
            'click button.show-login': 'showLogin'
        },

        onRender: function() {
            Validation.bind(this);

            this.model.on('validated:valid', this.valid, this);
            this.model.on('validated:invalid', this.invalid, this);
        },

        valid: function(view, attr, selector) {
            console.log('valid');
        },

        invalid: function(view, attr, error, selector) {
            console.log('invalid');
        },

        register: function(e) {
            e.preventDefault();

            var data = Syphon.serialize(this);
            this.model.set(data);

            console.log('registering');
        },

        showLogin: function() {
            Backbone.history.navigate('#login', {trigger: true});
        }
    });

    return RegisterView;
});
