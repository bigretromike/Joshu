import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
	host: 'http://10.1.1.100:8111',
	namespace: 'api',
	authorizer: 'authorizer:apipapi',
	headers: {
	    "Content-Type": "application/json",
	    "Accept": "application/json"
	}
	// authManager: Ember.inject.service()
});
