import React, {useState} from 'react';

function App() {
  const[counter,setCounter] = useState(10);

const addValue = ()=>{
  setCounter(counter+1);
}
const removeValue=()=>{
  setCounter(counter-1);

}
  return (
    <>

    <h1>The value of count is : {counter}</h1>
    <button onClick={addValue}>Add Value</button>
    
    <button onClick={removeValue}>Remove Value</button>



    </>
  );
}

export default App;
