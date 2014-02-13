require([
	'backbone',
	'application',
//    'scripts/models/Ticket.js',
//    'scripts/views/item/ticketView.js',
    'scripts/collections/Tickets.js',
    'hbs!tmpl/ticket',
    'scripts/views/composite/ticketsView.js',
    'hbs!tmpl/welcome',
    'regionManager'
],
function ( Backbone, App, Tickets, ticketTemplate, ticketsView, Welcome_tmpl ) {
    'use strict';

    var welcomeTmpl = Welcome_tmpl;

	App.start();

    var AppLayout = Backbone.Marionette.Layout.extend({
        template: welcomeTmpl,

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
            debugger
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
                    debugger
//                var responseText = JSON.parse(response.responseText);
//                $('#errorText').text(responseText.validationErrors[0].errorCode + ' ' + responseText.validationErrors[0].developerMessage);
//                alert('there has been a'+ response.status +' error');
                    console.log(response);

                    console.log ('error ' +params + JSON.stringify(response));
                }
            });

        }
    });
    App.layout = new AppLayout();
    App.main.show(App.layout);

//    var ticket = new Ticket();

//    Tickets.get({
//        id : 31358
//    });



});
