import Ember from 'ember';

export default Ember.Component.extend({
	model: function() {
		return {
			cookiepassword: "test",
			cookieaddress: this.cookie.getCookie('ip'),
			cookieuser: this.cookie.getCookie('user')
		};
	},

	actions: {
		cookieaddresss() { return this.cookie.getCookie('ip') },
		saveaddress() {
			const { ipaddress, user, password } = this.getProperties('ipaddress', 'user', 'password');
			this.cookie.setCookie('ip', ipaddress, { expires: 365, path: '/settings.json' }).then(() => {
				this.cookie.setCookie('user', user);
				var address = this.cookie.getCookie('ip');
				if (!address) {
					console.log("ip address missing");
				}
				else
				{
					console.log("address there!");
					console.log(address);
					console.log(this.cookie.getCookie('user'));
				}
			}, (err) => {
				alert('Error saving settings: ' + err.responseText);
			});
		}
	}
});