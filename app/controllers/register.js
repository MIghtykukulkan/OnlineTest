import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {


        registerUser: function() {
            var lastName = this.get('lname');
            var firstName = this.get('fname');
            var phoneNo = this.get('phone');
            var emailId = this.get('email');
            //var phoneNo = document.getElementById('phone');


            var dataString = {
                "fname": firstName,
                "lname": lastName,
                "phone": phoneNo,
                "email": emailId
            }

            // var datastring = this.get('model');


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
            if (phoneNo.length < 10 || phoneNo.length > 10) {

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

                console.log(JSON.stringify(dataString));

                $.ajax({
                    type: 'POST',
                    accepts: 'application/json',
                    url: 'http://ec2-54-218-55-72.us-west-2.compute.amazonaws.com:8080/registerUser',
                    data: dataString,
                    dataType: "json",
                    success: function(response) {
                        this.transitionToRoute('test');
                        alert(response)
                    },
                    failure: function(result) {
                        alert(result)
                    }
                })




            } else {
                this.set('errorFNMessage', "Please enter First Name");
                this.set('errorPNMessage', "Please enter Phone Number");
                this.set('errorLNMessage', "Please enter Last Name");
                this.set('errorEMMessage', "Please enter Email Id");
                this.set('errorPHMessage', "Please enter 10 digit no.");
                this.set('errorEIMessage', "Please enter coorect Email Id");
            }




        }
    }






});