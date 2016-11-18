import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
		activate: function()                                                                                    
{		
console.log("active");
var ipaddress2 = this.get('store').adapterFor('application').get('host');
console.log(ipaddress2);
		//this.componentFor('server-config').set('ipaddress', '6.6.6.6');
//         user = this.get('store').adapterFor('application').get('host');  
//      password: null,                                                  	
}
});
