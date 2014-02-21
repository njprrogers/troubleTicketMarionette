define([
    'backbone',
    'hbs!tmpl/messages/loadingMessage'
],
    function (Backbone, LoadingMessageTmpl) {
        'use strict';

        return Backbone.View.extend({
            initialize: function (options) {
                console.log('initialize a Error message view View');

                this.options = options;
            },

            template: LoadingMessageTmpl,

            render: function () {
                this.setElement(this.template(this.attributes));
            }

        });
    });
