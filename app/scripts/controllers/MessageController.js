define([
	'backbone',
	'views/ErrorMessageView',
    'models/ErrorMessageModel'
],
function( Backbone , ModalView , ErrorModel) {
    'use strict';

    var _getPleaseWaitDialog =  function() {
        return $('#pleaseWaitDialog');
    };

	return Backbone.Marionette.Controller.extend({

        initialize: function(  ) {
			console.log("initialize a MessageController");

            TT.Communicator.mediator.on("message:showLoadingMask", this.showLoadingMask);
            TT.Communicator.mediator.on("message:hideLoadingMask", this.hideLoadingMask);
            TT.Communicator.mediator.on("message:showError", this.errorMessage);
            TT.Communicator.mediator.on("message:hideError", this.hideErrorMessage);
		},

        errorMessage: function (title, message) {
            console.log('Display error' + title + ' Msg:' + message);
            _getPleaseWaitDialog().addClass('hide');

            var errorModel = new ErrorModel({
                title : title,
                msg : message
            });
			var view = new ModalView( {model : errorModel});
			TT.App.modal.show(view);
        },

        hideErrorMessage: function () {
            TT.App.modal.hide();
        },

        showLoadingMask : function() {
			console.log('Showing loading mask');
            _getPleaseWaitDialog().removeClass('hide');
        },

        hideLoadingMask : function() {
			console.log('Hiding loading mask');
            _getPleaseWaitDialog().addClass('hide');
        }
	});
});
