import  { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);
    const [type, setType] = useState('')
    
  return (
    <> 
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Increment</button> <br /><br /><br />

        <input type="text" onChange={(e) => setType(e.target.value)} value={type}/>
        <p>You typed : {type}</p>
    </>
   
  )
}

export default UseState