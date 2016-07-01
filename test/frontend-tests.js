//jasmine

(function () {
	'use strict';

	describe('urlBuilder.js', function () {

		beforeEach(function() {
			jasmine.Ajax.install();
		});

		afterEach(function() {
			jasmine.Ajax.uninstall();
		});

		it('builds the url correctly',function(){
			expect(buildURL('cat')).toBe('https://glosbe.com/gapi/translate?from=eng&dest=es&format=json&phrase=cat&pretty=true')
		});

		it('sends xhr request',function(){
			spyOn(window,'responseHandler')
			makeCall('test/url');

			expect(jasmine.Ajax.requests.mostRecent().url).toBe('test/url');
			expect(window.responseHandler).not.toHaveBeenCalled();

			jasmine.Ajax.requests.mostRecent().respondWith({
				status: 200,
				contentType: 'text/plain',
				responseText: 'awesome response',
			});

			expect(window.responseHandler).toHaveBeenCalled();
		})
	})
})();

