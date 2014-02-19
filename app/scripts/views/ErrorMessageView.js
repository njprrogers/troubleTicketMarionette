define([
	'backbone',
    'hbs!tmpl/messages/errorMessage'
],
function(Backbone, ErrorMessageTmpl){
    'use strict';

	return Backbone.View.extend({
		initialize: function() {
			console.log("initialize a Errormessageview View");
		},

        template: ErrorMessageTmpl,

        render: function(){
            this.setElement(this.template(this.attributes));
        }


	});
});
