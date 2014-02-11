(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/Tickets'
		],
		function( Tickets ) {

			describe('Tickets Collection', function () {

				it('should be an instance of Tickets Collection', function () {
					var Tickets = new Tickets();
					expect( Tickets ).to.be.an.instanceof( Tickets );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );