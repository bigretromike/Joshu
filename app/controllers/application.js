import Ember from 'ember';

export default Ember.Controller.extend({
	authManager: Ember.inject.service('session'),

	actions: {
		invalidateSession() {
      this.get('authManager').invalidate();
    }
  }
});