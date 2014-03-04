define([
    'backbone',
    'communicator',
    'backbone.marionette',
    'hbs',
    'handlebars',
    'application'
],

    function (Backbone, Communicator, Marionette, hbs, handlebars, App) {
        'use strict';

        var myModule = App.module('TicketSearch', function (TicketSearch, MyApp, Backbone, Marionette, $, _) {

            TicketSearch.addInitializer(function (data) {
                TicketSearch.show();
            });

            this.show = function () {
                console.log('hello module');
            };

        });

        return myModule;
    });
