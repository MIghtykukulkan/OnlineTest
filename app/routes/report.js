import Ember from 'ember';
import CONFIG from 'online-test/config/environment';
export default Ember.Route.extend({

    model(){
       
     /*var data = [{"uid":uid,
                  "fname":fname, 
                  "java":javascore,
                  "language":languagescore,
                  "fundamental":fundamentalscore}]*/
                  

      /* var  xyz = [{"uid":"1","fname":"Sweta","java":"20",language:"8","fundamental":"4"},
       {"uid":"2","fname":"uma","java":"20",language:"8","fundamental":"4"},
       {"uid":"3","fname":"Rakesh","java":"20",language:"8","fundamental":"4"}
       ];*/
        //return xyz;
         // message.model;
         
   return $.ajax({
                    url: CONFIG.GOURL+'/mockadmin',
                    type: 'GET',
                    accepts: 'application/json',
                    success: function(xyz) {
                        //alert("success"+JSON.stringify(data))
                 
                       console.log(JSON.stringify(xyz));
    console.log('DEBUG: GET Enquiries OK');
     return  xyz ;
                    },
                    error: function(data) {
                        console.log(data)
                        //alert(err)
                        console.log('DEBUG: GET Enquiries Failed');
                    }
                });
               }
});
