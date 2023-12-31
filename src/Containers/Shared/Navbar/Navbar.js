
import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi';
import { FaWindowClose } from 'react-icons/fa';
import { manuItems } from '../../../portfolio';

const Navbar = () => {
    
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] '>
        <a href="/">Sujon Hasan</a>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      {open ? <FaWindowClose></FaWindowClose> : <BiMenu></BiMenu> }
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-200 sm:bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'left-0 ':'left-[-490px]'}`}>
        {
          manuItems.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
    
      </ul>
      </div>
    </div>
  )
}

export default Navbar

