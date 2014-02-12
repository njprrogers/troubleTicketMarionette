(function() {
	'use strict';

	var root = this;

	root.define([
		'routers/ticketRouter'
		],
		function( Ticketrouter ) {

			describe('Ticketrouter Router', function () {

				it('should be an instance of Ticketrouter Router', function () {
					var ticketRouter = new Ticketrouter();
					expect( ticketRouter ).to.be.an.instanceof( Ticketrouter );
				});

				it('should have more test written', function(){
                    //TODO implement me
					expect( true ).to.be.ok;
				});
			});

		});

}).call( this );