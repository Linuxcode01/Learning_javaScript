import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] =useState(false)
  const [CharectorAllowed, setCharectorAllowed] =useState(false)
  const [Password, setPassword] =useState("")

  

  const PasswordGanerator = useCallback(() =>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(CharectorAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i <= length; i++) {
      let char =Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)
    

  },[numberAllowed, CharectorAllowed, length, setPassword])


  useEffect( () =>{ 
    PasswordGanerator()},
    [length,numberAllowed, CharectorAllowed, PasswordGanerator])
  
    // use reff
  const passRef = useRef(null)

  const copyTOClipboard = useCallback( () =>{
      passRef.current.select();
      passRef.current?.setSelectionRange(0,100)
  
      window.navigator.clipboard.writeText(Password)
  },[Password])
  return (
    <>
    <h1 className='justify-center inset-x-0 text-center' > 
      Password Ganerator</h1>
    <div className=' items-center justify-center bg-slate-400 w-full max-w-md mx-auto text-center'>
      <div className='py-2 mx-2 '>
        <input className="bg-gray-100 rounded" type="text" value={Password} readOnly ref={passRef}/>
        <button className='bg-blue-800 px-3 rounded items-center justify-center mx-1' 
        onClick={copyTOClipboard}>copy</button>
      </div>
      <div className='mx-1 mb-3 '>
        <input 
          type="range" 
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={ (e) => setLength(e.target.value)}
        /> <label >length:{length}</label>
        <input type="checkbox" 
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={ () => {
                setNumberAllowed((prev) => !prev)
              }}

        /> <label>Number</label>
        <input type="checkbox" 
                defaultChecked={CharectorAllowed}
                id='charecterInput'
                onChange={ () => {
                  setCharectorAllowed((prev) => !prev)
                }}
        /> <label>Charecter</label>
      </div>

    </div>
      
    </>
  )
}

export default App
