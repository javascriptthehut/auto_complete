//jasmine

(function () {
	'use strict';

	describe('urlBuilder.js', function () {

		it('does one thing',function(){

		});

		it('does another thing',function(){

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
			/*
			   function handleResult(input) {
			   var array = input.split(',');
			   var dropdown = document.getElementsByClassName('dropdown')[0];
			   removeChildren();
			   array.forEach(function(text){
			   var p = document.createElement('p');
			   p.className = 'option';
			   var text = document.createTextNode(text);
			   p.appendChild(text);
			   dropdown.appendChild(p);
			   */
			handleResult('one,two,three,four')
		});

	});

	it('does another thing',function(){

	});
})
})();

