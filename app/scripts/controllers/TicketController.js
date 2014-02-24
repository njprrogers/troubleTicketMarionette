define([
	'backbone',
    'communicator',
    'hbs!tmpl/ticketSearch',
    'collections/Tickets',
    'views/item/ticketEdit',
    'views/item/ticketOpen',
    'models/Ticket',
    'hbs!tmpl/ticket',
    'hbs!tmpl/item/ticketView_tmpl',
    'hbs!tmpl/ticketList_tmpl'
],
function( Backbone , Communicator, ticketSearchTmpl, Tickets, TicketEditView,TicketOpenView, TicketModel, ticketTemplate, ticketViewTmpl, ticketListTemplate) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function(  ) {
			console.log("initialize a Ticketcontroller Controller ");
		},

        displayTicketEdit : function (ticketId) {

            var ticket = new TicketModel({
                id:ticketId
            });
            ticket.fetch({
                data : {
                    'sourceApplication' : 'cqm',
                    'dataMode' : 'SUMMARY'

                },
                success : function(ticketModel) {
                    console.log('Retrieve ticket '+ ticketId);

                    var ourTicketEdit = new TicketEditView({
                        model : ticketModel
                    });

                    TT.App.layout.content.show(ourTicketEdit);

                    TT.Communicator.mediator.trigger('message:hideLoadingMask');
                },
                error : function(a, b) {
                    console.log(a, b);
                }
            });
        },
        displayTicketOpen : function () {

            var ticketModel = new TicketModel({
                imsi:'123456789123456',
                msisdn: '123456789123456',
                startTime: '2013-11-09 00:00',
                endTime: '2013-11-14 23:59',
                title: 'title',
                customerName: 'Bob McBob',
                plan: 'Plan9',
                businessName: 'Bobs Magical Wax Show',
                avgBill: '10',
                tariff: 'A',
                type: 'My kind',
                description: 'http://example.com',
                sourceApplication: 'cqm'

            });
            var ourTicketOpen = new TicketOpenView({
                model : ticketModel
            });

            TT.App.layout.content.show(ourTicketOpen);

            TT.Communicator.mediator.trigger('message:hideLoadingMask');
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
//                        tagName: "#content",
                        template: ticketViewTmpl
                    });
                    var ourTicketView = new viewTicket({
                        model : ticketModel
                    });
//                     TT.App.layout.regionManager.removeRegion('content');
// 					TT.App.layout.regionManager.addRegion('content');
					
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

            var ticketListPage = Backbone.Marionette.ItemView.extend({
                template: ticketSearchTmpl,
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
    								TT.App.router.navigate("ticket/view/"+this.model.get('id')+'?sourceApplication=cqm', {trigger: true, replace:true});

                                }
                            });

                            var CollectionView = Backbone.Marionette.CompositeView.extend({
                                template: ticketListTemplate,
                                itemView: SingleLink,
                                itemViewContainer: 'tbody',

                                initialize: function(){
                                    collection.on('reset sort', this.render, this);
                                },
                                events: {
                                    'click thead'         : 'headerClick'

                                },
                                render: function() {
                                    console.log('render');

                                    //call super class render
                                    Backbone.Marionette.CompositeView.prototype.render.call(this);

                                    // Adjust the indicators.  Reset everything to hide the indicator
                                    this.$el.find('th').attr('class', 'sorting');
                                    this.$el.find('th#' + this.collection.sortAttribute).addClass('sorting_asc');
                                    // Now show the correct icon on the correct column
                                    if (this.collection.sortDirection === 1) {
                                        this.$el.find('th#' + this.collection.sortAttribute).removeClass('sorting').addClass('sorting_asc');
                                    } else {
                                        this.$el.find('th#' + this.collection.sortAttribute).removeClass('sorting').addClass('sorting_desc');
                                    }
                                    return this;
                                },
                                // the part that actually changes the sort order
                                headerClick: function( e ) {
                                    console.log('haderClick');
                                    var $el = $(e.currentTarget);
                                    var ns = e.target.id;
                                    var cs = this.collection.sortAttribute;

                                    // Toggle sort if the current column is sorted
                                    if (ns === cs) {
                                        this.collection.sortDirection *= -1;
                                    } else {
                                        this.collection.sortDirection = 1;
                                    }

                                    // Now sort the collection
                                    this.collection.sortByField(ns);
                                }
                             });
                            TT.App.tickCollection = new CollectionView({
                                collection: collection
                            });
                            $('#table-holder').append(TT.App.tickCollection.render().el);
                            $('#table-holder').show();

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

            TT.App.layout.content.show(new ticketListPage());
            TT.Communicator.mediator.trigger('message:hideLoadingMask');
        }
	});

});