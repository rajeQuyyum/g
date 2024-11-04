import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    
    <footer className='bg-black text-white py-20 md:px-16 px-5'>
    <div className='flex flex-wrap justify-between md:gap-0  gap-6 mb-5 '>
        <div className='md:w-[200px] w-full'>
            <h1 className='text-slate-300 text-4xl font-extrabold'>GUO</h1>
            <p className='text-slate-400'>We embrace creativity and continuous improvement, constantly seeking new and innovative approaches to optimize logistics processes, enhance efficiency, and adapt to evolving market dynamics.</p>
        </div>

        <div className='flex flex-col md:w-[200px] w-[180px] text-slate-400 gap-5'>
            <h1 className='text-3xl font-normal'>Socials</h1>
            <l>Facebook</l>
            <l>instagram</l>
            <l>Twitter</l>
            <l>Lindkedin</l>
        </div>


        <div className='md:w-[200px] w-[180px] text-slate-400'>
            <h1 className='text-3xl font-normal mb-5'>Quick Linkss</h1>
            <ul className='flex flex-col gap-3'>
            <li><NavLink to="/"></NavLink>Home</li>
            <li><NavLink to="bookings">Bookings</NavLink></li>
            <li><NavLink to="terminals">Terminals</NavLink></li>
            <li><NavLink to="services">Services</NavLink></li>
            <li><NavLink to="about">About Us</NavLink></li>
            <li><NavLink to="contact">Contact</NavLink></li>
            <li><NavLink to="faq">FAQ</NavLink></li>

            </ul>
            
        </div>


         
        <div className='md:w-[200px] w-[190px] text-slate-400 flex flex-col gap-4'>
            <h1 className='text-3xl font-normal'>Contact Us</h1>
            <div className='flex gap-2 items-center'>
            <IoIosCall />
            <h1>(+234) 7000-121-000</h1>
            </div>
            <div className='flex gap-2 items-end'>
            <FaWhatsapp className='text-green-500' />
            <h1>(+234) 814-498-8273</h1>
            </div>
            <div className='flex gap-2 items-center'>
            <FaWhatsapp className='text-green-500' />
            <h1>(+234) 814-498-8273</h1>
            </div>
            <div className='flex gap-2 items-center'>
            <FaWhatsapp className='text-green-500' />
            <h1>(+234) 814-498-8273</h1>
            </div>
            
            <div>
                <h1>Feedback@guotransport.com</h1>
            </div>
            </div>

            <div className='text-slate-400  md:w-[150px] w-[150px] flex flex-col gap-4'>
                <h1 className='text-3xl font-normal'>Support</h1>
                <p>Terms & Condition</p>
                <p>Privacy Policy</p>
            </div>
           

    </div>

  
      <div className='md:w-[1200px] w-full block m-auto mb-5'>
        <hr />
      </div>

      <div className='text-center  font-light text-slate-300'>
        <h1>Copyright © GUOTransport. All rights reserved</h1>
      </div>



    </footer>
  )
}
