import DS from 'ember-data';

export default DS.Model.extend(
{
		title: DS.attr(),
		titles: DS.attr(),
		art: DS.attr(),
		type: DS.attr(),
		summary: DS.attr(),
		year: DS.attr(),
		air: DS.attr(),
		size: DS.attr(),
		viewed: DS.attr(),
		rating: DS.attr(),
		roles: DS.attr(),
		tags: DS.attr(),
		eps: DS.attr()
});
