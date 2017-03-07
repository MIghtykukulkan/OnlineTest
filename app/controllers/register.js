import Ember from 'ember';

export default Ember.Controller.extend({
   
  
actions:
{
        taketest: function() {
            this.transitionToRoute('test');
        }
} 

});
