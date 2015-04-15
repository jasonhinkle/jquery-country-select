/*
	QUnit Reference: http://api.qunitjs.com/

	Test methods:
		module(name, {[setup][ ,teardown]})
		test(name, callback)
		expect(numberOfAssertions)
		stop(increment)
		start(decrement)
	Test assertions:
		ok(value, [message])
		equal(actual, expected, [message])
		notEqual(actual, expected, [message])
		deepEqual(actual, expected, [message])
		notDeepEqual(actual, expected, [message])
		strictEqual(actual, expected, [message])
		notStrictEqual(actual, expected, [message])
		throws(block, [expected], [message])
*/
(function($) {

	module('jQuery#country_select', {
		// This will run before each test in this module.
		setup: function() {
			// get the country drop-down and ensure that it has no values
			this.elem = $('#country');
			this.elem.find('option')
				.remove()
				.end();
		}
	});

	test('Verify values are populated', function() {
		expect(1);
		
		this.elem.countrySelect();
		var numOptions = $('#country option').size(); 
		notStrictEqual(numOptions, 0, 'The select input has been populated');
	});
	
	test('Verify correct value is selected', function() {
		expect(1);
		
		this.elem.countrySelect();
		equal(this.elem.val(), 'US', 'The selected value is US');
	});

}(jQuery));
