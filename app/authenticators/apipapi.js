import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
    tokenEndpoint: 'http://127.0.0.1:8111/api/auth',
    
	restore(data) {
		return new Ember.RSVP.Promise((resolve, reject) => {
		    if (!Ember.isEmpty(data.token)) {
                resolve(data);
			} else {
                reject();
			}
		});
    },

authenticate(username, password) {
	return new Ember.RSVP.Promise((resolve, reject) => {
		console.log("user:" + username);
		console.log("pass:" + password);
		Ember.$.ajax({
		    url: this.tokenEndpoint,
		    type: 'POST',
		    data: JSON.stringify({
                	user: username,
                	pass: password,
					device: "joshu"
		    }),
			contentType: 'application/json;charset=utf-8',
            dataType: 'json'
		}).then(function(response) {
			Ember.run(function() {
				console.log("apikey:" + response.apikey);
				resolve({
                    token: response.apikey,
					apikey: response.apikey
				});
			});
		}, function(xhr, status, error) {
            	    var response = xhr.responseText;
		    Ember.run(function() {
                	reject(response);
		    });
		});
});
},

invalidate: function() {
        console.log('invalidate...');
		alert("ivalidating in proress");
        return Ember.RSVP.resolve();
	    }
		});
