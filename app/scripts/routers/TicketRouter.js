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
                'ticket/open&sourceApplication=:sourceApplication': 'openTicket',
                'ticket/view/:ticketId&sourceApplication=:sourceApplication': 'viewTicket',
                'ticket/edit/:ticketId&sourceApplication=:sourceApplication': 'editTicket',
                'ticket/list&sourceApplication=:sourceApplication': 'listTickets',
                '*ticket':  'defaultRoute'
            },

            defaultRoute: function (params) {
                console.log('Default ticket route');
                TT.Communicator.mediator.trigger('message:showError', 'Error' ,'No source application name given.');
            },
            
            openTicket: function (params) {
                console.log('Open ticket');

            },

            viewTicket: function (ticketId, sourceApplication) {
                console.log('View ticket');
        
            },

            editTicket: function (params) {
                console.log('View ticket');

            },

            listTickets: function (params) {
                console.log('Ticket list');
                
                getController.apply(this).displayTicketList();
            }

        });
    });
