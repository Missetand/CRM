import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');

  this.route('entrepeneur', function() {
    this.route('new');
    this.route('edit', { path: './:entrepeneur_id/edit' });
  }),
    this.route('photographers', function() {
    this.route('new');
    this.route('edit', { path: './:photographers_id/edit' });
  })
});

export default Router;
