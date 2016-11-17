import Mirage from 'ember-cli-mirage';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  // this.namespace = 'api';

  this.get('/api/series');
  this.get('/api/series/:id');

  this.get('/api/filters');
  this.get('/api/filters/:id');
  this.get('http://127.0.0.1:8111/api/filter?level=1', ({ filters }) => {
	return filters.all();
  });

  this.get('/api/episodes');
  this.get('/api/episodes/:id');

  this.get('/api/files');
  this.get('/api/files/:id');
  
  this.get('/api/users');
  this.get('http://127.0.0.1:8111/api/users', ({ users }) => {
	 console.log("mirage : auth 128");
	 return { user: { id: 1, email: 'api-test-key'}};
  });
  this.post('/api/auth', function(request) {
	 console.log("mirage : auth");
	 return new Mirage.Response(200, { access_token: 'api-test-key'});
  });
  
}
