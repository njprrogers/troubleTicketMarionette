define([
	'backbone',
    'communicator',
    'hbs!tmpl/ticketSearch',
    'collections/Tickets',
    'hbs!tmpl/ticket',
    'hbs!tmpl/item/ticketView_tmpl'
],
function( Backbone , Communicator, ticketSearchTmpl, Tickets, ticketTemplate, ticketViewTmpl) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function(  ) {
			console.log("initialize a Ticketcontroller Controller ");
		},

        displayTicketView : function(ticketId, Ticket) {
            TT.Communicator.mediator.trigger('message:showLoadingMask');

            var ticket = new Ticket({
                id:ticketId
            });
            ticket.fetch({
                data : {
                    'sourceApplication' : 'cqm',
                    'dataMode' : 'SUMMARY'

                },
                success : function(ticketModel) {
                    console.log('Retrieve ticket '+ ticketId);

                    var viewTicket = Backbone.Marionette.ItemView.extend({
                        tagName: "div",
                        template: ticketViewTmpl
                    });
                    var ourTicketView = new viewTicket({
                        model : ticketModel
                    });
                    TT.App.layout.regionManager.close('content');
                    TT.App.layout.content.show(ourTicketView);

                    TT.Communicator.mediator.trigger('message:hideLoadingMask');
                },
                error : function(a, b) {
                    console.log(a, b);
                }
            });
        },
        displayTicketList : function(){
            console.log('displayTicketList');
            TT.Communicator.mediator.trigger('message:showLoadingMask');

            var AppLayout = Backbone.Marionette.Layout.extend({
                template: ticketSearchTmpl,

                regions: {
                    content: "#content",
                    tableHolder: '#table-holder'
                },
                events: {
                    "click #submit"         : "submit"
                },
                submit : function (event) {
                    TT.Communicator.mediator.trigger('message:showLoadingMask');
                    event.preventDefault();
                    var tickets = new Tickets();
                    tickets.fetch({
                        data : {
                            'sourceApplication' : 'cqm',
                            'imsi' : $('#imsi').val()
                        },
                        success : function (collection, response) {
                            console.log ('success ' +collection+response);

                            var SingleLink = Backbone.Marionette.ItemView.extend({
                                tagName: "tr",
                                template: ticketTemplate,

								events: {
                                    "click .table-action"         : "open"
                                },
                                open : function(e, params, params2) {
                                    e.preventDefault();
									TT.App.router.navigate("ticket/view/"+this.model.get('id')+'?sourceApplication=cqm', {trigger: true});
                                }
                            });

                            var CollectionView = Backbone.Marionette.CollectionView.extend({
                                tagName: 'table',
                                itemView: SingleLink
                            });
                            TT.App.tickCollection = new CollectionView({
                                collection: collection
                            });
                            TT.App.layout.tableHolder.show(TT.App.tickCollection);

                            TT.Communicator.mediator.trigger('message:hideLoadingMask');
                        },
                        error : function (params, response) {
        //                var responseText = JSON.parse(response.responseText);
        //                $('#errorText').text(responseText.validationErrors[0].errorCode + ' ' + responseText.validationErrors[0].developerMessage);
        //                alert('there has been a'+ response.status +' error');
                            console.log(response);

                            console.log ('error ' +params + JSON.stringify(response));
                        }
                    });

                }
            });
            TT.App.layout = new AppLayout();
            TT.App.addRegions({
                content : '#content'
            });
            TT.App.content.show(TT.App.layout);
            TT.Communicator.mediator.trigger('message:hideLoadingMask');
        }
	});

});
