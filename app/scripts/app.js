/*global define*/

define(
  ['marionette','vent','models/user-model','views/Login-view'],
function(Marionette, vent, UserModel, LoginView){
    'use strict';

    var app = new Marionette.Application();

    var FadeInRegion = Marionette.Region.extend({
        el: '#main',

        open: function(view){
            this.$el.hide();
            this.$el.html(view.el);
            this.$el.fadeIn('slow');
        }

    });

    app.addRegions({
        main: FadeInRegion
    });

    var user = new UserModel();

    var loginView = new LoginView({
        model : user
    });

    app.addInitializer(function(){
        app.main.show(loginView);
    });

    return app;

});
