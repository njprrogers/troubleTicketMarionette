define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({
		initialize: function() {
			console.log("initialize a Ticket model");
		},

		defaults: {},

        urlRoot : 'http://localhost:8000/troubleticketapi/api/v1/tickets/'

    });
});
