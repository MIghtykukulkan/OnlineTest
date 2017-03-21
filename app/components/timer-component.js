import Ember from 'ember';

export default Ember.Component.extend({


    seconds: 60,
    minutes: 1,

    watchmin: function() {
        this.set('dispmin', this.get('minutes') - 1)
    }.observes('minutes'),


    didInsertElement: function() {
        this.set('dispmin', this.get('minutes') - 1)
        this.updateTimeProperty();
    },

    updateTimeProperty: function() {

        Ember.run.later(this, function() {
            var seconds = this.get('seconds')
            var minutes = this.get('minutes')
            seconds--;
            console.log('seconds');
            if (seconds == 0) {
                minutes--;
                seconds = 60;
            }
            this.set('seconds', seconds)
            this.set('minutes', minutes)


            if (minutes == 0) {

                this.sendAction();
            } else {
                this.updateTimeProperty();
            }

        }, 1000);
    },

});