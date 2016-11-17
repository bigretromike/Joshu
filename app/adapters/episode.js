import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
	findAll: function() {
		var url = `${this.host}/${this.namespace}/ep?level=1&limit=10`;
		console.log(`URL = ${url}`);
		return this.ajax(url, 'GET');
		},
});
