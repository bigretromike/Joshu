import Ember from 'ember';

export default Ember.Component.extend({
    authManager: Ember.inject.service('session'),
	tagName: '',
	
	actions: {
		invalidateSession() {
			console.log("logout invalidateSession");
			this.get('authManager').invalidate();
			}
	}
});
