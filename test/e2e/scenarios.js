'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Trouble ticket App', function() {

  it('navigate to ticket search OK', function() {

      debugger;
      browser().navigateTo('/index.html#ticket/list?sourceApplication=cqm');
      expect(browser().window().href()).toBe('http://localhost:8082/index.html#ticket/list?sourceApplication=cqm');
//      input('#imsi').enter('100000000000001');
//      element('#submit').click();

  });

    it('navigate to ticket view OK', function() {

        debugger;
        browser().navigateTo('/index.html#ticket/view/17351?sourceApplication=cqm');
        expect(browser().window().href()).toBe('http://localhost:8082/index.html#ticket/view/17351?sourceApplication=cqm');

    });

    it('navigate to ticket edit OK', function() {

        debugger;
        browser().navigateTo('/#ticket/edit/17351?sourceApplication=cqm');
        expect(browser().window().href()).toBe('http://localhost:8082/#ticket/edit/17351?sourceApplication=cqm');

    });

    it('navigate to ticket add OK', function() {

        debugger;
        browser().navigateTo('/#ticket/open?sourceApplication=cqm');
        expect(browser().window().href()).toBe('http://localhost:8082/#ticket/open?sourceApplication=cqm');

    });

    it('navigate to ticket add from root path OK', function() {

        debugger;
        browser().navigateTo('/');
        expect(browser().window().href()).toBe('http://localhost:8082/');

    });

});
