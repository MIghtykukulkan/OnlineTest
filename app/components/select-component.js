import Ember from 'ember';

export default Ember.Component.extend({

    actions: {
        change: function() {
            let selectedIndex = this.$('select')[0].selectedIndex;
            console.log(selectedIndex);
            selectedIndex--;
            let listitem = this.get('listitem');
            var selecteditem = listitem[selectedIndex];
            this.set('selecteditem', selecteditem);
        }
    }
});