import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('serie', function() {
    this.route('show');
  });
  this.route('episode', function() {
    this.route('show');
  });
  this.route('file', function() {
    this.route('show');
  });
  this.route('filter', function() {
    this.route('show');
  });
});

export default Router;
