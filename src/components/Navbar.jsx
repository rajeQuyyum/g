import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [display, setDisplay] = useState(false)
  return (
    <nav className='flex justify-between bg-white py-5 px-16 items-center'>

        <div>
            <h1 className='text-blue-800 text-5xl font-extrabold'>GUO</h1>
            <p className='text-xs text-blue-800 font-bold'>TRANSPORTCO.</p>
        </div>

        <ul className={`flex flex-col md:flex-row md:w-[500px] justify-between w-full  bg-white items-center gap-2 top-20 py-6 md:py-0 absolute md:static ${display ? 'left-0' : 'left-[-100%]'}`}>
        <li onClick={() => setDisplay(prev => !prev)}><NavLink className='md:hidden block' to="/">Home</NavLink></li>
            <li onClick={() => setDisplay(prev => !prev)}><NavLink to="bookings">Bookings</NavLink></li>
            <li onClick={() => setDisplay(prev => !prev)}><NavLink to="terminals">Terminals</NavLink></li>
            <li onClick={() => setDisplay(prev => !prev)}><NavLink to="services">Services</NavLink></li>
            <li onClick={() => setDisplay(prev => !prev)}><NavLink to="about">About Us</NavLink></li>
            <li onClick={() => setDisplay(prev => !prev)}><NavLink to="contact">Contact</NavLink></li>
            <li onClick={() => setDisplay(prev => !prev)}><NavLink className='bg-blue-900 text-white rounded-md py-2 px-4' to="log">Log in</NavLink></li>
            
        </ul>
        <i className='text-4xl md:hidden' onClick={() => setDisplay(prev => !prev)} ><FaBars /></i>


    </nav>
  )
}
