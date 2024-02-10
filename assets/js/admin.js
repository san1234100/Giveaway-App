const tbodyEl=document.querySelector('tbody');
// console.log(tbodyEl);
//checking if user is logged in ,then get the values
if (userObj) {
  const fragment=document.createDocumentFragment();
  db.collection("user").get().then((querySnapShot)=>{
    let index=2;
    querySnapShot.forEach((doc)=>{
      const record= doc.data();
console.log(record);
        const tr = document.createElement('tr')
        const serialNo=document.createElement('td')
        serialNo.classList.add('p-2','border')
        serialNo.textContent = index++;

        const name = document.createElement('td')
        name.classList.add('p-2','border')
        name.textContent = record.fullName;

        const communication = document.createElement('td')
        communication.classList.add('p-2','border')
        communication.textContent = record.email;

        const skills = document.createElement('td')
        skills.classList.add('p-2','border')
        skills.textContent = record.skills;

        const studies = document.createElement('td')
        studies.classList.add('p-2','border')
        studies.textContent = record.studies;

        // const action=document.createElement('action')
    
        tr.append(serialNo,name,communication,skills,studies);
        fragment.append(tr);

    })
    tbodyEl.append(fragment)
  }).catch(e=>{
    console.log('Unable to retrieve data',e);
  })
    
 
}
