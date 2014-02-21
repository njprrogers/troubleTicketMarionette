(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/ticketOpen'
		],
		function( TicketOpen {

			describe('TicketOpenview', function () {

				it('should be an instance of TicketOpen Itemview', function () {
					var ticketOpen = new TicketOpen();
					expect( ticketOpen ).to.be.an.instanceof( TicketOpen );
				});

				it('should have more test written', function(){
					expect( true ).to.be.ok;
				});
			});


		});

}).call( this );