define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function(  ) {
			console.log("initialize a MessageController");

            TT.Communicator.mediator.on("message:showLoadingMask", this.showLoadingMask);
            TT.Communicator.mediator.on("message:hideLoadingMask", this.hideLoadingMask);
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
