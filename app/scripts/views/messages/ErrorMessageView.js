define([
	'backbone',
    'hbs!tmpl/messages/errorMessage'
],
function(Backbone, ErrorMessageTmpl){
    'use strict';

	return Backbone.View.extend({
		initialize: function(options) {
			console.log("initialize a Errormessageview View");
			
			this.options = options;
		},

        template: ErrorMessageTmpl,

        render: function(){
            this.setElement(this.template(this.attributes));
        },

        events: {
            'click .btn-primary'         : 'submit',
            'click .btn'         : 'cancel'
        },

        submit : function(){
			if(this.options.okCallbackFn){
				this.options.okCallbackFn.apply(this);
			}
        }

	});
});
