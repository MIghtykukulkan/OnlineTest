import Ember from 'ember';


export default Ember.Controller.extend({
    isShowingModal: false,
    actions: {
        toggleModal: function() {
            this.toggleProperty('isShowingModal');
            console.log("toggled");
            console.log(JSON.stringify(dataStringsc));

            var uid = this.get('uid');
            var q_type = this.get('q_type');
            var score = this.get('score');
            
            var dataStringsc ={
                "uid": uid,
                "q_type": q_type,
                "score": score
            }
             
              
                $.ajax({
                    type: 'POST',
                    accepts: 'application/json',
                    url: 'http://ec2-54-218-55-72.us-west-2.compute.amazonaws.com:8082/userAnswer',
                    data: dataStringsc,
                    dataType: "json",
                    success: function(response) {
                        this.transitionToRoute('programming');
                        alert(response)
                    },
                    failure: function(result) {
                        alert(result)
                    }
                })

        },
        toggleModalOk:function(){
            this.transitionToRoute('home');
        }
    }
});