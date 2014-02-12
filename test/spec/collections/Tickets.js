(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/Tickets'
		],
		function( Tickets ) {

			describe('Tickets Collection', function () {

				it('should be an instance of Tickets Collection', function () {
					var oTickets = new Tickets();
					expect( oTickets ).to.be.an.instanceof( Tickets );
				});

				it('should have more test written', function(){
					//TODO implement me
                    expect( true ).to.be.ok;
				});
			});

		});

}).call( this );