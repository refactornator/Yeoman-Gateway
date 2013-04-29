/*global define*/

define([
    'marionette'
], function (marionette) {
    'use strict';

    return marionette.AppRouter.extend({
        appRoutes: {
            ''                : 'login',
            'signup'          : 'signup',
            'forgot-password' : 'forgot-password'
        },

    });
});