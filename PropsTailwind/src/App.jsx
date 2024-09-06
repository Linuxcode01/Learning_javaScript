
import Props from "./Components/Props";


function App() {

  const obj={
    name:"chandan",
    age:21
  }

  const newArr =[
    1,2,3,4
  ]
  return (
    <>
      <h1>hello Tailwind</h1>
      <Props username="chandan" visitme="click me"/>
      <Props username="kundan" visitme="click me"/>
      


    </>
  );
}

export default App;
