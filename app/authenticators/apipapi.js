import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
export default Base.extend({
    tokenEndpoint: 'http://10.1.1.100:8111/api/auth',
    restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
		    if (!Ember.isEmpty(data.token)) {
                resolve(data);
		} else {
                reject();
		}
	});
    },

authenticate: function(options) {
return new Ember.RSVP.Promise((resolve, reject) => {
		Ember.$.ajax({
		    url: this.tokenEndpoint,
		    type: 'POST',
		    data: JSON.stringify({
                	user: options.identification,
                	pass: options.password,
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
        return Ember.RSVP.resolve();
	    }
		});
