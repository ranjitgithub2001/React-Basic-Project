import { useState } from "react"

function App() {
  const [color, changeColor]=useState('olive')
  return (
      <div className=" w-full h-screen" style={{backgroundColor: color}}>
      <div className="fixed bottom-0 w-full bg-gray-800 p-4 flex justify-around  mb-7 rounded-3xl">
      <button onClick={()=>changeColor('blue')} className="text-white px-4 py-2 rounded bg-blue-500" >Blue</button>
      <button onClick={()=>changeColor('red')} className="text-white px-4 py-2 rounded bg-red-500">Red</button>
      <button onClick={()=>changeColor('green')} className="text-white px-4 py-2 rounded bg-green-500">Green</button>
      <button onClick={()=>changeColor('yellow')} className="text-white px-4 py-2 rounded bg-yellow-500">Yellow</button>
      <button onClick={()=>changeColor('purple')} className="text-white px-4 py-2 rounded bg-purple-500">Purple</button>
      <button onClick={()=>changeColor('indigo')} className="text-white px-4 py-2 rounded bg-indigo-500">Indigo</button>
      <button onClick={()=>changeColor('pink')} className="text-white px-4 py-2 rounded bg-pink-500">Pink</button>
     </div>
     </div>
  )
}

export default App
