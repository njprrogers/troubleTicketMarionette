define([
	'backbone',
	'models/Ticket'
],
function( Backbone, Ticket ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function() {
			console.log("initialize a Tickets collection");
		},

		model: Ticket,

        url : 'http://localhost:9000/troubleticketapi/api/v1/tickets'
		
	});
});
