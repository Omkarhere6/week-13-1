import { useState } from 'react'
import './App.css'
import Mainbg from './components/Mainbg'
import { Button } from './components/Button'
import { Input } from './components/Input'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="bg-blue-950 h-screen w-screen">
          <br />
          <br />
          <br />
          <div className=''>
            <div className=''> 
                <Input type="text" placeholder={"Enter your name"}/>
            </div>
          <br />
          <br />
          <br />

            <div>
                <Button>Sign up</Button>
            </div>

          </div>
          
        </div>

    </>
  )
}

export default App
