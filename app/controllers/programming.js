import Ember from 'ember';
import CONFIG from 'online-test/config/environment';

export default Ember.Controller.extend({
    isShowingModal: false,
   
    actions: {
        
        toggleModal: function() {
            this.toggleProperty('isShowingModal');
            console.log("toggled");

           
        

            console.log(JSON.stringify(dataStringsc));
           
            alert(this.get('uid'));

           // this.toggleProperty('isShowingModal');
          
           // var a = 1+2;
           // console.log(a);


            var message = this.get('uid');
            var q_type = this.get('q_type');
            var score = this.get('score');
        
            var model = this.get('model');
            model = model.message;
            var datalist = [];
            for(var i=0; i< model.length; i++){

          var dataStringsc ={
                    "uid": model.message,
                    "q_type": model[i].id,
                    "score": model[i].userAnswer
                     
                }
        
                datalist[i] = dataStringsc;
             
            }

            var mycontroller = this;
              console.log(JSON.stringify(datalist))
                $.ajax({
                    type: 'POST',
                    accepts: 'application/json',
                    url: CONFIG.GOURL+'/userAnswer',
                    data: JSON.stringify(datalist),
                    success: function(response) {
                        mycontroller.set("score",response.score)
                        console.log(response)
                    },
                    error: function(result) {
                         console.log(result)
                    }
                })

        },
        toggleModalOk:function(){
            this.transitionToRoute('home');
        },

        scoreCalculation : function() {

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

                }
    }

});