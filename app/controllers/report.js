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
    "propertyName": "lname",
    "title": "Lname"
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
  
],

/*actions: {

  reportCard : function() {

           let {
                 uid,
                fname,
                lname,
                java,
                fundamental,
                language
            } = this.getProperties('uid','fname', 'lname', 'java', 'fundamental','language');

      

           var dataStringq = [{"uid":uid,
                  "fname":fname, 
                  "lname":lname,
                  "java":java,
                  "fundamental":fundamental,
                  "language":language,
                  }]

      
           
   /*return $.ajax({
                    url: CONFIG.GOURL+'/mockadmin',
                    type: 'GET',
                    accepts: 'application/json',
                    data: JSON.stringify(dataStringq),
                    success: function(dataStringq) {
                        //alert("success"+JSON.stringify(data))
                        console.log(JSON.stringify(dataStringq))                     
                        return dataStringq,
                        console.log('DEBUG: GET Enquiries OK');
                          
                    },
                    error: function(err) {
                        console.log(dataStringq)
                        alert(err)
                        console.log('DEBUG: GET Enquiries Failed');
                    }
                });
  }    
            
}*/

});