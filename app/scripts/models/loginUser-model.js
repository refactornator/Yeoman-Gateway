/*global define*/

define([
    'underscore',
    'backbone',
], function (_, Backbone) {
    'use strict';

    var LoginUserModel = Backbone.Model.extend({
        defaults:{
        },
        validation: {
            email: [{
                required: true,
                msg: 'Please enter an email address'
            },{
                pattern: 'email',
                msg: 'Please enter a valid email'
            }],
            password: [{
                required: true,
                msg: 'Please enter a password'
            },{
                minLength: 6,
                msg: 'Please enter a valid password'
            }]
        }
    });

    return LoginUserModel;
});