/*global define*/

define([
    'marionette',
    'controllers/gateway-controller'
], function (Marionette, GatewayController) {
    'use strict';

    var GatewayRouter = Marionette.AppRouter.extend({

        appRoutes: {
            ''                : 'login',
            'login'           : 'login',
            'signup'          : 'signup'
        }

    });

    return new GatewayRouter({controller: GatewayController});
});