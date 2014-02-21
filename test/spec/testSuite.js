define(function() {
	'use strict';

	/* return an array of specs to be run */
	return {
		specs: ['spec/collections/Tickets.js',
		'spec/controllers/TicketController.js',
		'spec/exampleTest.js',
		'spec/models/Ticket.js',
		'spec/regions/modal.js',
		'spec/routers/TicketRouter.js',
		'spec/views/messages/ErrorMessageView.js',
		'spec/views/composite/ticketsView.js',
		'spec/views/item/ticketEdit.js',
        'spec/views/item/ticketOpen.js',
		'spec/views/item/ticketView.js'
		]
	};
});
