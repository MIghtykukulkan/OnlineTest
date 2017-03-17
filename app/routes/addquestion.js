import Ember from 'ember';
import CONFIG from 'online-test/config/environment';
export default Ember.Route.extend({
     model() {
        console.log(CONFIG);
        this.controllerFor('addquestion').set('question', null);
        this.controllerFor('addquestion').set('option1', null);
        this.controllerFor('addquestion').set('option2', null);
        this.controllerFor('addquestion').set('option3', null);
        this.controllerFor('addquestion').set('option4', null);
        this.controllerFor('addquestion').set('answer', null);
    }
});
