define([
	'backbone',
	'hbs!tmpl/item/ticketView_tmpl'
],
function( Backbone, TicketviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Ticketview ItemView");
		},
		
    	template: TicketviewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
