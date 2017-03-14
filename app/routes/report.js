import Ember from 'ember';

export default Ember.Route.extend({

    model(){
       
      
       var  data = [{"id":"1","Fname":"Sweta","Java":"20",language:"8","fundament":"4"},
       {"id":"2","Fname":"uma","Java":"20",language:"8","fundament":"4"},
       {"id":"3","Fname":"Rakesh","Java":"20",language:"8","fundament":"4"}
       ];
        return data;
    }

});
