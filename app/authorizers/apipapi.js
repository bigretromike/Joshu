import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
	session: Ember.inject.service('session'),
//	authorize: function(jqXHR, requestOptions) {
//        	var accessToken = this.get('authMan.data.authenticated.token');
//		if (this.get('authMan.isAuthenticated') && !Ember.isEmpty(accessToken)) {
//		    jqXHR.setRequestHeader('apikey', accessToken);
//		}
//	}
	authorize: function(sessionData, block) {
		if (this.get('session.isAuthenticated') && !Ember.isEmpty(sessionData.token)) {
			block('apikey', sessionData.token);
		//}
		//if (!Ember.isEmpty(sessionData.token)) {
			console.log("authorizers: " + sessionData.token);
		//	block("apikey",sessionData.token);
			console.log(JSON.stringify(block));
		}
		else
		{
			console.log("autorize not not apipapi");
		}
	}
});
