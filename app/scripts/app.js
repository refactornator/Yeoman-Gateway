/*global $*/
define(
  ['marionette','models/user-model','views/Login-view'],
  function(Marionette, UserModel, LoginView){
    "use strict";

    var app = new Marionette.Application();

    app.addRegions({
      main   : '#main'
    });

    app.addInitializer(function(){

      app.main.show(new LoginView({
        model : UserModel
      }));

    });

    return app;

  }
);