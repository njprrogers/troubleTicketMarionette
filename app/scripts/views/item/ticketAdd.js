define([
	'backbone',
	'hbs!tmpl/item/ticketAdd_tmpl'
],
function( Backbone, TicketaddTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Ticketadd ItemView");
		},
		
    	template: TicketaddTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {
            "click #submit-add"         : "submit"
        },
        submit : function(e, params, params2) {
            e.preventDefault();

            this.model.save({
                    title : this.$el.find('#title').val(),
                    location : this.$el.find('#location').val(),
                    description : this.$el.find('#description').val()
                },
                {
                    error : function(model, response, options) {
                        console.log('we have an error '+response)
                    },
                    success: function(model, response, options) {
                        console.log('Model successfully saved, id: '+response.id);
                        TT.App.router.navigate("ticket/view/"+model.get('id')+'?sourceApplication=cqm', {trigger: true, replace:true});
                    }
                });

        },
		/* on render callback */
		onRender: function() {}
	});

});
