import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route("about");
  this.resource('messages', function() {
    this.route('new');
  });
  this.resource('posts', function() {
    this.route('new');
  });
  this.route("contact");
});

export
default Router;