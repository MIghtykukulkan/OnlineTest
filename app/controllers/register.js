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
            var myroute = this;
           
            $.ajax({
            url: CONFIG.GOURL+'/registerUser',
            type: 'POST',
            accepts: 'application/json',
            data: JSON.stringify(dataString),
            success: function(dataString) {
                   myroute.toggleProperty('isShowingModal');
                   myroute.set('loading_image_visibility', "hide");
                   myroute.transitionToRoute('test');
            },
            error: function() {
                   console.log('DEBUG: GET Enquiries Failed');
            }
           });
        }
    }
});