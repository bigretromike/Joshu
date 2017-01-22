import Ember from 'ember';

export default Ember.Component.extend({
	authenticator: 'authenticator:apipapi',
	session: Ember.inject.service('session'),
	actions: {
		authenticate: function() {
			var credentials = this.getProperties('identification', 'password');
			this.get('session').authenticate('authenticator:apipapi',credentials).catch((message) => {
			    this.set('errorMessage', message);
			});
		}
	}
});