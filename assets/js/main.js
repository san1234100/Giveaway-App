const mainEl=document.querySelector('main');
const successfulUIEl=document.getElementById('formSubmitted');
const formEl=document.querySelector('form');
console.log(mainEl,successfulUIEl,formEl);

const validateForm=()=>{
    const formInputEls=formEl.querySelectorAll('input , select , textarea'); //To select multiple tags use ,
  //  console.log(formInputEls);
  formInputEls.forEach((field)=>{
     
      if(!field.hasAttribute('required')){ 
        field.required=true;
        return false;
      }
  })
  return true;
  }
const submitForm=(event)=>{

event.preventDefault();
//    do form validation
  if(validateForm()){
    const formData=new FormData(formEl);
    // const data=[...formData.entries()];
    // console.log(data);
    const recordObj=Object.fromEntries(formData);
    console.log(recordObj);
 createRecord(recordObj);
    // update UI logic
    updateUI();
  }
   
}



formEl.addEventListener('submit',submitForm)



const updateUI=()=>{//Update UI
    mainEl.classList.add('hidden')
    successfulUIEl.classList.remove('hidden')
}