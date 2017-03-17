import Ember from 'ember';

export default Ember.Route.extend({

   


    model: function() {
          var message = this.controllerFor('home').get('token');
           console.log('message');
            this.controllerFor('test').set('token', message); 
             this.controllerFor('test').set('loading_image_visibility', 'hide');
    }
    /* client does not have a valid session token */
    /* client has a persisted token */
      // use persisted token to get a valid session token, return a promise
    
    
      // client does not have any valid tokens
      // abort transition, redirect to login page
    
  

});
