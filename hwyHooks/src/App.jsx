import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 // let counetr = 5
  let [counter,setChange]= useState(0)


  return (
   <>
    <h1>chai aur react</h1> 
    <h2>counter value {counter}</h2>
    <button onClick={()=>{
     // counter= counter+1
      setChange(counter+1)
    //  console.log(counetr)
      
    }}>add value</button>
   
    <br />
    <br />
    <button>remove value</button>
   </>
  )
}

export default App
