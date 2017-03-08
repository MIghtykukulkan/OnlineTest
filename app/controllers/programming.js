import Ember from 'ember';


export default Ember.Controller.extend(  {
 popupContentBinding: 'content.popup',
 isLoading:false,
    buttonText:"Submit",

    actions: {
            getScore: function() {
            this.transitionToRoute('programing');
        }
    }
});