(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/ticketView'
		],
		function( Ticketview ) {

			describe('Ticketview Itemview', function () {

				it('should be an instance of Ticketview Itemview', function () {
					var ticketView = new Ticketview();
					expect( ticketView ).to.be.an.instanceof( Ticketview );
				});

				it('should have more test written', function(){
                    //TODO implement me
					expect( true ).to.be.ok;
				});
			});

		});

}).call( this );