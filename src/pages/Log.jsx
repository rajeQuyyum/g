import React from 'react'

export default function Log() {
  return (
    

    <section className='py-20'>

      <h1 className='text-center text-3xl font-semibold pb-16'>Login</h1>

      <div className='flex flex-col items-center gap-5 mb-3'>
        <div>
        <label className='block' htmlFor="email or phone">Email Or Phone</label>
        <input className='border border-gray-400 md:w-[500px] w-[400px]  h-12 rounded-md' type="text" name="" id="" />
        </div>

        <div>
        <label className='block ' htmlFor="password">Password</label>
        <input className='border border-gray-400 md:w-[500px] h-12 w-[400px] rounded-md' type="password" name="" id="" />
        </div>
      </div>

      
      <button className='block m-auto bg-blue-900 md:w-[500px] w-[400px] h-12 rounded-md text-white mb-3'>Login</button>
      


        <div className='text-center'>
      <h1 className='text-black text-lg'><span className='text-lg font-extralight text-gray-400'>Don't have an account? </span>   Sign Up </h1>
      </div>

      <div className='text-center'>
      <h1 className='text-black text-lg'><span className='text-lg font-extralight text-gray-400'>Forgot you password?</span> Reset here</h1>
      </div>

    </section>
  )
}
