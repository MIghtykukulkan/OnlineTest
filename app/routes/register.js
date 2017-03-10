import Ember from 'ember';

export default Ember.Route.extend({

 model(){
     var fname = this.get('fname');
     this.controllerFor('register').set('fname', null);
     this.controllerFor('register').set('errorFNMessage', null);
      var fname = this.get('lname');
     this.controllerFor('register').set('lname', null);
       this.controllerFor('register').set('errorLNMessage', null);
      var fname = this.get('phone');
     this.controllerFor('register').set('phone', null);
     this.controllerFor('register').set('errorPNMessage', null);
      this.controllerFor('register').set('errorPHMessage', null);
      var fname = this.get('email');
     this.controllerFor('register').set('email', null);
     this.controllerFor('register').set('errorEMMessage', null);
     this.controllerFor('register').set('errorEIMessage', null);
 /* createUser: function() {

    model() {
        var fname = this.get('fname');
        var lname = this.get('lname');
        var phone = this.get('phone');
        var email = this.get('email');
    },

    registerUser: function() {

        $.ajax({
            type: 'POST',
            url: 'http://ec2-54-218-55-72.us-west-2.compute.amazonaws.com:8080/registerUser',
            data: dataString,
            dataType: "json",
            success: function(data) {
                alert("yes")
            }
        });
        
    }
     

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
 }

});