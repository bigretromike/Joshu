import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
		findAll: function(store, type) {
				        var url = `${this.host}/${this.namespace}/ep?level=1&limit=10`;
						console.log(`URL = ${url}`);
				        return this.ajax(url, 'GET');
		},
});
