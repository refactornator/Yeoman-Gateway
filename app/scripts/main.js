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
            exports : 'Backbone.Marionette'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../components/jquery/jquery',
        backbone: '../components/backbone-amd/backbone',
        marionette : '../components/backbone.marionette/lib/core/amd/backbone.marionette',
        underscore: '../components/underscore-amd/underscore',
        tpl: '../components/requirejs-tpl/tpl',
        bootstrap: 'vendor/bootstrap'
    }
});

require([
    'app',
    'backbone',
    'routes/gateway-router'
], function (app, Backbone, GatewayRouter) {
    'use strict';

    app.start();
    new GatewayRouter({
    });
    Backbone.history.start();
});