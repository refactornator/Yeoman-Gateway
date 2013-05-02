/*global define*/

define(['marionette','templates'], function (Marionette, JST) {
    'use strict';

    var RegisterView = Marionette.ItemView.extend({
        template: JST['app/scripts/templates/Register.ejs']
    });

    return RegisterView;
});
