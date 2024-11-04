import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

export default function Contact() {
  return (


    <section className='py-10'>
      <div className='bg-blue-900 text-white lg:w-[1250px] w-full h-[400px] block m-auto rounded-md mb-10'>

      <div className='flex flex-col justify-center h-[400px] px-20 gap-2'>
        <h1 className='text-3xl font-medium'>Contact Us</h1>
        <p className='text-sm font-normal'>We are a call away. We have created multiple channels through</p>
        <p className='text-sm font-normal'>which you can reach us. Try one out today!</p>

      </div>
      </div>


    <div className='bg-white lg:w-[1250px] w-full block m-auto rounded-md py-10 mb-10'>
      <div className='w-[1200px] mb-10 m-auto block'>
      <hr />
      </div>

      <div className='lg:w-[1200px] w-full flex flex-col gap-2 m-auto px-2 mb-10' >
        <input className='border boder h-20 rounded-md' type="text" placeholder='First Name' />
        <input className='border boder h-20 rounded-md' type="text"  placeholder='Last Name'/>
        <input className='border boder h-20 rounded-md' type="text" placeholder='Email' />
        <textarea className='border boder h-40 rounded-md' name="" id="" placeholder='Message'></textarea>
      </div>

      <button className='bg-blue-600 block m-auto lg:w-[1200px] w-full h-14   rounded-md text-white'>Submit</button>
    </div>



    <div className=' rounded-l-xl rounded-r-xl bg-[#44567c] text-white lg:w-[1250px] w-full h-[400px] block m-auto'>

      <div className='flex flex-col justify-center h-[400px] px-20  '>
        <div className='flex flex-col gap-1 mb-5'>
        <h1 className='text-3xl font-medium'>Reach Us</h1>
        <p className='lg:w-[450px] w-full text-sm font-light'>Call us to speak to a member of our team. We are always happy to help.</p>
        </div>

        <div className='flex gap-3'>
        <FaTwitter className='w-10 h-20' />
        <FaFacebookSquare className='w-10 h-20' />
        <FaInstagram className='w-10 h-20' />
        <CiLinkedin className='w-10 h-20' />

        </div>
      </div>
    </div>

       
       

      


    </section>


    
  )
}
