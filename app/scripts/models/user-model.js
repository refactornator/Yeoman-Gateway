/*global define*/

define([
    'underscore',
    'backbone',
], function (_, Backbone) {
    'use strict';

    var UserModel = Backbone.Model.extend({
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
                msg: 'Please enter a valid email'
            }],
            passwordConfirm: [{
                required: true,
                msg: 'Please confirm your password'
            },{
                equalTo: 'password',
                msg: 'Your password confirmation does not match'
            }]
        }
    });

    return UserModel;
});