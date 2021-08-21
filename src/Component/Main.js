import React ,{useState ,useEffect} from 'react';

function Main() {
  const [firstName, setFirstName]= useState('')
useEffect(()=>{
  fetch('https://randomuser.me/api/')
    .then(results=>results.json())
    .then(data =>{
      setFirstName(data.results[0].name.first)
      //console.log(data.results[0].name.first);

});
},
[])


return(

  <>
  {firstName.length >0 ? <div> this is {firstName}</div> : <div> First name is loading </div>}
  <div>this is {firstName}</div>
this is main Component
  </>

)

}
export default Main;
