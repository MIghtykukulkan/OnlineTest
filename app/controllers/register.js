import Ember from 'ember';

import CONFIG from 'online-test/config/environment';

import {
    validator,
    buildValidations
} from 'ember-cp-validations';

var Validations = buildValidations({
    firstname: [
        validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z]+$/
        })
    ],

    lastname: [
        validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z]+$/
        })
    ],

    phonenumber: [
        validator('presence', true),
        validator('format', {
            type: 'phone',
            min: 10,
            max: 10
        })
    ],

    email: [
        validator('presence', true),
        validator('format', {
            type: 'email'
        })
    ]
});

export default Ember.Controller.extend(Validations, {
    isShowingModal: false,
    actions: {
        registerUser: function() {
            let {
                firstname,
                lastname,
                phonenumber,
                email
            } = this.getProperties('firstname', 'lastname', 'phonenumber', 'email');

            var dataString = {
                "fname": firstname,
                "lname": lastname,
                "phone": phonenumber,
                "email": email
            };
            console.log(CONFIG.GOURL);
            this.toggleProperty('isShowingModal');
            this.set('loading_image_visibility', "show");
            var mycontroller = this;
            var uid;
           return $.ajax({
            url: CONFIG.GOURL+'/registerUser',
            type: 'POST',
            accepts: 'application/json',
            data: JSON.stringify(dataString),
            success: function(response) {
                   console.log(JSON.stringify(response));
                   uid = response.message;
                   mycontroller.set('uid',uid);
                   mycontroller.toggleProperty('isShowingModal');
                   mycontroller.set('loading_image_visibility', "hide");
                   mycontroller.transitionToRoute('test');              
                  
            },
            error: function(result) {
                   console.log('DEBUG: GET Enquiries Failed');
            }
           });
        }
    }
});