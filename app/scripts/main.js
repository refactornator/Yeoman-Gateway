/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        marionette : {
            deps : ['jquery', 'underscore', 'backbone'],
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
        marionette: '../components/backbone.marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr' : '../components/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.babysitter' : '../components/backbone.babysitter/lib/amd/backbone.babysitter',
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