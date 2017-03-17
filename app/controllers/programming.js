import Ember from 'ember';
import CONFIG from 'online-test/config/environment';

export default Ember.Controller.extend({
    isShowingModal: false,

     seconds : 60,
     minutes : 2,
     
     watchmin : function(){
         this.set('dispmin', this.get('minutes')-1)
     }.observes('minutes'),

init: function () { 
            this.set('dispmin', this.get('minutes')-1)
            this.updateTimeProperty();
            },
updateTimeProperty: function () {
  
  Ember.run.later(this, function() {
      var seconds = this.get('seconds')
      var minutes = this.get('minutes')
      seconds--;
      console.log(seconds)
      if(seconds==0){
          minutes--;
          seconds=60;
      }
      this.set('seconds',seconds)
      this.set('minutes',minutes)
      

      if(minutes==0){         
          this.send('exitaction')
      }
      else{
        this.updateTimeProperty();
      }
    
  }, 1000);
},



    actions: {

        exitaction: function(){
            alert("your time is over");
        },
         
        toggleModal: function() {
            this.toggleProperty('isShowingModal');
            console.log("toggled");

            console.log(JSON.stringify(dataStringsc));
           
            alert(this.get('uid'));

           // this.toggleProperty('isShowingModal');
          
            var message = this.get('uid');
            var q_type = this.get('q_type');
            var score = this.get('score');
        
            var model = this.get('model');
            model = model.message;
            var datalist = [];
            for(var i=0; i< model.length; i++){

          var dataStringsc ={
                    "uid": message,
                    "q_type": model[i].id,
                    "selected": model[i].userAnswer
                     
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
                    },
                    
                })
                

        },
        toggleModalOk:function(){
            this.transitionToRoute('home');
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
  

