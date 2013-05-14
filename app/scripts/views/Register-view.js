/*global define*/

define(['jquery', 'backbone','marionette','templates','backbone-validation'], function ($, Backbone, Marionette, JST, Validation) {
    'use strict';

    var RegisterView = Marionette.ItemView.extend({
        className: 'hero-unit',
        template: JST['app/scripts/templates/Register.ejs'],

        events: {
            'click button.register': 'register',
            'click button.show-login': 'showLogin',
            'blur input': 'updateModel'
        },

        onRender: function() {
            Validation.bind(this);

            this.model.on('validated:valid', this.valid, this);
            this.model.on('validated:invalid', this.invalid, this);
        },

        updateModel: function(el){
            var $el = $(el.target);
            debugger;
            this.model.set($el.attr('name'), $el.val());
        },

        valid: function(view, attr, selector) {
            console.log('valid');
        },

        invalid: function(view, attr, error, selector) {
            debugger;
            console.log('invalid');
        },

        register: function(e) {
            e.preventDefault();
            debugger;
            var isValid = this.model.isValid(true);
            console.log('registering');
        },

        showLogin: function() {
            Backbone.history.navigate('#login', {trigger: true});
        }
    });

    return RegisterView;
});
