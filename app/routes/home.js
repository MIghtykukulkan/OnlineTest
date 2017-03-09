import Ember from 'ember';

export default Ember.Route.extend({
    //below example illustrates how a mltiple ajax calls are made from model,
    //basicall a model can use RSVP.hash() method which will return all the promise object if alla re success as a map
    //which can be set on controller using setupController method. supercool

    model() {
        return Ember.RSVP.hash({
            //posts: Ember.$.getJSON('https://api.github.com/users'),
            //comments: Ember.$.getJSON('https://api.github.com/repositories')
        });
    },

    setupController(controller, model) {
        var posts = model.posts;
        var comments = model.comments;

        controller.set('content', posts);
        controller.set('comments', comments);
    }

});