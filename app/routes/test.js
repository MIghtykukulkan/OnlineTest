import Ember from 'ember';

export default Ember.Route.extend({
    model() {
          var message = this.controllerFor('home').get('token');
            alert(message);
            this.controllerFor('test').set('token', message); 
            var token = sessionStorage.getItem('token');
            console.log("Token Fetched: " + sessionStorage.getItem('token'));
            if(token === undefined || token === null)
            {
                this.transtionTo('home');
            }
    }
  
});
