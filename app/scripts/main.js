/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        marionette : {
            deps : ['backbone'],
            exports : 'Marionette'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../components/jquery/jquery',
        backbone: '../components/backbone-amd/backbone',
        marionette: '../components/backbone.marionette/lib/backbone.marionette',
        underscore: '../components/underscore-amd/underscore',
        tpl: '../components/requirejs-tpl/tpl',
        bootstrap: 'vendor/bootstrap'
    }
});

require([
    'app',
    'backbone',
    'routes/gateway-router',
    'controllers/gateway-controller'
], function (app, Backbone, GatewayRouter, GatewayController) {
    'use strict';

    app.start();
    new GatewayRouter({
        controller: GatewayController
    });
    Backbone.history.start();
});