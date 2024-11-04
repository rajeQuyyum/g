import React from 'react'
import { HiUsers } from "react-icons/hi";
import { HiHandThumbUp } from "react-icons/hi2";

export default function About() {
  return (
    


    <section>


      <div className='flex flex-col-reverse md:flex-row justify-between items-center md:px-24 px-5 gap-10 py-20 bg-[#e3e7e7]'>

        <div className='md:w-[600px] w-full flex flex-col gap-4'>
          <h1 className='text-3xl font-bold text-blue-900'>About Us</h1>
          <p className='text-gray-500 text-sm font-light'>Founded in 1980, GUO Transport Company Ltd. is a division of G. U. Okeke & Sons Ltd. A household name in the transportation industry and one of the largest provider of intercity and interstate transportation, serving more than 200 destinations across Nigeria and West Africa with a modern, environmentally friendly fleet. The company has become an icon in the transportation industry, providing safe, enjoyable and affordable travel to millions of passengers annually. While GUO transport Co. is well known for its regularly scheduled passenger service, nationwide logistics solutions.</p>
        </div>

        <div className='md:w-[500px] w-full'>
          <img className='rounded-md' src="https://guotransport.com/assets/images/about1.png" alt="" />
        </div>
      </div>



      <div className='flex flex-col md:flex-row justify-between md:px-24 px-3 py-16 gap-5 bg-[#e5f1f1]'>

        <div className='md:block hidden '>
          <img className='' src="https://guotransport.com/assets/images/about2.png" alt="" />
        </div>

        <div className='flex flex-col gap-20 justify-center'>
          <div className='md:w-[500px] w-full'>
            <h1 className='text-blue-900 text-2xl font-bold mb-5'>Mission Statement</h1>
            <p className='text-gray-500 text-sm font-normal'>A dynamic service organisation that provides timely transportation and logistics solutions with the highest level of excellence and customer satisfaction, as well as exceptional safety, comfort, and economic value to our customers and partners.</p>
          </div>
          <div className='md:w-[500px] w-full'>
            <h1 className='text-blue-900 text-2xl font-bold mb-5'>Our Vision</h1>
            <p>To be recognised amongst current and prospective customers as the model of excellence in the transportation industry through integration of innovative business practices and consistent emphasis on customer satisfaction.</p>
          </div>
        </div>
      </div>


      <div className='bg-white py-24'>


        <h1 className='mb-10 text-center text-blue-900 text-3xl font-medium'>Our Core Values</h1>

        <div className='flex flex-col md:flex-row justify-between md:px-24'>

          <div className='md:w-[350px] w-full flex flex-col gap-1 items-center'>
        <HiUsers className='border-[10px] border-green-500 w-20 h-20 rounded-full mb-5' />
        <h1 className='mb-2 text-3xl font-medium'>Safety</h1>
        <p className='text-gray-400 text-sm font-light'>Our top goal is safe transportation. Skilled</p>
        <p className='text-gray-400 text-sm font-light'>drivers, well-maintained vehicles, and</p>
        <p className='text-gray-400 text-sm font-light'>customer-oriented service ensure reliability.</p>
        <p className='text-gray-400 text-sm font-light'>We adapt to changing needs and strive to</p>
        <p className='text-gray-400 text-sm font-light'>exceed expectations through friendly</p>
        <p className='text-gray-400 text-sm font-light'>experiences.</p>
        </div>

        <div className='md:w-[300px] w-full flex flex-col gap-4 items-center'>
        <HiHandThumbUp className=' border-[10px] border-blue-950 w-20 h-20 rounded-full' />
        <h1 className='text-3xl font-medium'>Community</h1>
        <p className='text-gray-400 text-sm font-light'>We are rooted in the community. As a local</p>
        <p className='text-gray-400 text-sm font-light'>company, we are owned, staffed, and</p>
        <p className='text-gray-400 text-sm font-light'>operated locally. Our commitment to the</p>
        <p className='text-gray-400 text-sm font-light'>communities we serve drives our</p>
        <p className='text-gray-400 text-sm font-light'>philanthropic efforts through donations and</p>
        <p className='text-gray-400 text-sm font-light'>scholarships.</p>
        </div>



        <div className='md:w-[300px] w-full flex flex-col gap-4 items-center'>
        <HiHandThumbUp className='border-[10px] border-purple-900 w-20 h-20 rounded-full'  />
        <h1 className='text-3xl font-medium'>Teamwork</h1>
        <p className='text-gray-400 text-sm font-light'>Teamwork is our key to success. Our</p>
        <p className='text-gray-400 text-sm font-light'>employees uphold honesty, trust, and</p>
        <p className='text-gray-400 text-sm font-light'>thical standards. We prioritize</p>
        <p className='text-gray-400 text-sm font-light'>accountability and teamwork to create a</p>
        <p className='text-gray-400 text-sm font-light'>customer-friendly environment.</p>
        </div>
        </div>
      </div>
    </section>
  )
}
