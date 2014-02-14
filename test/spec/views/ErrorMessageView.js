(function() {
	'use strict';

	var root = this;

	root.define([
		'views/ErrorMessageView'
		],
		function( Errormessageview ) {

			describe('Errormessageview View', function () {

				it('should be an instance of Errormessageview View', function () {
					var ErrorMessageView = new Errormessageview();
					expect( ErrorMessageView ).to.be.an.instanceof( Errormessageview );
				});

				it('should have more test written', function(){
                    //TODO implement me
					expect( true ).to.be.ok;
				});
			});

		});

}).call( this );