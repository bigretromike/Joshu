import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend(
{
	normalizeFindAllResponse(store, type, payload){
		var data = [];
		payload.forEach(
				function(item, index) 
				{
					var ob = {};
					Ember.set(ob, 'id', item.id);
					Ember.set(ob, 'type', 'episode');
					Ember.set(ob, 'attributes', item);
					data[index]=ob;
				}				
		);
		return {
			data: data
		};
	}
});
