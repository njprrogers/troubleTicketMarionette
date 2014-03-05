define([
    'backbone',
    'controllers/TicketController',
    'models/Ticket',
    'hbs!tmpl/ticket',
    'vendor/backbone.routefilter'

],
    function (Backbone, Controller, Ticket, routerFilter) {
        'use strict';

        var getController = function () {

            if (!TT.App.Controllers['ticketController']) {
                TT.App.Controllers['ticketController'] = new Controller();
            }

            return TT.App.Controllers['ticketController'];
        };

        return Backbone.Router.extend({

            initialize: function (options) {
                console.log('Initialize router');

            },

            /* Backbone routes hash */
            routes: {
                '': 'openTicket',
                'ticket/open?sourceApplication=:sourceApplication': 'openTicket',
                'ticket/add?sourceApplication=:sourceApplication': 'openTicket',
                'ticket/view/:ticketId?sourceApplication=:sourceApplication': 'viewTicket',
                'ticket/edit/:ticketId?sourceApplication=:sourceApplication': 'editTicket',
                'ticket/list?sourceApplication=:sourceApplication': 'listTickets',
                '*ticket': 'defaultRoute'
            },

            before: function () {
                console.log('before route');
                //TT.App.Communicator.mediator.trigger('message:hideError');
            },

            after: function () {
                console.log('after route');
            },

            defaultRoute: function () {
                console.log('Default ticket route');
                TT.App.Communicator.mediator.trigger('message:showError', 'Error', 'No source application name given.');
            },

            openTicket: function () {
                console.log('Open ticket');
                getController.apply(this).displayTicketOpen();
            },

            viewTicket: function (ticketId) {
                console.log('View ticket');
                getController.apply(this).displayTicketView(ticketId, Ticket);
            },
            editTicket: function (ticketId) {
                console.log('Edit ticket');
                getController.apply(this).displayTicketEdit(ticketId);
            },

            listTickets: function () {
                console.log('Ticket list');

                getController.apply(this).displayTicketList();
            }

        });
    });
