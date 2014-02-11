require([
	'backbone',
	'application',
//    'scripts/models/Ticket.js',
//    'scripts/views/item/ticketView.js',
    'scripts/collections/Tickets.js',
    'hbs!tmpl/ticket',
    'scripts/views/composite/ticketsView.js',
    'regionManager'
],
function ( Backbone, App, Tickets, ticketTemplate, ticketsView ) {
    'use strict';

	App.start();


//    var ticket = new Ticket();

//    Tickets.get({
//        id : 31358
//    });

    var tickets = new Tickets();

    tickets.fetch({
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
            App.layout.content.show(App.tickCollection);
//            App.layout.render();
//            App.tickCollection = new CollectionView({
//                collection: collection,
//                el: 'body'
//            }).render();
        },
        error : function (params) {
            console.log ('error ' +params);
        }
    });

});
