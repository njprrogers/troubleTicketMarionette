define([
	'backbone',
	'hbs!tmpl/item/ticketEdit_tmpl'
],
function( Backbone, TicketeditTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Ticketedit ItemView");
		},
		
    	template: TicketeditTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
        events: {
            "click #submit-edit"         : "submit"
        },
        submit : function(e, params, params2) {
            e.preventDefault();

            this.model.save({
                title : this.$el.find('#title').val(),
                location : this.$el.find('#location').val(),
                description : this.$el.find('#description').val(),
                status : this.$el.find('#status').val()
            },
            {
                error : function(model, response, options) {
                    console.log('we have an error '+response)
                },
                success: function(model, response, options) {
                    console.log('Model successfully updated '+response)
                    TT.App.router.navigate("ticket/view/"+model.get('id')+'?sourceApplication=cqm', {trigger: true, replace:true});
                }
            });

        },
		/* on render callback */
		onRender: function() {}
	});

});
