import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		var filters = this.store.findAll('filter');
		console.log(filters);
		return filters;
	}
});
