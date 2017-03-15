import Ember from 'ember';

export default Ember.Controller.extend({
    testlist: ['Fundamental', 'JAVA', 'Language'],
     actions: {
          questionlist : function() {

            var question = this.get('question');
            var option1 = this.get('option1');
            var option2 = this.get('option2');
            var option3 = this.get('option3');
            var option4 = this.get('option4');
            var answer = this.get('answer');
            //var phoneNo = document.getElementById('phone');


            var dataString = {
                "question": question,
                "option1": option1,
                "option2": option2,
                "option3": option3,
                "option4": option4,
                "answer": answer,
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