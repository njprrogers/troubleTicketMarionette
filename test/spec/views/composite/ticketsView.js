(function() {
	'use strict';

	var root = this;

	root.define([
		'views/composite/ticketsView'
		],
		function( Ticketsview ) {

			describe('Ticketsview Compositeview', function () {

				it('should be an instance of Ticketsview Compositeview', function () {
					var ticketsView = new Ticketsview();
					expect( ticketsView ).to.be.an.instanceof( Ticketsview );
				});

				it('should have more test written', function(){
                    //TODO implement me
					expect( true ).to.be.ok;
				});
			});

		});

}).call( this );