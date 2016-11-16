import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://127.0.0.1:8111',
	namespace: 'api',
	
	headers: {
		"Content-Type": "application/json", 
		"apikey": "11b071ee-b0c3-43fd-bbf6-5d1ec500e57d"
	}
});
