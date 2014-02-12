
define([
	'backbone',
	'communicator',
	'hbs!tmpl/welcome'
],

function( Backbone, Communicator, Welcome_tmpl ) {
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
        var AppLayout = Backbone.Marionette.Layout.extend({
            template: welcomeTmpl,

            regions: {
                header: "#header",
                content: "#content"
            }
        });
        App.layout = new AppLayout();
        App.main.show(App.layout);
//        App.layout.render();
		Communicator.mediator.trigger("APP:START");
	});

	return App;
});
