import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1 className="text-3xl font-bold underline">
        Tailwind Css
      </h1>
      <div className='flex space-between'>
        <div className='bg-blue-300 flex-1'>HELLOW</div>
        <div className='bg-green-300 flex-1' >I AM </div>
        <div className='bg-red-300 flex-1' >OMKAR</div>
      </div>

      <div className='grid grid-cols-12'>
        <div className='bg-blue-300 col-span-4' >HELLOW</div>
        <div className='bg-green-300 col-span-5' >I AM </div>
        <div className='bg-red-300 col-span-3' >OMKAR</div>
      </div>

      <div className='grid grid-cols-12 '>
        <div className='bg-blue-300 sm:col-span-12 lg:col-span-4'  >HELLOW</div>
        <div className='bg-green-300 sm:col-span-12 lg:col-span-4' >I AM </div>
        <div className='bg-red-300 sm:col-span-12 lg:col-span-4' >OMKAR</div>
      </div>
      </div>
    </>
  )
}

export default App
