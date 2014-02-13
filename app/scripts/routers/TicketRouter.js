define([
    'backbone',


],
    function (Backbone) {
        'use strict';

        return Backbone.Router.extend({

            initialize: function( options ) {
                console.log('Initialize router');
                if (Backbone.history){
                    console.log('Initialize history');
                    Backbone.history.start();
                }
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
            }

        });
    });
