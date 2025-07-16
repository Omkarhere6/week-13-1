import { useState } from "react";
import "./App.css";
import Mainbg from "./components/Mainbg";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { OtpComponent } from "./components/Otpcomponent";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        {/* <OtpComponent number={10}></OtpComponent> */}

        <Sidebar></Sidebar>
      </div>
    </>
  );
}

export default App;
