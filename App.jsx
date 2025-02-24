import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
 const[length,setLength]= useState('8')
 const[numberAllowed,setNumberAllowed]= useState(false)
 const[characterAllowed,setCharacterAllowed]= useState(false)
 const[password,setPassword]= useState('')

 const passwordGenerator=useCallback(()=>{
  let pass=''
  let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'
  if(numberAllowed) str+='0123456789'
  if(characterAllowed) str+='!@#$%^&*()_+'
  for(let i=0;i<length;i++){
    let index=Math.floor(Math.random()*str.length)
    pass+=str[index]
  }
  setPassword(pass)
 },[length,numberAllowed,characterAllowed])

 useEffect(()=>{passwordGenerator()},[length,numberAllowed,characterAllowed,passwordGenerator])
  return (
  <>
  
  <div className='fixed bg-red-200 w-1/2 h-1/3 left-1/4 top-5 rounded-md'>
  <div>
 <h1 className='text-center text-4xl'>Password Generator</h1>
  </div>
 <div className='p-5 my-2'>
    <input className='w-3/5'
    type='text'
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
   
/>
    <button className='bg-blue-400 px-3 py-1 rounded-md mx-3 hover:bg-blue-600 transition duration-30' >Copy</button>
    
  </div>
  <div className='p-4 '>
    <input type="range"
    min={6}
    max={20}
    value={length}
    
    onChange={(e)=>setLength(e.target.value)}
    
    />
    <label className='mx-2'>Length {length}</label>

    <input type="checkbox" 
    value={numberAllowed}
    
   onChange={()=>setNumberAllowed(prev=>!prev)}
    />
    <label className='mx-2'>Number</label>

    <input type="checkbox" 
    value={characterAllowed}
    onChange={()=>setCharacterAllowed(prev=>!prev)}
    />
    <label className='mx-2' >Character</label>
  </div>
 </div>
   
  
  </>
  )
}

export default App
