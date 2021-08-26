import React ,{useState ,useEffect} from 'react';
import Context from './Context/CreateContext';
function Main() {
  const [firstName, setFirstName]= useState('')
useEffect(()=>{
  fetch('https://randomuser.me/api/')
    .then(results=>results.json())
    .then(data =>{
      setFirstName(data.results[0].name.first)
      console.log(data.results[0].name.first);

});
},
[])


return (
    <>
    <Context.Provider value={firstName}>
    {firstName.length < 0 ?
        <div>
            this is {firstName}
            This is main {nameState}
            <button onClick = {() => setNameState("Home")}>Click</button>
        </div>: <div>First name is loading</div>}
    </Context.Provider>
    </>
  );
}
export default Main;
