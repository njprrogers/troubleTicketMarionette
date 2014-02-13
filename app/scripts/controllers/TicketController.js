define([
	'backbone',
    'hbs!tmpl/ticketSearch'
],
function( Backbone , ticketSearchTmpl) {
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
                    header: "#header",
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
                            debugger;

//            ticketsView = new ticketsView();
//            ticketsView.render();

                            var SingleLink = Backbone.Marionette.ItemView.extend({
                                tagName: "tr",
                                template: ticketTemplate
                            });


                            var CollectionView = Backbone.Marionette.CollectionView.extend({
                                tagName: 'table',
                                itemView: SingleLink
                            });
                            App.tickCollection = new CollectionView({
                                collection: collection
//                el: 'body'
                            });
                            App.layout.tableHolder.show(App.tickCollection);
//            App.layout.render();
//            App.tickCollection = new CollectionView({
//                collection: collection,
//                el: 'body'
//            }).render();
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
            TT.App.main.show(TT.App.layout);
        }
	});

});
