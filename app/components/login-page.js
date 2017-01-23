import Ember from 'ember';

export default Ember.Component.extend({
	authenticator: 'authenticator:apipapi',
	session: Ember.inject.service('session'),
	actions: {
		authenticate: function() {
			let { username, password } = this.getProperties('username', 'password');
			console.log("username = " + username);
			console.log("password = " + password);
			if (typeof password === "undefined") {
				password = '';
			}
			this.get('session').authenticate('authenticator:apipapi', username, password).catch((message) => {
			    this.set('errorMessage', message);
			});
		}
	}
});