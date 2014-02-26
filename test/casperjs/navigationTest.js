
casper.test.begin('TroubleTicket search retrieves 250 or more results', 3, function suite(test) {
    casper.start('http://localhost:9000/#ticket/list?sourceApplication=cqm', function() {
        test.assertTitle('TroubleTicket', 'homepage title is the one expected');
        this.echo('Title: ' + this.getTitle());
        this.echo('Current url: ' + this.getCurrentUrl());
        this.wait(1000, function() {
            test.assertExists('#submit', 'submit button exist');
            test.assertExists('#keyValue', 'imsi inputfield exist');
            this.sendKeys('#keyValue', '100000000000001');
            this.click('#submit');
        });

    });

    casper.then(function() {
//        test.assertTitle('casperjs - Google Search', 'google title is ok');
//        test.assertUrlMatch(/q=casperjs/, 'search term has been submitted');
//        test.assertEval(function() {
//            return __utils__.findAll('h3.r').length >= 10;
//        }, 'google search for \'casperjs\' retrieves 10 or more results');
    });

    casper.run(function() {
        test.done();
    });
});
