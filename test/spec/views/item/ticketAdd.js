(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/ticketAdd'
		],
		function( Ticketadd ) {

			describe('Ticketadd Itemview', function () {

				it('should be an instance of Ticketadd Itemview', function () {
					var ticketAdd = new Ticketadd();
					expect( ticketAdd ).to.be.an.instanceof( Ticketadd );
				});

				it('should have more test written', function(){
					expect( true ).to.be.ok;
				});
			});

		});

}).call( this );