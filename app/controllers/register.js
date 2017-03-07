import Ember from 'ember';

export default Ember.Controller.extend({
   
  actions:{
    
           taketest: function() {
           this.transitionToRoute('test');
        },

        registerUser: function(user) {      
      $.ajax({
        type: "POST",
        url: "http://ec2-54-218-55-72.us-west-2.compute.amazonaws.com:8080/registerUser",
        data: { fname: 'fname', lname: 'lname',phone:'phone',email:'email' }
      })
      this.transitionTo('test');

    }

  }
});