//signup form
/*
const signupForm =document.querySelector('#a');
signupForm.addEventListener('submit',(e)=>{
e.preventDefault();


//get user infor
const email= signupForm['defaultRegisterFormEmail'].value;
const password=signupForm['defaultRegisterFormPassword'].value;

auth.createUserWithEmailAndPassword(email,password).then(cred=>{
    console.log(cred.user);
  signupForm.reset();
  

   
}); 
});
*/
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('user signed out');
  })
});
//siginInForm

const loginForm =document.querySelector('#c');
loginForm.addEventListener('submit',(e)=>{
e.preventDefault();



//get user infor
const email= loginForm['defaultLoginFormEmail'].value;
const password=loginForm['defaultLoginFormPassword'].value;

auth.createUserWithEmailAndPassword(email,password).then(cred=>{
    console.log(cred.user);
    loginForm.reset();
  
  

   
}); 
});
























