define([
	'backbone',
	'views/item/ticketView',
	'hbs!tmpl/composite/ticketsView_tmpl'
],
function( Backbone, Ticketview, TicketsviewTmpl  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function() {
			console.log("initialize a Ticketsview CompositeView");
		},
		
    	itemView: Ticketview,
    	
    	template: TicketsviewTmpl,
    	

    	/* ui selector cache */
    	ui: {},

    	/* where are we appending the items views */
    	itemViewContainer: "",

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
