const signupForm =document.querySelector('#a');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('cafes').add({
        fname: signupForm.fname.value,
        lname: signupForm.lname.value,
        email:signupForm.email.value,
        pass:signupForm.pass.value,
        phone:signupForm.phone.value,

    });
    signupForm.fname.value = '';
    signupForm.lname.value = '';
    signupForm.email.value='';
    signupForm.pass.value='',
    signupForm.phone.value=''
});