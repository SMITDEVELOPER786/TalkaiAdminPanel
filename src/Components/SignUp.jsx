import React from 'react';
import shadow from "../assets/shadow.png";
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className='bg-main py-20 relative'>
      {/* Shadow image */}
      <img src={shadow} alt="shadow" className='h-[75%] py-20 w-[70%] mx-auto ' />

      {/* Login section */}
      <section className="rounded-md absolute top-96  md:top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 bg-black/80 p-2 w-full max-w-lg   ">
        <div className="flex flex-col items-center justify-center rounded-3xl border-gray-600 border-2 shadow-2xl bg-main px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2">
              <h1 className='text-center font-bold text-white text-3xl'>Talkai247</h1>
            </div>
            <p className="mt-2 text-base text-center text-white">Welcome Sign Up for Free!</p>
            <form action="#" method="POST" className="mt-8">
  <div className="space-y-5">
    <div>
    <div className="mt-2 bg-white rounded-full flex items-center">
        <span className="pl-3">
        <Icon  icon="fa-solid:user" width="18" height="18" />
        </span>
        <input
          className="flex h-10 w-full outline-none bg-transparent px-3 py-2 text-sm placeholder:text-gray-400"
          type="text"
          placeholder="Enter Your Name"
          id="email"
        />
      </div>
    <div className="mt-2 bg-white rounded-full flex items-center">
        <span className="pl-3">
        <Icon  icon="vaadin:phone" width="18" height="18" />
        </span>
        <input
          className="flex h-10 w-full outline-none bg-transparent px-3 py-2 text-sm placeholder:text-gray-400"
          type="number"
          placeholder="Enter Your Contact"
          id="email"
        />
      </div>
      <div className="mt-2 bg-white rounded-full flex items-center">
        <span className="pl-3">
        <Icon  icon="eva:email-fill"  width="18" height="18" />
        </span>
        <input
          className="flex h-10 w-full outline-none bg-transparent px-3 py-2 text-sm placeholder:text-gray-400"
          type="email"
          placeholder="Email Address"
          id="email"
        />
      </div>

      <div>
      <div className="mt-2 bg-white rounded-full flex items-center">
        <span className="pl-3">
        <Icon icon="heroicons-solid:lock-open" width="20" height="20" />
        </span>
        <input
          className="flex h-10 w-full outline-none bg-transparent px-3 py-2 text-sm placeholder:text-gray-400"
          type="password"
          placeholder="Your Password"
          id="password"
        />
      </div>
    </div>



    </div>
   
    <div>
      <p className='text-center text-gray-400'>or continue with</p>
    </div>
  </div>
</form>

            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex text-white w-full items-center justify-center rounded-full bg-[#FE7E29] px-3.5 py-2.5 font-semibold transition-all duration-200"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign up with Google
              </button>


<Link to='/home/assistants'>
              <button
                type="button"
                className="relative mt-2 inline-flex text-white w-full items-center justify-center rounded-full bg-[#55E2CA] px-3.5 py-2.5 font-semibold transition-all duration-200"
              >
                <span className="mr-2 inline-block"></span>
              Sign Up
              </button>


              </Link>

              <p className='text-center text-white text-sm'>Forgot your password?</p>
              <p className='text-center text-white text-sm'>Have an account? <Link to='/login'><span className='text-[#55E2CA]'>Login</span></Link></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
