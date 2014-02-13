(function() {
	'use strict';

	var root = this;

	root.define([
		'controllers/TicketController'
		],
		function( Ticketcontroller ) {

			describe('Ticketcontroller Controller', function () {

				it('should be an instance of Ticketcontroller Controller', function () {
					var TicketController = new Ticketcontroller();
					expect( TicketController ).to.be.an.instanceof( Ticketcontroller );
				});

				it('should have more test written', function(){
                    //TODO implement me
					expect( true ).to.be.ok;
				});
			});

		});

}).call( this );