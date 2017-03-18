import Ember from 'ember';

export default Ember.Route.extend({

    model() {
          var message = this.controllerFor('home').get('token');
           console.log('message');
           this.toggleProperty('isShowingModal');
            this.controllerFor('test').set('token', message);
             
 this.controllerFor('test').set('loading_image_visibility', 'show');

            var token = sessionStorage.getItem('token');
            console.log("Token Fetched: " + sessionStorage.getItem('token'));
            if(token === undefined || token === null)
            {
                this.transtionTo('home');
            }
    },
    
afterModel : function() {
  this.toggleProperty('isShowingModal');
 this.controllerFor('test').set('loading_image_visibility', 'hide');
}


});
