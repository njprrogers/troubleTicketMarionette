define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	/* Return a Region class definition */
	return Backbone.Marionette.Region.extend({

        el: "#modal",

		initialize: function() {
			console.log("initialize a Modal Region");
            this.$el = this.getEl(this.el);
		},

        constructor: function(){
            _.bindAll(this);
            Backbone.Marionette.Region.prototype.constructor.apply(this, arguments);
            this.on("view:show", this.showModal, this);
        },

        getEl: function(selector){
            var $el = $(selector);
            $el.on("hidden", this.close);
            return $el;
        },

        showModal: function(view){
            view.on("close", this.hideModal, this);

            this.$el.modal('show');
			this.show(view);
        },

        hideModal: function(){
            this.$el.modal('hide');
            this.$el.removeClass('modal-backdrop');
        },

        cleanModal: function(){
            this.$el.modal('hide');
            this.$el.empty();
        }
	});

});
