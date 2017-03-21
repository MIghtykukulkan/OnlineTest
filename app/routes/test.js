import Ember from 'ember';

export default Ember.Route.extend({

    model() {
         this.controllerFor('test').set('loading_image_visibility', 'hide');
       
           var message = this.controllerFor('home').get('token');
           console.log('message');
           this.toggleProperty('isShowingModal');
            this.controllerFor('test').set('token', message);

             var token = sessionStorage.getItem('token');
            console.log("Token Fetched: " + sessionStorage.getItem('token'));
            
            if(token === undefined || token === null)
            {
                this.transitionTo('home');
            }
            
    },
    
/*afterModel : function() {
  this.toggleProperty('isShowingModal');
 this.controllerFor('test').set('loading_image_visibility', 'hide');
}*/


});
