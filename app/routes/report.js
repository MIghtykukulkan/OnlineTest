import Ember from 'ember';

export default Ember.Route.extend({

    model(){
       
      //var data = [{"uid":uid,"fname":fname,"java":javascore,"language":languagescore,"fundamental":fundamentalscore}];

       var  data = [{"uid":"1","fname":"Sweta","java":"20",language:"8","fundamental":"4"},
       {"uid":"2","fname":"uma","java":"20",language:"8","fundamental":"4"},
       {"uid":"3","fname":"Rakesh","java":"20",language:"8","fundamental":"4"}
       ];
        return data;
    }

    

});
