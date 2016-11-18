import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
	host: 'http://127.0.0.1:8111',
//	host: '',
	namespace: 'api',
	
	authorizer: 'authorizer:application',
//	authorizer: 'authorizer:token',
	
	headers: {
	    "Content-Type": "application/json"
	} 
});
