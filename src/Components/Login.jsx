import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'
function Login() {
  return (

    <div className="flex justify-center items-center h-screen">
      <div className="bg-black  w-96 p-4 rounded-3xl">
        <h1 className="text-white text-2xl text-center font-bold">Talkai247</h1>
        <p className='text-white text-sm text-center py-2'>Welcome back! Please log into your account</p>
        {/* <div className="flex items-center mt-4">

          <input type="text" className="w-full p-2 rounded-full relative" placeholder="Email" />
          <Icon icon="heroicons-solid:lock-open" className='absolute left-0 top-2' color='black' width="36" height="36" />
        </div> */}
         <div>

      <div className="relative mt-2 rounded-md shadow-sm py-2">     
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Icon icon="fa-solid:user" color="black" width="22" height="22" />
        
                </div>
        <input
          type="text"

          className="w-full rounded-3xl outline-none border border-gray-500 py-1.5 pl-14 px-12  text-gray-900  placeholder:text-gray-40 sm:text-sm sm:leading-6"
          placeholder="Email"
        />
      
      </div>
    </div>
    <div>
      <div className="relative mt-2 rounded-md shadow-sm">     
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Icon icon="heroicons-solid:lock-open" width="22" color='black' height="22" />                </div>
        <input
          type="text"

          className="w-full rounded-3xl outline-none border border-gray-500 py-1.5 pl-14 px-12  text-gray-900  placeholder:text-gray-40 sm:text-sm sm:leading-6"
          placeholder="Password"
        />
      
      </div>
    </div>

        <p className='text-white text-sm text-center py-2'>or continue with</p>
        <button className="w-full mt-2 flex justify-center items-center gap-3 bg-orange-500 text-white py-1.5 px-2 rounded-full">
        <Icon icon="eva:google-fill" width="30" height="30" />
          
          Sign in with Google</button>

        <Link to='/home/assistants'> <button className="w-full mt-4 bg-[#55E2CA] text-white p-2 rounded-full"> 
    Login
    </button> </Link>


        <p className='text-white text-sm text-center py-2 font-thin'>Forgot your <span className='font-semibold'>password</span></p>
        <p className='text-white text-sm text-center py-2 font-thin'>Don't have an account? <span className='font-semibold text-green-400'> Sign up</span></p>


      </div>
    </div>
  )
}

export default Login
