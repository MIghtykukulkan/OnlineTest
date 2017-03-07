import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        taketest: function() {
          var firstName = this.get('fname');
          console.log("FirstName: " + firstName);
          if (firstName === undefined || firstName === null) {
              this.set('errorMessage', "Please enter First Name");
              return false;
          } else {
              this.set('errorMessage', "");
              this.transitionToRoute('test');
          }
        }
    },
});