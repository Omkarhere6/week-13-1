import { useState } from 'react'
import './App.css'
import Mainbg from './components/Mainbg'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { OtpComponent } from './components/Otpcomponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="bg-blue-950 h-screen w-screen flex justify-center ">
          <OtpComponent></OtpComponent>
        </div>

    </>
  )
}

export default App
