import Ember from 'ember';

export default Ember.Controller.extend({
    //session: Ember.inject.service(),

    testlist: ['Fundamental', 'JAVA', 'Language',],
    actions: {
        /* authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:token';

      this.get('session').authenticate(authenticator, credentials);
    },*/
    
    
         log_out1 : function(){
              sessionStorage.setItem('token', null);
             // delete localStorage['Token']
            this.transitionToRoute('home');
            
         },
        /* log_out1 : function() {
    
            console.log(CONFIG.GOURL);
            this.toggleProperty('isShowingModal');
            this.set('loading_image_visibility', "show");
            var mycontroller = this;
            var uid;
            return $.ajax({
            url: CONFIG.GOURL + '/mocklogout',
            type: 'POST',
            accepts: 'application/json',
            authenticate: 'token',
            success: function(response) {
                   console.log(JSON.stringify(response));
                   uid = response.message;
                   mycontroller.set('uid',uid);
                   
                   mycontroller.transitionToRoute('home');              
                  
            },
            error: function(result) {
                   console.log('DEBUG: GET Enquiries Failed');
            }
           });
        }*/

       
        questionlist: function() {
            var chosen = this.get('selectedtest');
        console.log(chosen);

           this.toggleProperty('isShowingModal');
            this.set('loading_image_visibility', "show");

            var mycontroller = this;
            if (chosen === null || chosen === undefined) {
                this.set('errorMessage', "Please Select Test");
                return false;
            } else {
                this.set('errorMessage', "");
                this.set('chosenTest', chosen);
                this.transitionToRoute('programming');
            }
        },
             success: function() {
                  
                   mycontroller.toggleProperty('isShowingModal');
                   mycontroller.set('loading_image_visibility', "hide");
                    mycontroller.transitionToRoute('programming');             
                  
            },
        }
    


});