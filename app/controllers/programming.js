import Ember from 'ember';
import CONFIG from 'online-test/config/environment';

export default Ember.Controller.extend({
    isShowingModal: false,




    actions: {

        exitaction: function() {

            this.toggleProperty('isShowingModal');
        },

        toggleModal: function() {
            this.toggleProperty('isShowingModal');

            console.log("toggled");

            console.log(JSON.stringify(dataStringsc));

            console.log('uid');

            // this.toggleProperty('isShowingModal');

            var message = this.get('uid');
            var q_type = this.get('q_type');
            var score = this.get('score');

            var model = this.get('model');
            model = model.message;
            var datalist = [];
            for (var i = 0; i < model.length; i++) {

                var dataStringsc = {
                    "uid": message,
                    "q_type": model[i].id,
                    "selected": model[i].userAnswer
                }


                datalist[i] = dataStringsc;

            }

            var mycontroller = this;
            console.log(JSON.stringify(datalist))
            console.log(token);
            var token = sessionStorage.getItem('token');
            $.ajax({
                type: 'POST',
                accepts: 'application/json',
                Authorization: token,
                url: CONFIG.GOURL + '/userAnswer',
                data: JSON.stringify(datalist),
                success: function(response) {
                    mycontroller.set("score", response.score)
                    console.log(response)
                },
                error: function(result) {
                    console.log(result)
                },

            })


        },
        toggleModalOk: function() {
            this.transitionToRoute('home');
        },
        toggleModalNext: function() {
            this.transitionToRoute('test');
        },

        log_out1: function() {

            console.log(CONFIG.GOURL);
            // this.toggleProperty('isShowingModal');
            // this.set('loading_image_visibility', "show");
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
                    sessionStorage.setItem('token', null);
                    mycontroller.transitionToRoute('home');

                },
                error: function(result) {
                    console.log('DEBUG: GET Enquiries Failed');
                }
            });
        },

    },

    /*scoreCalculation : function() {

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
            console.log(JSON.stringify(dataString));
            $.ajax({
                    type: 'POST',
                    contentType: 'application/json',
                    url: 'http://ec2-54-218-55-72.us-west-2.compute.amazonaws.com:8082/registerUser',
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

                },
    
          questionlist : function() {

            var question = this.get('question');
            var option1  = this.get('option1');
            var option2  = this.get('option2');
            var option3  = this.get('option3');
            var option4  = this.get('option4');
            var answer   = this.get('answer');
            //var phoneNo = document.getElementById('phone');


            var dataString = {
                "question": question,
                "option1" : option1,
                "option2" : option2,
                "option3" : option3,
                "option4" : option4,
                "answer"  : answer,
            }
            console.log(JSON.stringify(dataString));
            $.ajax({
                    type: 'POST',
                    contentType: 'application/json',
                    url: 'http://ec2-54-218-55-72.us-west-2.compute.amazonaws.com:8082/registerUser',
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

                }*/

});