/*global define*/

define(['gateway','models/loginUser-model','models/registerUser-model','views/Login-view','views/Register-view'], function (Gateway, LoginUserModel, RegisterUserModel, LoginView, RegisterView) {
    'use strict';

    var routerController = {
        login: function() {
            Gateway.main.show(new LoginView({
                model : new LoginUserModel()
            }));
        },

        signup: function() {
            Gateway.main.show(new RegisterView({
                model : new RegisterUserModel()
            }));
        }
    };

    return routerController;
});
