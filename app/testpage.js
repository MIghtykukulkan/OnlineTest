import Ember from 'ember';

export default Ember.Controller.extend({

home: Ember.inject.controller(),
list : Ember.computed.alias(home.list)

});
