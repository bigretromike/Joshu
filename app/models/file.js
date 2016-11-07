import DS from 'ember-data';

export default DS.Model.extend({
	filename: DS.attr(),
	url: DS.attr(),
	art: DS.attr()
});
