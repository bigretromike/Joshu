//import ApplicationSerializer from './application';

//export default ApplicationSerializer.extend({
import DS from 'ember-data';

export default DS.RESTSerializer.extend(
{
		normalizeFindAllResponse(store, type, payload) 
		{
				//console.log("payload");
				//console.log(payload);
				var data = [];
				payload.forEach(
					function(item, index, enumerable) 
					{
						var ob = {};
						Ember.set(ob, 'id', item.id);
						Ember.set(ob, 'type', 'filter');
						Ember.set(ob, 'attributes', item);
						data[index]=ob;
						//console.log(data[index]);
					}
				);
				//console.log(data);	
				return {
						data: data
				};
		}
});
