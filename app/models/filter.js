import DS from 'ember-data';

export default DS.Model.extend({
		name: DS.attr(),
		art: DS.attr(),
		url: DS.attr(),
		size: DS.attr(),
		viewed: DS.attr(),
		type: DS.attr()
});
