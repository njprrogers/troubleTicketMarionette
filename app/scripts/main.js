require([
	'backbone',
	'application',
//    'scripts/models/Ticket.js',
//    'scripts/views/item/ticketView.js',
    'scripts/collections/Tickets.js',
    'hbs!tmpl/ticket',
    'scripts/views/composite/ticketsView.js',
    'hbs!tmpl/welcome',
    'regionManager'
],
function ( Backbone, App, Tickets, ticketTemplate, ticketsView, Welcome_tmpl ) {
    'use strict';

    var welcomeTmpl = Welcome_tmpl;

    TT.App.start();
});
