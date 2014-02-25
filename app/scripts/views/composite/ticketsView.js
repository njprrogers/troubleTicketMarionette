define([
	'backbone',
	'views/item/ticketView',
    'hbs!tmpl/ticket',
	'hbs!tmpl/composite/ticketsView_tmpl'
],
function( Backbone, Ticketview, ticketTmpl, ticketsviewTmpl  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

        initialize: function() {
            console.log("initialize a Ticketsview CompositeView");
            this.collection.on('reset sort', this.render, this);
        },

        itemView: Backbone.Marionette.ItemView.extend({
            tagName: 'tr',
            template: ticketTmpl,

            events: {
//                'click .table-action'         : 'edit',
                'click td'                    : 'select'
            },
            edit : function(e, params, params2) {
                e.preventDefault();
//                TT.App.router.navigate('ticket/edit/'+this.model.get('id')+'?sourceApplication=cqm', {trigger: true, replace:true});
            },
            select : function(e) {
                e.preventDefault();
                if (e.target.className === 'table-action') {
                    TT.App.router.navigate('ticket/edit/'+this.model.get('id')+'?sourceApplication=cqm', {trigger: true, replace:false});
                } else {
                    TT.App.router.navigate('ticket/view/'+this.model.get('id')+'?sourceApplication=cqm', {trigger: true, replace:false});
                }
            },
            view : function(e) {
                e.preventDefault();
            }
        }),

        template: ticketsviewTmpl,

        /* ui selector cache */
        ui: {},

        /* where are we appending the items views */
        itemViewContainer: "tbody",

        /* Ui events hash */
        events: {
            'click thead'         : 'headerClick'
        },

        render: function() {
            console.log('render');
            //call super class render
            Backbone.Marionette.CompositeView.prototype.render.call(this);

            // Adjust the indicators.  Reset everything to hide the indicator
            this.$el.find('th').attr('class', 'sorting');
            this.$el.find('th#' + this.collection.sortAttribute).addClass('sorting_asc');
            // Now show the correct icon on the correct column
            if (this.collection.sortDirection === 1) {
                this.$el.find('th#' + this.collection.sortAttribute).removeClass('sorting').addClass('sorting_asc');
            } else {
                this.$el.find('th#' + this.collection.sortAttribute).removeClass('sorting').addClass('sorting_desc');
            }
            return this;
        },

        headerClick: function( e ) {
            console.log('haderClick');
            var $el = $(e.currentTarget);
            var ns = e.target.id;
            var cs = this.collection.sortAttribute;

            // Toggle sort if the current column is sorted
            if (ns === cs) {
                this.collection.sortDirection *= -1;
            } else {
                this.collection.sortDirection = 1;
            }

            // Now sort the collection
            this.collection.sortByField(ns);
        }
    });

});
