import Ember from 'ember';



export default Ember.Controller.extend({
    
    testlist: ['Programming Fundamentals', 'JAVA','Language'],
     actions: {
         questionlist: function() {
        var chosen = this.get('selectedtest');
          //console.log(chosen);
        if (chosen === null || chosen === undefined) {
            this.set('errorMessage', "Please Select Test");
            return false;
        } else {
              this.set('errorMessage', "");
              this.transitionToRoute('programming');
      
        }
         }
     }


});
