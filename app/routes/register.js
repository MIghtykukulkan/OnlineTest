import Ember from 'ember';
import CONFIG from 'online-test/config/environment';

export default Ember.Route.extend({
    model() {
       // console.log(CONFIG);
        this.controllerFor('register').set('loading_image_visibility', 'hide');
        this.controllerFor('register').set('firstname', null);
        this.controllerFor('register').set('lastname', null);
        this.controllerFor('register').set('phonenumber', null);
        this.controllerFor('register').set('email', null);
    }
});