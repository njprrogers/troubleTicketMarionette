define([
    'backbone',
    'communicator',
    'views/item/ticketEdit',
    'views/item/ticketOpen',
    'models/Ticket',
    'hbs!tmpl/ticket',
    'hbs!tmpl/item/ticketView_tmpl'
],
function( Backbone , Communicator) {
    'use strict';

    return Backbone.Marionette.Controller.extend({

        initialize: function(  ) {
            console.log('initialize a Ticketcontroller Controller ');
        },

        displayTicketEdit : function (ticketId) {

            require([ 'modules/Ticket' ], function(module) {
                console.log('callback ticket module, displayTicketEdit' + module);
                module.displayTicketEdit (ticketId);
            });
        },
        displayTicketOpen : function () {

            require([ 'modules/Ticket' ], function(module) {
                console.log('callback ticket module, displayTicketOpen' + module);
                module.displayTicketOpen();
            });
        },
        displayTicketView : function(ticketId, Ticket) {

            require([ 'modules/Ticket' ], function(module) {
                console.log('callback ticket module, displayTicketView' + module);
                module.displayTicketView(ticketId, Ticket);
            });
        },
        displayTicketList : function(){
            console.log('displayTicketList');

            require([ 'modules/TicketSearch' ], function(module) {
                console.log('callback ticketsearch module' + module);
                module.start();
                module.show();
            });
        }
    });

});