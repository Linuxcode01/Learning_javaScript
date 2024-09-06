import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color, setColor] = useState("")



  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}
      >
        <div className='fixed flex flex-wrap inset-x-0 justify-center bottom-12 bg-white bg-transparent'>
          <button className='gap-2 text-white rounded p-2 m-2 bg-red-600'
          onClick={()=> setColor("red")}>
          red</button>
          <button className='gap-2 text-white rounded p-2 m-2 bg-green-600' onClick={()=> setColor("green")}>
          green</button>
          <button className='gap-2 text-white rounded p-2 m-2 bg-blue-600' onClick={()=> setColor("blue")}>
          blue</button>
          <button className='gap-2 text-white rounded p-2 m-2 bg-violet-600' onClick={()=> setColor("violet")}>
          violet</button>
          <button className='gap-2 text-white rounded p-2 m-2 bg-black' onClick={()=>setColor("black")}>
          black</button>
          <button className='gap-2 text-white rounded p-2 m-2 bg-orange-600' onClick={()=>setColor("orange")}>
          orange</button>
        </div>

      </div>
    </>
  )
}

export default App
