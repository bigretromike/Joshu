import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
	host: 'http://127.0.0.1:8111',
	namespace: 'api',
	headers: {
	    "Content-Type": "application/json",
	    "Accept": "application/json"
	},
	authorizer: 'authorizer:apipapi'
});
