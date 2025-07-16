import React, { useState } from 'react'
import { MdOutlineMenu, MdHomeFilled , MdContacts ,MdInfo ,MdSpaceDashboard   } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
const menuItems =[
    {
        icon:<MdHomeFilled  size={30} className='cursor-pointer'/>,
        label:'Home'
    },
    {
        icon:<MdSpaceDashboard size={30} className='cursor-pointer'/>,
        label:'Dashboard'
    },
    {
        icon:<MdInfo  size={30} className='cursor-pointer'/>,
        label:'About'
    },
    {
        icon : <MdContacts size={30} className='cursor-pointer'/>,
        label:'Contact Us'
    }]

export default function Sidebar() {

    const [open ,setOpen] = useState(true)
  return (<>
    <nav className={`shadow-md h-screen bg-white p-2 flex flex-col duration-500 ${open ? 'w-60' : 'w-16'}` } >
        <div className='py-3 px-2 h-20 flex justify-between' >
                <img src="https://placehold.co/20x20" alt="" className={`${open ? 'w-12' : 'w-0'} rounded-full`}/>
                <div>
                    <MdOutlineMenu size={40} className='cursor-pointer' onClick={() => setOpen(open => !open)}/>
                </div>
        </div>
        <ul className='flex-1'>
                {menuItems.map((menuItem , index) =>{
                    return (
                        <li key={index} className='px-3 py-2 hover:bg-blue-100 cursor-pointer rounded-md duration-200 flex gap-2 items-center' >
                            <div >
                                {menuItem.icon}
                            </div >
                            <p className={`${open ? '' : 'w-0 transalate-x-24'} duration-500 overflow-hidden`}> {menuItem.label}</p>
                        </li>
                    )
                    
                })}    
        </ul>
        <div className='flex gap-2 items-center px-3 py-2'>
            <div>
            <FaUserCircle size={30} className='cursor-pointer'/>

            </div>
            <div className={`${open ? '' : 'w-0 transalate-x-24'} duration-500 overflow-hidden`}>
                <p className='leading-5'>Tony starc</p>
                <span className='text-xs'>Tony@starc.com</span>
            </div>
        </div>
    </nav>
  </>
  )
}
