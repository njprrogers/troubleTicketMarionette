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

        url : 'http://localhost:8000/troubleticketapi/api/v1/tickets?_dc=1392117106796&sourceApplication=cqm&imsi=100000000000001'
		
	});
});
