define([
    'backbone',
    'views/messages/ErrorMessageView',
    'views/messages/LoadingMessageView'
],
    function (Backbone, ErrorMessageView, LoadingMessageView) {
        'use strict';

        var _getPleaseWaitDialog = function () {
            return $('#pleaseWaitDialog');
        };

        return Backbone.Marionette.Controller.extend({

            initialize: function () {
                console.log("initialize a MessageController");

                TT.Communicator.mediator.on("message:showLoadingMask", this.showLoadingMask);
                TT.Communicator.mediator.on("message:hideLoadingMask", this.hideLoadingMask);
                TT.Communicator.mediator.on("message:showError", this.errorMessage);
                TT.Communicator.mediator.on("message:hideError", this.hideErrorMessage);
            },

            errorMessage: function (title, message, okCallbackFn, okCallbackScope, okCallbackParams, cancelCallbackFn, cancelCallbackScope, cancelCallbackParams) {
                console.log('Display error' + title + ' Msg:' + message);
                //_getPleaseWaitDialog().addClass('hide');

                var view = new ErrorMessageView({attributes: {
                    title: title,
                    msg: message,
                },
                    okCallbackFn: okCallbackFn,
                    cancelCallbackFn: cancelCallbackFn
                });
                TT.App.modal.showModal(view);
            },

            hideErrorMessage: function () {
                console.log('Hiding error popup');
                TT.App.modal.hideModal();
            },

            showLoadingMask: function (title, message) {
                console.log('Display error' + title + ' Msg:' + message);

                var view = new LoadingMessageView({
                    attributes: {
                        title: title,
                        msg: message
                    }
                });
                TT.App.modal.showModal(view);
            },

            hideLoadingMask: function () {
                console.log('Hiding loading mask');
                TT.App.modal.hideModal();
            }
        });
    });
