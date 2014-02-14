define([
	'backbone',
    'communicator',
    'hbs!tmpl/ticketSearch',
    'collections/Tickets',
    'hbs!tmpl/ticket'
],
function( Backbone , Communicator, ticketSearchTmpl, Tickets, ticketTemplate) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			console.log("initialize a Ticketcontroller Controller");
		},

        displayTicketList : function(){
            console.log('displayTicketList');

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
                                template: ticketTemplate
                            });

                            var CollectionView = Backbone.Marionette.CollectionView.extend({
                                tagName: 'table',
                                itemView: SingleLink,
                                events: {
                                    "click .table-action"         : "open"
                                },
                                open : function(e) {
                                    e.preventDefault();
                                    TT.App.router.navigate("ticket/view", {trigger: true});
                                }
                            });
                            TT.App.tickCollection = new CollectionView({
                                collection: collection
                            });
                            TT.App.layout.tableHolder.show(TT.App.tickCollection);
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
            TT.Communicator.mediator.trigger('hide');
        }
	});

});
