import Ember from 'ember';


export default Ember.Controller.extend({


    myname: "umashankar",


    actions: {
        register: function() {
            this.transitionToRoute('register');
        }
    }
});