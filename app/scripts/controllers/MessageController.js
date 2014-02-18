define([
	'backbone',
	'views/ErrorMessageView'
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

        errorMessage: function (title, message, okCallbackFn, cancelCallbackFn) {
            console.log('Display error' + title + ' Msg:' + message);
            _getPleaseWaitDialog().addClass('hide');

			var view = new ModalView( {attributes : {
                title : title,
                msg : message,
				okCallbackFn : okCallbackFn,
				cancelCallbackFn : cancelCallbackFn
            }});
			TT.App.modal.showModal(view);
        },

        hideErrorMessage: function () {
            TT.App.modal.hideModal();
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
