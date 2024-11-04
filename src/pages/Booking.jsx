import React from 'react'

export default function Booking() {
  return (
    <section className='bg-blue-900'>




     <div className='py-20'>
<div className='bg-slate-200 lg:w-[1300px] w-full m-auto rounded-md py-10'>
            <div className='flex gap-2 mb-6 px-10'>
                <button className='bg-white py-3 px-6 rounded-md font-extrabold'>Local</button>
                <button className='bg-white py-3 px-6 rounded-md'>Internaltional</button>
            </div>
              
              <div className='flex gap-8 mb-10 px-10'>
            <div>
             
        <label htmlFor="one way">One Way</label>
        <input type="radio" name='lang' value='one way' id='one way' />
    </div>

    <div>
             
        <label htmlFor="Round trip">Round Trip</label>
        <input type="radio" name='lang' value='round trip' id='round trip' />
    </div>

    </div>

    <div className='flex flex-col lg:flex-row md:flex-row justify-between gap-5 md:px-5 px-3 mb-10'>
    <div>
        <label className='block' htmlFor="departure">Departure</label>
        <select className='lg:w-[250px] w-full h-12 border border-transparent' name="" id="">
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
        <input className='lg:w-[250px] w-full h-12 border border-transparent' type="text" placeholder=' Departure Date' />
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


    <div className='px-10 py-10'>
        <button className='bg-blue-500 text-white py-4 px-16 rounded-md'>Search Availability</button>
    </div>
            </div>

            </div>
    </section>


  )
}
