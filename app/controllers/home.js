import Ember from 'ember';

import CONFIG from 'online-test/config/environment';


import {
    validator,
    buildValidations
}
from 'ember-cp-validations';

var Validations = buildValidations({
    email: [
        validator('presence', true),
        validator('format', {
            type: 'email'
        })
    ],

});

export default Ember.Controller.extend(Validations, {
    isShowingModal: false,

    actions: {
        register: function() {
            this.transitionToRoute('register');
        },

        login: function() {
            let {
                email,
                password
            } = this.getProperties('email', 'password');

            var dataString = {
                "email": email,
                "password": password,
            };
            console.log(CONFIG.GOURL);
            this.toggleProperty('isShowingModal');
            this.set('loading_image_visibility', "show");
            var mycontroller = this;
            var uid, fname, token, usertype;
            return $.ajax({
                url: CONFIG.GOURL + '/login',
                type: 'POST',
                accepts: 'application/json',
                data: JSON.stringify(dataString),
                success: function(response) {
                    var message = response.message;
                    var status = response.status;
                    if (status == "success") {
                        console.log(JSON.stringify(response));
                        uid = message.uid;
                        fname = message.fname;
                        token = message.token;
                        usertype = message.usertype;

                        sessionStorage.setItem('token', token);

                        mycontroller.set('uid', uid);
                        mycontroller.set('fname', fname);
                        mycontroller.set('token', token);
                        mycontroller.set('usertype', usertype);
                        mycontroller.toggleProperty('isShowingModal');
                        mycontroller.set('loading_image_visibility', "hide");
                        if (usertype == "admin") {
                            mycontroller.transitionToRoute('report');
                        } else {
                            mycontroller.transitionToRoute('agreement');
                        }

                    } else {
                        mycontroller.set('token', null);
                        mycontroller.set('errormessage', "Invalid Credentials");
                    }




                },
                error: function(result) {
                    console.log('DEBUG: GET Enquiries Failed');
                }
            });
        }

    }
});