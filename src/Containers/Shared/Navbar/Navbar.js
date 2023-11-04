import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { FaWindowClose } from 'react-icons/fa';


const Navbar = () => {

    const manuItems = <>

        <li> <Link className='py-3 px-2 inline-block' to="/" >Home</Link> </li>
        <li> <Link className='py-3 px-2 inline-block' to="/about" >About</Link> </li>
        <li> <Link className='py-3 px-2 inline-block' to="/projects" >Projects</Link> </li>
        <li> <Link className='py-3 px-2 inline-block' to="/skills" >Skills</Link> </li>
        <li> <Link className='py-3 px-2 inline-block' to="/achievments" >Achievments</Link> </li>
        <li> <Link className='py-3 px-2 inline-block' to="/problem_solving" >Problem Solving</Link> </li>
        <li> <Link className='py-3 px-2 inline-block' to="/blogs" >Blogs</Link> </li>
        <li> <Link className='py-3 px-2 inline-block' to="/contact" >Contact me</Link> </li>
    </>

    const [open, setOpen] = useState(true);

    return (
        <nav className="bg-white mt-5">
            <div className="flex items-center font-medium justify-around">
                <div className="z-50 py-5 md:w-auto w-full flex justify-between">
                    {/* <img src={Logo} alt="logo" className="md:cursor-pointer h-9" /> */}
                    <p className='md:cursor-pointer' >Sujon Hasan</p>

                    <div className="text-3xl lg:hidden" onClick={() => setOpen(!open)}>
                        {
                            open ?
                                <FaWindowClose></FaWindowClose>
                                :
                                <BiMenu></BiMenu>
                        }
                    </div>
                </div>
                <ul className="md:flex hidden uppercase items-center gap-8">
                    {manuItems}
                </ul>
                {/* Mobile nav */}
                <ul
                    className={`
        lg:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
                >
                    {manuItems}
                    
                </ul>
            </div>
        </nav>

    );

};

export default Navbar;

