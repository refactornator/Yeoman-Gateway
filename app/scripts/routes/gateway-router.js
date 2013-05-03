/*global define*/

define([
    'marionette'
], function (Marionette) {
    'use strict';

    return Marionette.AppRouter.extend({
        appRoutes: {
            'login'           : 'login',
            'signup'		  : 'signup'
        },

    });
});