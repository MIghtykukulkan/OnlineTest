import Ember from 'ember';
import CONFIG from 'online-test/config/environment';
export default Ember.Controller.extend({
    testlist: ['Fundamental', 'JAVA', 'Language'],
    isShowingModal: false,
    actions: {
        questionlist: function() {
            let {
                question,
                option1,
                option2,
                option3,
                option4,
                answer,
            } = this.getProperties('firstname', 'lastname', 'phonenumber', 'email');

            var dataString = {
                "question": question,
                "option1": option1,
                "option2": option2,
                "option3": option3,
                "option4": option4,
                "answer": answer,
            };
            console.log(CONFIG.GOURL);
            this.toggleProperty('isShowingModal');
            this.set('loading_image_visibility', "show");
            var mycontroller = this;
            var uid;
            return $.ajax({
                url: CONFIG.GOURL + '/',
                type: 'POST',
                accepts: 'application/json',
                data: JSON.stringify(dataString),
                success: function(response) {
                    console.log(JSON.stringify(response));
                    uid = response.message;
                    mycontroller.set('uid', uid);
                    mycontroller.toggleProperty('isShowingModal');
                    //mycontroller.set('loading_image_visibility', "hide");
                    mycontroller.transitionToRoute('test');

                },
                error: function(result) {
                    console.log('DEBUG: GET Enquiries Failed');
                }
            });
        }
    }
});