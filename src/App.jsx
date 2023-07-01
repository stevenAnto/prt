import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [contador, setContador]=useState(0)
  const incrementar =()=>{
    setContador(contador+1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={viteLogo} className="App-Logo" alt="logo"/>
        <p>
          {contador}
        </p>
        <button onClick ={incrementar}>Incrementar</button>
      </header>
    </div>
  );
}

export default App
