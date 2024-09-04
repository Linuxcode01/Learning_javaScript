import { useState } from 'react'




function App() {
  // let setCount = 1;

  let [count, setCount] = useState(0)

  const plus= () =>{
    if(count < 20){
      setCount(count+1)
    }
  
  }

  const minus=() =>{
  if(count > 0)
   setCount(count-1)
  }

  return (
    <>
      <div>
        <h1> hello chandan</h1>
        <h1>
          count : {count} </h1>
        <button  onClick={plus} >
          plus</button>
        <button onClick={minus} >
          minus</button>
      </div>
    </>
  )



}

export default App;

