(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/ticketEdit'
		],
		function( Ticketedit ) {

			describe('Ticketedit Itemview', function () {

				it('should be an instance of Ticketedit Itemview', function () {
					var ticketEdit = new Ticketedit();
					expect( ticketEdit ).to.be.an.instanceof( Ticketedit );
				});

				it('should have more test written', function(){
					expect( true ).to.be.ok;
				});
			});

		});

}).call( this );