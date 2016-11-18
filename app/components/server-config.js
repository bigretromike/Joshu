import Ember from 'ember';

export default Ember.Component.extend({
		store: Ember.inject.service(),
	
		actions: {
		saveAddress() {
				var ipaddress = this.get('ipaddress');
				var user = this.get('user');
				var password = this.get('password');
				// later validation	
				this.get('store').adapterFor('application').set('host', ipaddress);
				this.cookie.setCookie('ip', ipaddress, { expires: 365, path: '/settings.json' }).then(() => {
						this.cookie.setCookie('user', user);
						this.cookie.setCookie('password', password);
						console.log("settings saved");
				}, (err) => {
					console.log("error");
					alert('Error saving settings: ' + err.responseText);
				}
			);
		}
	}
});
