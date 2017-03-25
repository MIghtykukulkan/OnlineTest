import Ember from 'ember';

export default Ember.Component.extend({
  timer: null,

    seconds: 60,
    minutes: 1,

    watchmin: function() {
        this.set('dispmin', this.get('minutes') )
    }.observes('minutes'),


    didInsertElement: function() {
        console.log('dispmin', this.get('dispmin'));
        this.set('dispmin', this.get('minutes') - 1);
        this.updateTimeProperty();
    },

    updateTimeProperty: function() {

        Ember.run.later(this, function() {
            var seconds = this.get('seconds')
            var minutes = this.get('minutes')
            seconds--;
            //console.log('seconds', seconds);
            if (seconds === 0) {
                    minutes--;
                    this.set('seconds', 60);
                    seconds = 60;
            }
            this.set('seconds', seconds)
            this.set('minutes', minutes)


            if (minutes === 0) {
                this.set('seconds', 0);
            this.set('minutes', 0);
                console.log('Dispmin', this.get('dispmin'));
                this.sendAction();
            } else {
                this.updateTimeProperty();
            }

        }, 1000);
    },


});