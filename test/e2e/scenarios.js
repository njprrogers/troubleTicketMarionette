'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {

  it('navigate to ticket search OK', function() {

      debugger;
      browser().navigateTo('index.html#ticket/list?sourceApplication=cqm');
//      expect(browser().location().url()).toBe('/phones');

  });

    it('navigate to ticket view OK', function() {

        debugger;
        browser().navigateTo('index.html#ticket/view/17351?sourceApplication=cqm');
//      expect(browser().location().url()).toBe('/phones');

    });

    it('navigate to ticket edit OK', function() {

        debugger;
        browser().navigateTo('index.html#ticket/edit/17351?sourceApplication=cqm');
//      expect(browser().location().url()).toBe('/phones');

    });

    it('navigate to ticket add OK', function() {

        debugger;
        browser().navigateTo('index.html#ticket/open?sourceApplication=cqm');
//      expect(browser().location().url()).toBe('/phones');

    });

});
