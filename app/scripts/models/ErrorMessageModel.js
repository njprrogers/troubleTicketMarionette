define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({
		initialize: function() {
			console.log("initialize a Errormessagemodel model");
		},

		defaults: {
            title : 'Error',
            msg : 'Error message'
        }

    });
});
