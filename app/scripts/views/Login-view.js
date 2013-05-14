/*global define*/

define(['jquery', 'backbone','marionette','templates','backbone-validation'], function ($, Backbone, Marionette, JST, Validation) {
    'use strict';

    var LoginView = Marionette.ItemView.extend({
        className: 'hero-unit',
        template: JST['app/scripts/templates/Login.ejs'],

        events: {
            'click button.login': 'login',
            'click button.show-register': 'showRegister',
            'blur input': 'updateModel'
        },

        onRender: function() {
            Validation.bind(this);

            this.model.on('validated:valid', this.valid, this);
            this.model.on('validated:invalid', this.invalid, this);
        },

        updateModel: function(el){
            var $el = $(el.target);
            this.model.set($el.attr('name'), $el.val());
        },

        valid: function(view, attr, selector) {
            console.log('valid');
        },

        invalid: function(view, attr, error, selector) {
            console.log('invalid');
        },

        login: function(e) {
            e.preventDefault();
            
            var isValid = this.model.isValid(true);

            console.log('logging in');
        },

        showRegister: function() {
            Backbone.history.navigate('#signup', {trigger: true});
        }
    });

    return LoginView;
});
