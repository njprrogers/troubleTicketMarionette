(function() {
	'use strict';

	var root = this;

	root.define([
		'models/Ticket'
		],
		function( Ticket ) {

			describe('Ticket Model', function () {
				it('should be an instance of Ticket Model', function () {
					var oTicket = new Ticket();
					expect( oTicket ).to.be.an.instanceof( Ticket );
				});

				it('should have more test written', function(){
                    //TODO implement me
					expect( true ).to.be.ok;
				});
			});

		});

}).call( this );