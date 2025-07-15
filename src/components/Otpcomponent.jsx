import { useRef, useState } from "react"

export const OtpComponent = () =>{


    const ref1= useRef();
    const ref2= useRef();
    const ref3= useRef();
    const ref4= useRef();
    const ref5= useRef();
    const ref6= useRef();


    return(<>
        <SubOtpBox 
        reference={ref1}
        onDone={() =>{
            ref2.current.focus()
        }}
        onClear={() =>{
            ref1.current.focus()
        }}
        onEmpty={() =>{}}/>
        <SubOtpBox 
        reference={ref2} 
        onDone={() =>{
            ref3.current.focus()
        }}
        onClear={() =>{
            ref2.current.focus()
        }}
        onEmpty={() =>{
            ref1.current.focus()
       }}/>
        <SubOtpBox 
        reference={ref3} 
        onDone={() =>{
            ref4.current.focus()
        }}
        onClear={() =>{
            ref3.current.focus()
        }}
        onEmpty={() =>{
            ref2.current.focus()
       }}/>
        <SubOtpBox 
        reference={ref4} 
        onDone={() =>{
            ref5.current.focus()
        }}
        onClear={() =>{
             ref4.current.focus()
        }}
        onEmpty={() =>{
            ref3.current.focus()
       }}/>
        <SubOtpBox 
        reference={ref5} 
        onDone={() =>{
            ref6.current.focus()
        }}
        onClear={() =>{
            ref5.current.focus()
        }}
        onEmpty={() =>{
            ref4.current.focus()
       }}/>
        <SubOtpBox 
        reference={ref6} 
        onDone={() =>{}} 
        onClear={() =>{
             ref6.current.focus()
        }}
        onEmpty={() =>{
            ref5.current.focus()
       }}/>
    </>)
}

function SubOtpBox( {reference ,onDone,onClear,onEmpty }){
    const [value ,setValue] = useState("")
    return(<>
        <input value={value} maxLength={1} ref={reference} onChange={(e) =>{
            
            if(e.target.value === '') 
            {
                setValue("")
                 onEmpty() 
            }
            else
            {
                setValue(e.target.value) 
                onDone()
            }
        }} type="text" className="w-[40px] h-[50px] rounded-2xl bg-gray-600 outline-none m-1 px-4 text-white" />
    </>)
}