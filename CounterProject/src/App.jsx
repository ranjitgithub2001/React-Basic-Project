import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(15)

  function add(){
    if(counter<20)setCounter( counter + 1);
    if(counter<20)setCounter( counter + 1);
    if(counter<20)setCounter( counter + 1);
    if(counter<20)setCounter( counter + 1);
    if(counter<20)setCounter( counter + 1);
  }
  function decrease(){
    if(counter>0)setCounter(counter - 1);
  }
  return (
    <div className='container'>
    <h1>Counter: {counter}</h1>
    <button onClick={add}>Increase Counter</button>
    <button onClick={decrease}>Decrease Counter</button>
    </div>
  )
}

export default App
