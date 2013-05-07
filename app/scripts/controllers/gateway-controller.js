/*global define*/

define(['gateway','models/user-model','views/Login-view','views/Register-view'], function (Gateway, UserModel, LoginView, RegisterView) {
    'use strict';

    var routerController = {
        login: function() {
            Gateway.main.show(new LoginView({
                model : new UserModel()
            }));
        },

        signup: function() {
            Gateway.main.show(new RegisterView({
                model : new UserModel()
            }));
        }
    };

    return routerController;
});
