define([
	'backbone',
	'hbs!tmpl/item/ticketOpen_tmpl'
],
function( Backbone, TicketOpenTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log('initialize a TicketOpen ItemView');
		},
		
    	template: TicketOpenTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {
            'click #submit-open'         : 'submit'
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

                        var okCallback = function() {
                            TT.App.router.navigate('ticket/view/'+model.get('id')+'?sourceApplication=cqm', {trigger: true, replace:true});
                        };

                        TT.Communicator.mediator.trigger('message:showError','Ticket opened','Ticket #'+model.get('id')+' was opened and added to the ticketing system',okCallback);
                    }
                });

        },
		/* on render callback */
		onRender: function() {}
	});

});
