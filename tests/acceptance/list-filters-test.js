import { test } from 'qunit';
import moduleForAcceptance from 'joshu/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list filters');

test('should redirecto to filters route', function (assert) {
	visit('/filters');
	andThen(function() {
		assert.equal(currentURL(), '/filters', 'should redirect');
});
});

test('shoud list filters', function (assert) {
	visit('/filter');
	andThen(function() {
		assert.equal(find('.listing').lenght, 2, 'should have 2 items');
});
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
