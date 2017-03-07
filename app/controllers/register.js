iimport Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        taketest: function() {
            var lastName = this.get('lname');
            var firstName = this.get('fname');
            var phoneNo = this.get('phone');
            var emailId = this.get('email');
            
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
            //console.log("email: " + emailId);
            if (emailId === undefined || emailId === null) {

                returnValue = false;
            }
    

            if (returnValue === true) {
                this.set('errorFNMessage', "");
                this.set('errorLNMessage', "");
                this.set('errorPNMessage', "");
                this.set('errorEMMessage', "");
                this.transitionToRoute('test');
            } else {
                this.set('errorFNMessage', "Please enter First Name");
                this.set('errorPNMessage', "Please enter Phone Number");
                this.set('errorLNMessage', "Please enter Last Name");
                this.set('errorEMMessage', "Please enter Email Id");
            }
        }
    }
});