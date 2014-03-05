define([
    'backbone',
    'communicator',
    'application',
    'views/item/ticketEdit',
    'views/item/ticketOpen',
    'models/Ticket',
    'hbs!tmpl/ticket',
    'hbs!tmpl/item/ticketView_tmpl'
],

    function (Backbone, Communicator, App, TicketEditView, TicketOpenView, TicketModel, ticketTemplate, ticketViewTmpl) {
        'use strict';

        var ticketModule = App.module('Ticket', function (TicketModule, MyApp, Backbone) {

            TicketModule.displayTicketOpen = function () {

                MyApp.Communicator.mediator.trigger('message:showLoadingMask');

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

                MyApp.layout.content.show(ourTicketOpen);

                MyApp.Communicator.mediator.trigger('message:hideLoadingMask');
            };

            TicketModule.displayTicketView = function (ticketId, Ticket) {

                MyApp.Communicator.mediator.trigger('message:showLoadingMask');

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

                        var ViewTicket = Backbone.Marionette.ItemView.extend({
                            template: ticketViewTmpl
                        });
                        var ourTicketView = new ViewTicket({
                            model : ticketModel
                        });

                        MyApp.layout.content.show(ourTicketView);

                        MyApp.Communicator.mediator.trigger('message:hideLoadingMask');
                    },
                    error : function(a, b) {
                        console.log(a, b);
                    }
                });
            };

            TicketModule.displayTicketEdit  = function(ticketId) {

                MyApp.Communicator.mediator.trigger('message:showLoadingMask');

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

                        MyApp.layout.content.show(ourTicketEdit);

                        MyApp.Communicator.mediator.trigger('message:hideLoadingMask');
                    },
                    error : function(a, b) {
                        console.log(a, b);
                    }
                });
            };

        });

        return ticketModule;
    }
);