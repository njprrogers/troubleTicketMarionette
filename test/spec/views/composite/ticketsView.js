(function() {
    'use strict';

    var root = this;

    root.define([
        'collections/Tickets',
        'views/composite/ticketsView'
        ],
        function( TicketsCollection, TicketsView ) {

            describe('Ticketsview Compositeview', function () {

                it('should be an instance of TicketsView CompositeView', function () {
                    var ticketsView = new TicketsView({
                        collection: new TicketsCollection()
                    });
                    expect( ticketsView ).to.be.an.instanceof( TicketsView );
                });

                it('should have more test written', function(){
                    //TODO implement me
                    expect( true ).to.be.ok;
                });
            });

        });

}).call( this );