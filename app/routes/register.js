import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        this.controllerFor('register').set('loading_image_visibility', 'hide');
        this.controllerFor('register').set('firstname', null);
        this.controllerFor('register').set('lastname', null);
        this.controllerFor('register').set('phonenumber', null);
        this.controllerFor('register').set('email', null);
    }
});