define([
    'backbone',
    'communicator',
    'hbs!tmpl/welcome',
    'routers/TicketRouter',
    'controllers/MessageController'
],

    function (Backbone, Communicator, Welcome_tmpl, Router, MessageController) {
        'use strict';

        TT.App = new Backbone.Marionette.Application();

        TT.App.Controllers = [];

        /* Add application regions here */
        TT.App.addRegions({
            main: '#main'
        });

        /* Add initializers here */
        TT.App.addInitializer(function () {

            Communicator.mediator.trigger("APP:START");

            TT.Communicator = Communicator;

            TT.App.router = new Router();

            TT.App.Controllers.push(new MessageController());

            console.log('Display welcome message');
            var AppLayout = Backbone.Marionette.Layout.extend({
                template: Welcome_tmpl
            });
            TT.App.layout = new AppLayout();
            TT.App.main.show(TT.App.layout);
        });

        TT.App.on("initialize:after", function (options) {

            if (Backbone.history) {
                console.log('Initialize history');
                Backbone.history.start();
            }
        });

        return TT.App;
    });
