const loginFromEl=document.getElementById('loginForm');
// console.log(loginFromEl);

const handleLoginForm=(event)=>{
event.preventDefault();

const loginFormData=new FormData(loginFromEl)
const { email,password }=Object.fromEntries(loginFormData); // object destructuring

loginUser(email,password).then(user=>{
    console.log('User successfully logged in ',user);
})
.catch(err=>{
    console.log('Error ',err);
    loginFromEl.reset();
})
// console.log(loginRecord);
}

loginFromEl.addEventListener('submit',handleLoginForm)

