//checking if user is logged in ,then get the values
if (userObj) {
    const users=[];
  getAllRequest().then((data) => {
    users.push(data);
    // console.log(data);
  }).catch((e)=>{
    console.log(e);
  })
  users.forEach(val=>{
    console.log(val);
  })
}
