import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
   this.route('login');
  this.route('users');
  this.route('categories');
  this.route('posts', function() {
    this.route('post', { path: ':post_id' });
   
  }); 
});
