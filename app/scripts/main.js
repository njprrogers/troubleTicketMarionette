require([
	'backbone',
	'application',
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
