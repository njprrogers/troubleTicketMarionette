define([
    'backbone',
    'controllers/TicketController',
    'hbs!tmpl/ticket'

],
    function (Backbone, Controller) {
        'use strict';

        var getController = function() {

            if(!TT.App.Controllers['ticketController'] ) {
                TT.App.Controllers['ticketController'] = new Controller();
            }

            return TT.App.Controllers['ticketController'];
        };
        
        return Backbone.Router.extend({

            initialize: function( options ) {
                console.log('Initialize router');
                
            },

            /* Backbone routes hash */
            routes: {
                '': 'openTicket',
                'ticket/open': 'openTicket',
                'ticket/view': 'viewTicket',
                'ticket/list': 'listTickets'
            },

            openTicket: function (params) {
                console.log('Open ticket');

            },

            viewTicket: function (params) {
                console.log('View ticket');
        
            },

            listTickets: function (params) {
                console.log('Ticket list');
                
                getController.apply(this).displayTicketList();
            }

        });
    });
