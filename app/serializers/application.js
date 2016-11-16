import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	modelNameFromPayloadKey(key) {
	// if payload model name is 'series', use 'serie'
		if (key === 'series') { 
			return 'serie';
		}
		// otherwise do the default thing
		return this._super(...arguments);
	}
});
