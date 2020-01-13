const signupForm =document.querySelector('#modal-signup');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('cafes').add({
        fname: signupForm.fname.value,
      
        email:signupForm.email.value,
        pass:signupForm.pass.value,
       

    });
    signupForm.fname.value = '';
   
    signupForm.email.value='';
    signupForm.pass.value=''
   
});