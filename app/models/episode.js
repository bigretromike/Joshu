import DS from 'ember-data';

export default DS.Model.extend({
	type: DS.attr(),
	title: DS.attr(),
	summary: DS.attr()
});
