import Ember from 'ember';


export default Ember.Controller.extend({
    isShowingModal: false,
    actions: {
        toggleModal: function() {
            this.toggleProperty('isShowingModal');
            console.log("toggled");
        },
        toggleModalOk:function(){
            this.transitionToRoute('home');
        }
    }
});