(function() {
	'use strict';

	var root = this;

	root.define([
		'models/Ticket'
		],
		function( Ticket ) {

			describe('Ticket Model', function () {

				it('should be an instance of Ticket Model', function () {
					var Ticket = new Ticket();
					expect( Ticket ).to.be.an.instanceof( Ticket );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );