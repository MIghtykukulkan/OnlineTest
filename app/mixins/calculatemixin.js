import Ember from 'ember';

export default Ember.Mixin.create({

     actions : {

        calculate(){
                 var value = this.get('val');
                 var ans = this.get('ans')    

                 if((value-ans)===0)
                 {
                     this.set('result',"congrats you solved it..!! ")
                 }
                 else{

                     this.set('result',"You are almost there, keep trying..!!")
                 }
        }
       

    }
});