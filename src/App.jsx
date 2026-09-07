import { useState } from "react"
function App(){

  const[count,setCount]=useState(0)
  return(
    <div className="bg-white flex  flex-col items-center justify-center  w-64 border border-gray-300 rounded-xl p-6 shadow-md mx-auto mt-10">
      <h1 >Counter App</h1>
      <h2>Count:{count}</h2>
      <button className="bg-green-500 p-2 rounded-lg text-white m-2"onClick={()=> setCount(count+1)}>Increase</button>
      <button className="bg-red-500 p-2 rounded-lg text-white m-2"onClick={()=> {if(count>0) setCount(count-1)}}>Decrease</button>

    </div>
  )
}
export default App