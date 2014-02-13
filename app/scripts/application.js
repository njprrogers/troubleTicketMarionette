
define([
	'backbone',
	'communicator',
	'hbs!tmpl/welcome',
    'routers/TicketRouter'
],

function( Backbone, Communicator, Welcome_tmpl , Router) {
    'use strict';

	var welcomeTmpl = Welcome_tmpl;

	App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
        main : '#main'
    });



	/* Add initializers here */
	App.addInitializer( function () {
//		document.body.innerHTML = welcomeTmpl({ success: "CONGRATS!" });

//        App.layout.render();
		Communicator.mediator.trigger("APP:START");
	});

    App.on("initialize:after", function(options){

        App.router = new Router();
    });

	return App;
});
