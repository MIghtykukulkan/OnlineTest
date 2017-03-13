import Ember from 'ember';
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
            //console.log(JSON.stringify(dataString));
            this.toggleProperty('isShowingModal');
            this.set('loading_image_visibility', "show");
            Ember.$.ajax({
                type: 'POST',
                contentType: 'application/json',
                url: 'http://ec2-54-218-55-72.us-west-2.compute.amazonaws.com:8082/registerUser',
                data: dataString,
                dataType: "json",
                success: function(response) {
                    this.toggleProperty('isShowingModal');
                    this.set('loading_image_visibility', "hide");
                    this.transitionToRoute('test');
                },
                failure: function(result) {
                    this.toggleProperty('isShowingModal');
                    this.set('loading_image_visibility', "hide");
                    alert(result);
                }
            });
        }
    }
});