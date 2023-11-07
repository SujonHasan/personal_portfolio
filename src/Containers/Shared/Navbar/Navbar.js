// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { FaWindowClose } from 'react-icons/fa';


// const Navbar = () => {

// const manuItems = <>
//     <li> <Link className='py-3 px-2 inline-block' to="/" >Home</Link> </li>
//     <li> <Link className='py-3 px-2 inline-block' to="/about" >About</Link> </li>
//     <li> <Link className='py-3 px-2 inline-block' to="/projects" >Projects</Link> </li>
//     <li> <Link className='py-3 px-2 inline-block' to="/skills" >Skills</Link> </li>
//     <li> <Link className='py-3 px-2 inline-block' to="/achievments" >Achievments</Link> </li>
//     <li> <Link className='py-3 px-2 inline-block' to="/problem_solving" >Problem Solving</Link> </li>
//     <li> <Link className='py-3 px-2 inline-block' to="/blogs" >Blogs</Link> </li>
//     <li> <Link className='py-3 px-2 inline-block' to="/contact" >Contact me</Link> </li>
// </>

//     const [open, setOpen] = useState(true);

//     // return (
//     //     <nav className="bg-white-600 px-2 mt-5 relative ">
//     //         <div className="flex items-center font-medium justify-around">
//     //             <div className="z-50 py-5 md:w-auto w-full flex justify-between">
//     //                 <p className='md:cursor-pointer' > <Link to="/" > Sujon Hasan</Link> </p>
//     //                 <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
//     //                     {
//     //                         open ?
//     //                             <FaWindowClose></FaWindowClose>
//     //                             :
//     //                             <BiMenu></BiMenu>
//     //                     }
//     //                 </div>
//     //             </div>
//     //             <ul className="md:flex hidden uppercase items-center">
//     //                 {manuItems}
//     //             </ul>
//     //             {/* Mobile nav */}
//     //             <ul
//     //                 className={`
//     //                 md:hidden bg-gray-200 fixed top-0 w-full  h-auto  bottom-0 py-24 pl-4
//     //                 duration-1000 ${open ? "left-0" : "left-[-100%]"} 
//     //                 `}
//     //             >
//     //                 {manuItems}
//     //             </ul>
//     //         </div>
//     //     </nav>

//     // );

//     return (

//         <div className="navbar bg-base-100">

//             <div className="navbar-start">
//                 <a className="btn btn-ghost normal-case text-xl">Sujon Hasan</a>
//             </div>

//             <div className="navbar-end">
//                 <div className="dropdown">
//                     <label tabIndex={0} className="btn btn-ghost btn-circle">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
//                     </label>
//                     <ul  className="menu menu-sm text-start dropdown-content  p-2 shadow bg-base-100 rounded-box w-52">
//                         {manuItems}
//                     </ul>
//                 </div>
//             </div>            
//         </div>

//     );
// };

// export default Navbar;



import React, { useState } from 'react'
import { manuItems } from '../../../portfolio';

const Navbar = () => {
    // let Links =[
    //   {name:"HOME",link:"/"},
    //   {name:"SERVICE",link:"/"},
    //   {name:"ABOUT",link:"/"},
    //   {name:"BLOG'S",link:"/"},
    //   {name:"CONTACT",link:"/"},
    // ];
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

