import Ember from 'ember';

export default Ember.Controller.extend({
  
columns: [
  {
    "propertyName": "uid",
    "title": "Uid"
  },
  {
    "propertyName": "fname",
    "title": "Fname"
  },
  {
    "propertyName": "java",
    "title": "Java"
  },
  {
    "propertyName": "fundamental",
    "title": "Fundamental"
  },
  {
    "propertyName": "language",
    "title": "Language"
  },
  
]
 
/*actions: {

  reportCard : function() {
    var data;
   return $.ajax({
                    url: CONFIG.GOURL+'/report',
                    type: 'GET',
                    accepts: 'application/json',
                    success: function(data) {
                        //alert("success"+JSON.stringify(data))
                        console.log(JSON.stringify(data))                     
                        return data,
                        
                        console.log('DEBUG: GET Enquiries OK');
                    },
                    error: function(err) {
                        console.log(data)
                        alert(err)
                        console.log('DEBUG: GET Enquiries Failed');
                    }
                });
               
            }
            }); */


});