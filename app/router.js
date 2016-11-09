import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('serie', function() {
    this.route('show', { path: '/:serie_id' });
  });
  this.route('episode', function() {
    this.route('show', { path: '/:episode_id' });
  });
  this.route('file', function() {
    this.route('show', { path: '/:file_id' });
  });
  this.route('filter', function() {
    this.route('show', { path: '/:filter_id' });
  });
});

export default Router;
