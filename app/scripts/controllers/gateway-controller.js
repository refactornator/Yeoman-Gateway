/*global define*/

define(['gateway'], function (Gateway) {
    'use strict';

    var routerController = {
        login: function() {
            require(['models/user-model', 'views/Login-view'], function(UserModel, LoginView){
                Gateway.main.show(new LoginView({
                    model : new UserModel()
                }));
            })
        },

        signup: function() {
            require(['models/user-model', 'views/Register-view'], function(UserModel, RegisterView){
                Gateway.main.show(new RegisterView({
                    model : new UserModel()
                }));
            });
        }
    };

    return routerController;
});
