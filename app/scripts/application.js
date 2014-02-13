
define([
	'backbone',
	'communicator',
	'hbs!tmpl/welcome',
    'routers/TicketRouter'
],

function( Backbone, Communicator, Welcome_tmpl , Router) {
    'use strict';

	var welcomeTmpl = Welcome_tmpl;

	TT.App = new Backbone.Marionette.Application();

    TT.App.Controllers = [];

	/* Add application regions here */
	TT.App.addRegions({
        main : '#main'
    });



	/* Add initializers here */
	TT.App.addInitializer( function () {
//		document.body.innerHTML = welcomeTmpl({ success: "CONGRATS!" });

//        App.layout.render();
		Communicator.mediator.trigger("APP:START");
		TT.App.router = new Router();

        console.log('Display welcome message');
        var AppLayout = Backbone.Marionette.Layout.extend({
            template: welcomeTmpl
        });
        TT.App.layout = new AppLayout();
        TT.App.main.show(TT.App.layout);
	});

    TT.App.on("initialize:after", function(options){

        if (Backbone.history){
            console.log('Initialize history');
            Backbone.history.start();
        }
    });

	return TT.App;
});
