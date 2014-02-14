define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			console.log("initialize a MessageController");

            TT.Communicator.mediator.on("message:show", this.showLoadingMask);
            TT.Communicator.mediator.on("hide", this.hideLoadingMask);
		},

        showLoadingMask : function() {
			console.log('Showing loading mask');
			var pleaseWaitDialog = $('#pleaseWaitDialog');
            pleaseWaitDialog.removeClass('hide');
        },

        hideLoadingMask : function() {
			console.log('Hiding loading mask');
			var pleaseWaitDialog = $('#pleaseWaitDialog');
            pleaseWaitDialog.addClass('hide');
        }
	});
});
