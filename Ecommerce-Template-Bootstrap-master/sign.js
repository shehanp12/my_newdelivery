import db from './route/init'


function signup(){

 
 var a=document.forms["reg"]["fname"];

 if(a.value!=""){
    let ref=db.collection('users').doc(this.a)
    ref.get()
    
 }
 


}



