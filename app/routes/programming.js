import Ember from 'ember';

export default Ember.Route.extend({
    //try : Ember.inject.controller('test'),
    //testtype: Ember.computed.alias("try.selectedtest"),

    model(){
        
            var testtype = this.controllerFor('test').get('selectedtest')
            console.log(testtype);
            testtype = testtype.toLowerCase()
           // this.set('selectedtest',testtype);
           var data;

            $.ajax({
                    url: "http://ec2-54-218-55-72.us-west-2.compute.amazonaws.com:8081/userQuestion/?type="+testtype,
                    type: 'GET',
                    accepts: 'application/json',
                    success: function(data) {
                        alert("success"+JSON.Stringify(data))
                        console.log(data)                     
                        return data
                      
                        console.log('DEBUG: GET Enquiries OK');
                    },
                    error: function(err) {
                        console.log(data)
                        alert(err)
                        console.log('DEBUG: GET Enquiries Failed');
                    }
                });
                return data;
            }
            });
                    
        
 //console.log("selectedtest")
 /*
        if (testtype==="JAVA")
        {
        var questionlist = []; 
            
            var Question = new Ember.Object();

            Question.description = "what is Java ?";
            Question.id = "1";
           Question.option1 = "language";
           Question.option2 = "sdasda";
           Question.option3 = "languasdaage";
            Question.option4 = "hfdgdhgfh";
            questionlist[0] = Question

           Question = new Ember.Object();
             Question.description = "what is ruby ?";
            Question.id = "2";
           Question.option1 = "language";
           Question.option2 = "sdasda";
           Question.option3 = "languasdaage";
          Question.option4 = "hfdgdhgfh";
          questionlist[1] = Question

        return questionlist;
    }
    else if(testtype==="Programming Fundamentals") {
           var questionlist = []; 
            
            var Question = new Ember.Object();

            Question.description = "what is Programming Fundamentals ?";
            Question.id = "1";
           Question.option1 = "language";
           Question.option2 = "sdasda";
           Question.option3 = "languasdaage";
            Question.option4 = "hfdgdhgfh";
            questionlist[0] = Question

            Question = new Ember.Object();
             Question.description = "what is Class ?";
            Question.id = "2";
           Question.option1 = "language";
           Question.option2 = "sdasda";
           Question.option3 = "languasdaage";
          Question.option4 = "hfdgdhgfh";
          questionlist[1] = Question

        return questionlist;

    }
    else {
        var questionlist = []; 
            
            var Question = new Ember.Object();

            Question.description = "what is language ?";
            Question.id = "1";
           Question.option1 = "language";
           Question.option2 = "sdasda";
           Question.option3 = "languasdaage";
            Question.option4 = "hfdgdhgfh";
            questionlist[0] = Question

            Question = new Ember.Object();
             Question.description = "what is essay ?";
            Question.id = "2";
           Question.option1 = "language";
           Question.option2 = "sdasda";
           Question.option3 = "languasdaage";
          Question.option4 = "hfdgdhgfh";
          questionlist[1] = Question

        return questionlist;
    }
    }
});
*/