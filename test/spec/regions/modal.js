(function() {
	'use strict';

	var root = this;

	root.define([
		'regions/modal'
		],
		function( Modal ) {

			describe('Modal Region', function () {

				it('should be an instance of Modal Region', function () {
					var modal = new Modal();
					expect( modal ).to.be.an.instanceof( Modal );
				});

				it('should have more test written', function(){
                    //TODO implement me
					expect( true ).to.be.ok;
				});
			});

		});

}).call( this );