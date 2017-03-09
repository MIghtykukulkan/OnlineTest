import Ember from 'ember';

export default Ember.Route.extend({


 /* createUser: function() {
 var fname = this.get('controller').get('fname');
 var lname = this.get('controller').get('lname');
 var phone = this.get('controller').get('phone');
 var email = this.get('controller').get('email');

 
 App.Adapter.ajax('/registerUser', {
   type: 'POST',
   data: {fname,lname,phone,email},
   context: this}).then(function(data) {
     var user = App.User.createUser(data);
     this.modelFor('users').pushObject(user);
     this.get('controller').set('newName', '');
     this.transitionTo('artist.songs', artist);
 }, function(reason) {
   alert('Failed to save users');
 });
}
}  
*/
});

