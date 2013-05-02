/*global define*/

define(['marionette','templates'], function (Marionette, JST) {
    'use strict';

    var LoginView = Marionette.ItemView.extend({
        template: JST['app/scripts/templates/Login.ejs']
	});

    return LoginView;
});
