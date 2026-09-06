import { useState } from "react"
function App(){

  const[count,setCount]=useState(0)
  return(
    <div className="bg-white flex items-center justify-center w-40 h-35 border border">
      <h1 >Counter App</h1>
      <h2>Count:{count}</h2>
      <button onClick={()=> setCount+1}>Increase</button>
      <button onClick={()=> setCount-1}>Decrease</button>

    </div>
  )
}
export default App