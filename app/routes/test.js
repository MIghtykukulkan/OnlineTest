import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
  if (/* client does not have a valid session token */) {
    if (/* client has a persisted token */) {
      // use persisted token to get a valid session token, return a promise
    }
    else {
      // client does not have any valid tokens
      // abort transition, redirect to login page
    }
  }
    },

});
