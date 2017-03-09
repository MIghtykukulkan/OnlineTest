import Ember from 'ember';

export default Ember.Route.extend({
    //try : Ember.inject.controller('test'),
    //testtype: Ember.computed.alias("try.selectedtest"),

    model(){
        
            var testtype = this.controllerFor('test').get('selectedtest');
            this.controllerFor('programming').set('testType', testtype);
                   this.controllerFor('test').set('selectedtest', null);
            
           /* console.log(testtype);
            testtype = testtype.toLowerCase()
           // this.set('selectedtest',testtype);
           var data;
            $.ajax({
                    url: "http://ec2-54-218-55-72.us-west-2.compute.amazonaws.com:9090/questions/"+testtype,
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
                   
        
 console.log("selectedtest")
 */ 
        if (testtype==="JAVA")
        {
          var questionlist = []; 
            
          var Question = new Ember.Object();
         
        
          Question.description = "which of these is necessary condition for automatic type conversion in Java?";
          Question.id = "1";
          Question.option1 = "The destination type is smaller than source type";
          Question.option2 = "The destination type is larger than source type";
          Question.option3 = "The destination type can be larger or smaller than source type";
          Question.option4 = "None of the mentioned";
          questionlist[0] = Question

          Question = new Ember.Object();
          Question.description = "Which function is used to perform some action when object is to be destroyed?";
          Question.id = "2";
          Question.option1 = "finalize()";
          Question.option2 = "delete()";
          Question.option3 = "main()";
          Question.option4 = "None of the mentioned";
          questionlist[1] = Question

          Question = new Ember.Object();
          Question.description = "Which keyword is used by method to refer to the object that invoked it?";
          Question.id = "3";
          Question.option1 = "import";
          Question.option2 = "catch";
          Question.option3 = "abstrct";
          Question.option4 = "this";
          questionlist[2] = Question

          Question = new Ember.Object();
          Question.description = "Which keyword is used to refer to member of base class from subclass?";
          Question.id = "4";
          Question.option1 = "upper";
          Question.option2 = "super";
          Question.option3 = "this";
          Question.option4 = "None of the above";
          questionlist[3] = Question


          Question = new Ember.Object();
          Question.description = "Which of these access specifiers can be used for an interface?";
          Question.id = "5";
          Question.option1 = "Public";
          Question.option2 = "Protected";
          Question.option3 = "Private";
          Question.option4 = "All of the mentioned";
          questionlist[4] = Question

        return questionlist;
    }
    else if(testtype==="Programming Fundamentals") {
           var questionlist = []; 
         
            var Question = new Ember.Object();

           Question.description = "what is standard output ?";
           Question.id = "1";
           Question.option1 = "Monitor";
           Question.option2 = "Printer";
           Question.option3 = "Mouse";
           Question.option4 = "Both monitor and printer";
           questionlist[0] = Question

           Question = new Ember.Object();
           Question.description = "which one of the following is not a OOP language ?";
           Question.id = "2";
           Question.option1 = "C";
           Question.option2 = "Objective C";
           Question.option3 = "Python";
           Question.option4 = "Java";
           questionlist[1] = Question

           Question = new Ember.Object();
           Question.description = "which one of the following is an example of runtime Polymorphism ?";
           Question.id = "3";
           Question.option1 = "method overloading";
           Question.option2 = "method overriding";
           Question.option3 = "Abstract class";
           Question.option4 = "Interface";
           questionlist[2] = Question

           
           Question = new Ember.Object();
           Question.description = "which ia an encapsulation ?";
           Question.id = "4";
           Question.option1 = "Hiding unnecessary information to outside world";
           Question.option2 = "Wrapping up properties and methods";
           Question.option3 = "A way deriving a class from another class";
           Question.option4 = "None of the above";
           questionlist[3] = Question


           Question = new Ember.Object();
           Question.description = "what is a recursive method ?";
           Question.id = "5";
           Question.option1 = "A method that loops through a list";
           Question.option2 = "A method that calls itself";
           Question.option3 = "A method iterates over a block of code untile a condition is solved";
           Question.option4 = "A method that contains multiple definitions";
           questionlist[4] = Question
        return questionlist;

    }
    else {
        var questionlist = []; 
            
            var Question = new Ember.Object();

           Question.description = "To be 'badgered' is to be ?";
           Question.id = "1";
           Question.option1 = "flattered";
           Question.option2 = "tormented";
           Question.option3 = "made angry";
           Question.option4 = "None of the above";
           questionlist[0] = Question

           Question = new Ember.Object();
           Question.description = "If you were 'inundated' with work,you would be ?";
           Question.id = "2";
           Question.option1 = "very busy";
           Question.option2 = "not busy at all";
           Question.option3 = "irritated";
           Question.option4 = "None of the above";
           questionlist[1] = Question

           Question = new Ember.Object();
           Question.description = "Identify the closest in meaning to indenture";
           Question.id = "3";
           Question.option1 = "Written contract";
           Question.option2 = "verbal promise";
           Question.option3 = "dental plate";
           Question.option4 = "partial invasion";
           questionlist[2] = Question

           Question = new Ember.Object();
           Question.description = "If a person cannot be easily handled or dealt with,he will not be complimented for his";
           Question.id = "3";
           Question.option1 = "Domesticity";
           Question.option2 = "Knowledge";
           Question.option3 = "Tractability";
           Question.option4 = "Eulogy";
           questionlist[3] = Question

           Question = new Ember.Object();
           Question.description = "uranium:fissionable::x:malleable,identity x";
           Question.id = "3";
           Question.option1 = "Diamond";
           Question.option2 = "Gold";
           Question.option3 = "Nucleus";
           Question.option4 = "Atoms";
           questionlist[4] = Question

        return questionlist;
    }
   
    }
});