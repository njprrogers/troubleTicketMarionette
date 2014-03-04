define([
    'backbone',
    'communicator',
    'hbs!tmpl/welcome',
    'routers/TicketRouter',
    'controllers/MessageController',
    'regions/Modal',
    'hbs',
    'handlebars'
],

    function (Backbone, Communicator, Welcome_tmpl, Router, MessageController, ModalRegion, hbs, handlebars) {
        'use strict';

        TT.App = new Backbone.Marionette.Application();

        TT.App.Controllers = [];


        /* Add application regions here */
        TT.App.addRegions({
            main: '#main',
            modal: ModalRegion
        });

        /* Add initializers here */
        TT.App.addInitializer(function () {

            console.log('Before app start');

            Communicator.mediator.trigger("APP:START");

            TT.App.Communicator = Communicator;

            TT.App.router = new Router();

            TT.App.Controllers.push(new MessageController());

            console.log('Display welcome message');
            var AppLayout = Backbone.Marionette.Layout.extend({
                template: Welcome_tmpl,
                regions: {
                    header : '#header',
                    content: '#content',
                    footer : 'footer'
                }
            });
            TT.App.layout = new AppLayout();
            TT.App.main.show(TT.App.layout);
        });

        TT.App.on("initialize:after", function () {
            if (Backbone.history) {
                console.log('Initialize history');
                Backbone.history.start();
            }
        });

        return TT.App;
    });
