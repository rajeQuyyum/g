import React from 'react'
import guo from '../assets/guo.jpg'
import { FaPlaneDeparture } from "react-icons/fa";
import { FaTruckFront } from "react-icons/fa6";
import { BiCollapseHorizontal } from "react-icons/bi";
import { FaTruckMoving } from "react-icons/fa";


export default function Home() {
  return (
    

   <section>
    
       
        
         
      <div className='flex items-center justify-center py-20' >
      <img className='md:w-[1300px] w-full rounded-md' src={guo} alt="" />
      </div>  


               <div className='bg-slate-200 lg:w-[1300px]  w-full m-auto rounded-md'>
            <div className='flex gap-2 mb-6 px-10'>
                <button className='bg-white py-3 px-6 rounded-md font-extrabold'>Local</button>
                <button className='bg-white py-3 px-6 rounded-md'>Internaltional</button>
            </div>
              
              <div className='flex gap-8 mb-10 px-10'>
            <div className='flex gap-1 items-center'>
             
        <label htmlFor="one way">One Way</label>
        <input type="radio" name='lang' value='one way' id='one way' />
    </div>

    <div className='flex gap-1 items-center'>
             
        <label htmlFor="Round trip">Round Trip</label>
        <input type="radio" name='lang' value='round trip' id='round trip' />
    </div>

    </div>

    <div className='flex flex-col lg:flex-row md:flex-row justify-between gap-5 md:px-5 px-3 mb-10'>
    <div className=''>
        <label className='block' htmlFor="departure">Departure</label>
        <select className='lg:w-[250px]  w-full h-12 border border-transparent' name="" id="">
                <option value="">Select Departure</option>
                <option value="react">react</option>
                <option value="vue">vue</option>
                <option value="angular">angular</option>
                <option value="node">node</option>
                <option value="CS">coffeeScript</option>
            </select>
    </div>

    <div>
        <label className='block' htmlFor="destination">Destination</label>
        <select className='lg:w-[250px] w-full h-12 border border-transparent' name="" id="">
                <option value="">Select Destination</option>
                <option value="react">react</option>
                <option value="vue">vue</option>
                <option value="angular">angular</option>
                <option value="node">node</option>
                <option value="CS">coffeeScript</option>
            </select>
    </div>

    <div>
        <label className='block' htmlFor="departure date">Departure Date</label>
        <input className='lg:w-[250px] w-full  h-12 border border-transparent' type="text" placeholder=' Departure Date' />
    </div>

    <div>
        <label className='block' htmlFor="passengers">Passengers</label>
        <select className='lg:w-[250px] w-full h-12 border border-transparent' name="" id="">
                <option value="">Adult:1 Children: 0</option>
                <option value="react">react</option>
                <option value="vue">vue</option>
                <option value="angular">angular</option>
                <option value="node">node</option>
                <option value="CS">coffeeScript</option>
            </select>
    </div>

    </div>


    <div className='md:px-10 px-3'>
        <button className='bg-blue-500 text-white py-4 md:px-16 rounded-md  w-[400px] '>Search Availability</button>
    </div>
            </div>




            <div className='bg-blue-50 py-[50px] mt-10'>

                <div className='lg:flex flex-col-reverse md:flex-row  px-5   md:px-16'>
                    <div className='md:mb-0 mb-10'>
                    <h1 className='font-medium  text-2xl text- '>What Makes Us Special</h1>
                    <p className='mb-10 text-gray-400 font-light'>Call us to speak to a member of our team. We are always happy to help.</p>

                    <div className='flex flex-wrap gap-10'>
                        <div className='md:w-[300px] w-full flex flex-col gap-2'>
                        <FaTruckFront className='text-blue-900 w-[50px] h-10' />
                            <h1 className='text-sky-900 text-2xl font-medium'>Charter Service</h1>
                            <p className='text-gray-400'>Travel like an elite from your desired location to your choice destination at affordable prices</p>
                        </div>
                        <div className='md:w-[300px] w-full flex flex-col gap-2'>
                        <BiCollapseHorizontal className='text-blue-900 w-[50px] h-10' />
                            <h1 className='text-sky-900 text-2xl font-medium'>Round Trip Service</h1>
                            <p className='text-gray-400'>Make a round trips with us and get qualified for a discount while offer lasts.</p>
                        </div>
                        <div className='md:w-[300px] w-full flex flex-col gap-2'>
                        <FaPlaneDeparture className='text-blue-900 w-[50px] h-10' />
                            <h1 className='text-sky-900 text-2xl font-medium'>Hotel/Airport Pickup</h1>
                            <p className='text-gray-400'>Whether you are travelling for business or pleasure, it is always sensible to arrive early.</p>
                        </div>
                        <div className='md:w-[300px] w-full flex flex-col gap-2'>
                        <FaTruckMoving className='text-blue-900 w-[50px] h-10' />
                            <h1 className='text-sky-900 text-2xl font-medium'>Haulage</h1>
                            <p className='text-gray-400'>We operate a modern fleet of over 80 vehicles dedicated to our haulage services.</p>
                        </div>
                    </div>
                    </div>


                    <img src="https://guotransport.com/assets/images/sideImg1.png" alt="" />
                </div>


            </div>


            <div className='bg-slate-200 h-[200px]'>
                <h1 className='font-normal text-3xl text-blue-900 py-10 px-10'>News Alert</h1>
            </div>



            <div className='md:flex justify-between bg-blue-900 px-10 md:py-0 py-6 text-white'>
                <div className='flex flex-col justify-center gap-5'>
                    <h1 className='text-white md:text-3xl md:w-[400px] text-2xl w-full'>Subscribe to our Newsletter</h1>
                    <div className='md:flex gap-5 text-white'>
                    <input className='bg-transparent border border-gray-500- md:w-[500px] w-full text-white h-14 md:mb-0 mb-5' type="text" placeholder='Enter Email Address' />
                    <button className='bg-blue-500 text-white py-2 px-5 rounded-md md:w-[100px] w-full  '>Subscribe</button>
                    </div>
                </div>

                <div>
                    <img className='md:block hidden' src="https://guotransport.com/assets/images/man-in-blue-suit.png" alt="" />
                </div>
            </div>
            
</section>




    
   



           
            
          
    
  )
}

