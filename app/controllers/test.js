import Ember from 'ember';



export default Ember.Controller.extend({
    
    testlist: ['Programming Fundamentals', 'JAVA','Language'],
    

actions:
{
 
      
        questionlist: function() {
            this.transitionToRoute('programming')
        }

   } 

});
