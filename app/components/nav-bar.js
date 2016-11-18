import Ember from 'ember';

export default Ember.Component.extend({
    authManager: Ember.inject.service('session'),
	routing: Ember.inject.service('route'),
	tagName: '',
	
	actions: {
		invalidateSession() {
			console.log("logout invalidateSession");
			this.get('authManager').invalidate();
			let routing = this.get('routing');
			routing.transitionTo('login');
			}
	}
});
