//jasmine

(function () {
	'use strict';

	describe('urlBuilder.js', function () {

		it('builds the url correctly',function(){
			expect(buildURL('cat')).toBe('https://glosbe.com/gapi/translate?from=eng&dest=es&format=json&phrase=cat&pretty=true')
		});

	});
	describe('interface.js', function () {

		beforeEach(function() {
			jasmine.Ajax.install();
		});

		afterEach(function() {
			jasmine.Ajax.uninstall();
		});

		it('sends xhr request',function(){
		});

	});

})();

