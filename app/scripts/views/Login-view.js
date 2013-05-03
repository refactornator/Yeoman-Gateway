/*global define*/

define(['marionette','templates'], function (Marionette, JST) {
    'use strict';

    var LoginView = Marionette.ItemView.extend({
        className: 'hero-unit',
        template: JST['app/scripts/templates/Login.ejs']
    });

    return LoginView;
});
