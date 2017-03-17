import Ember from 'ember';

export default Ember.Controller.extend({
    testlist: ['Fundamental', 'JAVA', 'Language',],
    actions: {
         log_out1 : function(){
            this.transitionToRoute('home');
         },

        questionlist: function() {
            var chosen = this.get('selectedtest');
        console.log(chosen);
            if (chosen === null || chosen === undefined) {
                this.set('errorMessage', "Please Select Test");
                return false;
            } else {
                this.set('errorMessage', "");
                this.set('chosenTest', chosen);
                this.transitionToRoute('programming');
            }
        }
    }


});