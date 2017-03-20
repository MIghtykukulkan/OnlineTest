import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('testpage');
  this.route('resultpage');
  this.route('adminhome');
  this.route('faq');
  this.route('register');
  this.route('report');
  this.route('challenge', function() {
    this.route('ch001');
    this.route('ch002');
     this.route('ch003');
  });

  this.route('challenge\\ch003');
  this.route('java');
  this.route('programming');
  this.route('test');
  this.route('addquestion');
  this.route('login');
  this.route('agreement');
});

export default Router;