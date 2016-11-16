import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
		findAll: function(store, type) {
				        var url = `${this.host}/${this.namespace}/${type.modelName}?level=1&limit=10`;
						console.log(`URL = ${url}`);
				        return this.ajax(url, 'GET');
		},
});
