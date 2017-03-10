import Ember from 'ember';

export default Ember.Route.extend({


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
});