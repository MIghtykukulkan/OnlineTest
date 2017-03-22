import Ember from 'ember';
import CONFIG from 'online-test/config/environment';

export default Ember.Controller.extend({
    isShowingModal: false,
    //session: Ember.inject.service(),

    testlist: ['Fundamental', 'JAVA', 'Language', ],
    actions: {

        /*log_out1 : function(){
             sessionStorage.setItem('token', null);
           this.transitionToRoute('home');
           
        },*/
        log_out1: function() {

            console.log(CONFIG.GOURL);
            this.toggleProperty('isShowingModal');
            this.set('loading_image_visibility', "show");
            var mycontroller = this;
            // var uid;
             var token = sessionStorage.getItem('token');
            return $.ajax({
                url: CONFIG.GOURL + '/logout',
                type: 'GET',
                accepts: 'application/json',
                Authorization: token,
                success: function(response) {
                    console.log(JSON.stringify(response));
                    //uid = response.message;
                    // mycontroller.set('uid',uid);
                    mycontroller.toggleProperty('isShowingModal');
                    mycontroller.set('loading_image_visibility', "hide");
                    mycontroller.transitionToRoute('programming');
                    sessionStorage.setItem('token', null);
                    mycontroller.transitionToRoute('home');

                },
                error: function(result) {
                    console.log('DEBUG: GET Enquiries Failed');
                }
            });
        },


        questionlist: function() {
            var chosen = this.get('selectedtest');
            console.log(chosen);

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
        /* success: function() {
                  
                   mycontroller.toggleProperty('isShowingModal');
                   mycontroller.set('loading_image_visibility', "hide");
                    mycontroller.transitionToRoute('programming');             
                  
            },
            error: function(result) {
                   console.log('DEBUG: GET Enquiries Failed');
        }*/


    }
});