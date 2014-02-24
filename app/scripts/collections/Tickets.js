define([
    'backbone',
    'models/Ticket'
],
function( Backbone, Ticket ) {
    'use strict';

    /* Return a collection class definition */
    return Backbone.Collection.extend({
        initialize: function() {
            console.log("initialize a Tickets collection");
            this.sortAttribute = 'id';
            this.sortDirection = 1;
        },

        comparator: function(itemA, itemB) {
            var a = itemA.get(this.sortAttribute),
                b = itemB.get(this.sortAttribute);

            if (a === b){
                return 0;
            }

            if (this.sortDirection === 1) {
                return a > b ? 1 : -1;
            } else {
                return a < b ? 1 : -1;
            }
        },
        sortByField: function(key) {
            this.sortAttribute = key;
            this.sort();
        },

        model: Ticket,

        url : 'http://localhost:9000/troubleticketapi/api/v1/tickets'

    });
});
