import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
	authMan: Ember.inject.service('session'),
//	authorize: function(jqXHR, requestOptions) {
//        	var accessToken = this.get('authMan.data.authenticated.token');
//		if (this.get('authMan.isAuthenticated') && !Ember.isEmpty(accessToken)) {
//		    jqXHR.setRequestHeader('apikey', accessToken);
//		}
//	}
	authorize(sessionData, block) {
	if (!Ember.isEmpty(sessionData.token)) {
	    block("apikey",sessionData.token);
	    }
	}
});
