const mainEl=document.querySelector('main');
const successfulUIEl=document.getElementById('formSubmitted');
const formEl=document.querySelector('form');
console.log(mainEl,successfulUIEl,formEl);


const submitForm=(event)=>{
    event.preventDefault();

    const formData=new FormData(formEl);

    const data=[...formData.entries()];
    console.log(data);
    // update UI logic
    updateUI();
}
formEl.addEventListener('submit',submitForm)
const updateUI=()=>{//Update UI
    mainEl.classList.add('hidden')
    successfulUIEl.classList.remove('hidden')
}