const loginFromEl=document.getElementById('loginForm');
// console.log(loginFromEl);

const handleLoginForm=(event)=>{
event.preventDefault();

const loginFormData=new FormData(loginFromEl)
const { email,password }=Object.fromEntries(loginFormData); // object destructuring

loginUser(email,password).then(user=>{
    // login state in local storage
    localStorage.setItem('user',JSON.stringify(user));

    window.location.replace('./dashboard.html')
    // console.log('User successfully logged in ',user);
})
.catch(err=>{
    // console.log('Error ',err);
    if(err.errorCode==='auth/internal-error'){
       alert(`UserName/Password doesn't exist`)
    }
    loginFromEl.reset();
})
// console.log(loginRecord);
}

loginFromEl.addEventListener('submit',handleLoginForm)

