import Ember from 'ember';

export default Ember.Controller.extend({
 
    actions: {


        registerUser: function() {
            var lastName = this.get('lname');
            var firstName = this.get('fname');
            var phoneNo = this.get('phone');
            var emailId = this.get('email');
            var phoneNo = document.getElementById('phone');

            var datastring = this.get('model');

            var returnValue = true;

            //console.log("FirstName: " + firstName);
            if (firstName === undefined || firstName === null) {
                returnValue = false;
            }

            //console.log("LastName: " + lastName);
            if (lastName === undefined || lastName === null) {

                returnValue = false;
            }

            //console.log("Phone: " + phoneNo);
            if (phoneNo === undefined || phoneNo === null) {

                returnValue = false;
            }
            if (phoneNo.value.length < 10 || phoneNo.value.length > 10) {

                returnValue = false;
            }
            //console.log("email: " + emailId);
            if (emailId === undefined || emailId === null) {

                returnValue = false;
            }
            if (email.value.indexOf("@", 0) < 0) {

                email.focus();
                returnValue = false;
            }
            if (email.value.indexOf(".", 0) < 0) {

                email.focus();
                returnValue = false;
            }

            if (returnValue === true) {
                this.set('errorFNMessage', "");
                this.set('errorLNMessage', "");
                this.set('errorPNMessage', "");
                this.set('errorEMMessage', "");
                this.set('errorPHMessage', "");
                this.set('errorEIMessage', "");

                this.transitionToRoute('test');
            } else {
                this.set('errorFNMessage', "Please enter First Name");
                this.set('errorPNMessage', "Please enter Phone Number");
                this.set('errorLNMessage', "Please enter Last Name");
                this.set('errorEMMessage', "Please enter Email Id");
                this.set('errorPHMessage', "Please enter 10 digit no.");
                this.set('errorEIMessage', "Please enter coorect Email Id");
            }
        },
        




    }
});