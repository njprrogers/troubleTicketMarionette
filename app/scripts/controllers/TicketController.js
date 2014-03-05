define([
    'backbone',
    'communicator',
    'views/item/ticketEdit',
    'views/item/ticketOpen',
    'models/Ticket',
    'hbs!tmpl/ticket',
    'hbs!tmpl/item/ticketView_tmpl'
],
function( Backbone , Communicator, TicketEditView, TicketOpenView, TicketModel, ticketTemplate, ticketViewTmpl) {
    'use strict';

    return Backbone.Marionette.Controller.extend({

        initialize: function(  ) {
            console.log('initialize a Ticketcontroller Controller ');
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

                    TT.App.Communicator.mediator.trigger('message:hideLoadingMask');
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

            TT.App.Communicator.mediator.trigger('message:hideLoadingMask');
        },
        displayTicketView : function(ticketId, Ticket) {
            TT.App.Communicator.mediator.trigger('message:showLoadingMask');

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
//                        tagName: '#content',
                        template: ticketViewTmpl
                    });
                    var ourTicketView = new viewTicket({
                        model : ticketModel
                    });
//                     TT.App.layout.regionManager.removeRegion('content');
//                    TT.App.layout.regionManager.addRegion('content');

                    TT.App.layout.content.show(ourTicketView);

                    TT.App.Communicator.mediator.trigger('message:hideLoadingMask');
                },
                error : function(a, b) {
                    console.log(a, b);
                }
            });
        },
        displayTicketList : function(){
            console.log('displayTicketList');

            require([ 'modules/TicketSearch' ], function(module) {
                console.log('callback ticketsearch module' + module);
                module.start();
            });
        }
    });

});