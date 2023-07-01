import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  //este estado contendra la data
  const [data, setData]=useState(null);
    //cada vez q se renderice
  useEffect(()=>{
    fetch( "   https://jsonplaceholder.typicode.com/users   ").
      then((response)=>response.json()).
      then((data)=>setData(data));
  },[]  );

  return (
    <div className="App">
      <h1>Fetch like a pro</h1>
      <div className="card"></div>
       <ul>
         {data?.map(( user)=>(<li key={user.id}>{user.name}</li>))}
       </ul>
    </div>
  );
}

export default App
