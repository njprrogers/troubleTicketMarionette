(function() {
	'use strict';

	var root = this;

	root.define([
		'models/ErrorMessageModel'
		],
		function( Errormessagemodel ) {

			describe('Errormessagemodel Model', function () {

				it('should be an instance of Errormessagemodel Model', function () {
					var ErrorMessageModel = new Errormessagemodel();
					expect( ErrorMessageModel ).to.be.an.instanceof( Errormessagemodel );
				});

				it('should have more test written', function(){
                    //TODO implement me
					expect( true ).to.be.ok;
				});
			});

		});

}).call( this );