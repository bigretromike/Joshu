import DS from 'ember-data';
import Ember from 'ember';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
	host: 'http://127.0.0.1:8111',
	namespace: 'api',
	
	authorizer: 'authorizer:application',
	
	headers: {
		"Content-Type": "application/json", 
    }
});
