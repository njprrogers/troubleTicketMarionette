define([
    'backbone',
    'communicator',
    'backbone.marionette',
    'hbs',
    'handlebars',
    'application',
    'hbs!tmpl/ticketSearch'
],

    function (Backbone, Communicator, Marionette, hbs, handlebars, App, ticketSearchTmpl) {
        'use strict';

        var myModule = App.module('TicketSearch', function (TicketSearch, MyApp, Backbone, Marionette, $, _) {

            this.startWithParent = false;

            TicketSearch.addInitializer(function (data) {
                TicketSearch.show();
            });

            this.show = function () {
                console.log('hello module');
                MyApp.Communicator.mediator.trigger('message:showLoadingMask');

                var ticketListPage = Backbone.Marionette.ItemView.extend({
                    template: ticketSearchTmpl,
                    events: {
                        'click #submit': 'submit'
                    },
                    submit: function (event) {
                        MyApp.Communicator.mediator.trigger('message:showLoadingMask');
                        MyApp.router.navigate('ticket/list?sourceApplication=cqm&' + this.$el.find('#key').val() + '=' + this.$el.find('#keyValue').val(), {trigger: false, replace: true});
                        event.preventDefault();
                        var tickets = new Tickets(),
                            queryParams = {};
                        queryParams[$('#key').val()] = $('#keyValue').val();
                        queryParams.sourceApplication = 'cqm';

                        tickets.fetch({
                            data: queryParams,
                            success: function (collection, response) {
                                console.log('success ' + collection + response);

                                MyApp.tickCollection = new TicketsView({
                                    collection: collection
                                });

                                $('#table-holder').append(MyApp.tickCollection.render().el);
                                $('#table-holder').show();

                                MyApp.Communicator.mediator.trigger('message:hideLoadingMask');
                            },
                            error: function (params, response) {
                                //                var responseText = JSON.parse(response.responseText);
                                //                $('#errorText').text(responseText.validationErrors[0].errorCode + ' ' + responseText.validationErrors[0].developerMessage);
                                //                alert('there has been a'+ response.status +' error');
                                console.log(response);

                                console.log('error ' + params + JSON.stringify(response));
                            }
                        });

                    }
                });

                MyApp.layout.content.show(new ticketListPage());
                MyApp.Communicator.mediator.trigger('message:hideLoadingMask');

            };

        });

        return myModule;
    });
