import React, { useState } from 'react';
import shadow from "../assets/shadow.png";
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner'
import { useDispatch } from 'react-redux';
import { login_user_post_async } from '../Store/Service/AuthService';




function Login() {

  const nav = useNavigate()

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };









  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if either email or password is blank
    if (!formData.email && !formData.password) {
      toast.error('Please enter both email and password.');

    } else if (!formData.email) {
      toast.error('Please enter email .');

    }
    else if (!formData.password) {
      toast.error('Please enter Password.');

    } else if (formData.email && formData.password) {

      const post_data = {
        email: formData.email,
        password: formData.password
      }

      console.log(post_data)

      await dispatch(login_user_post_async(post_data))
        .then((res) => {
          // toast.success(res.error.message)
          console.log(res)
          if (res?.payload?.message) {
            localStorage.setItem("user", JSON.stringify(res.payload))
            toast.success(res.payload.message)
            setTimeout(() => {
              nav("/home/assistants")

            }, 2000); // 2000 milliseconds = 2 seconds (adjust as needed)


          } else {
            toast.warning(res.error.message)
          }







        })
        .catch(e => {

          console.log(e, "....");
        });




    }

  };

  return (
    <div className='bg-main py-20 relative'>
      <Toaster position='top-right' />
      {/* Shadow image */}
      <img src={shadow} alt="shadow" className='h-[75%] py-20 w-[70%] mx-auto ' />

      {/* Login section */}
      <section className="rounded-md absolute top-96  md:top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 bg-black/80 p-2 w-full max-w-lg   ">
        <div className="flex flex-col items-center justify-center rounded-3xl border-gray-600 border-2 shadow-2xl bg-main px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2">
              <h1 className='text-center font-bold text-white text-3xl'>Talkai247</h1>
            </div>
            <p className="mt-2 text-base text-center text-white">Welcome back! Please log into your account</p>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <div className="mt-2 bg-white rounded-full flex items-center">
                    <span className="pl-3">
                      <Icon icon="fa-solid:user" width="18" height="18" />
                    </span>
                    <input
                      className="flex h-10 w-full outline-none bg-transparent px-3 py-2 text-sm placeholder:text-gray-400"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2 bg-white rounded-full flex items-center">
                    <span className="pl-3">
                      <Icon icon="heroicons-solid:lock-open" width="20" height="20" />
                    </span>
                    <input
                      className="flex h-10 w-full outline-none bg-transparent px-3 py-2 text-sm placeholder:text-gray-400"
                      type="password"
                      name="password"
                      placeholder="Your Password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <p className='text-center text-gray-400'>or continue with</p>
                </div>
              </div>
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

                <button
                  type="submit"
                  className="relative mt-2 inline-flex text-white w-full items-center justify-center rounded-full bg-[#55E2CA] px-3.5 py-2.5 font-semibold transition-all duration-200"
                >
                  <span className="mr-2 inline-block"></span>
                  Login
                </button>

                <p className='text-center text-white text-sm'>Forgot your password?</p>
                <p className='text-center text-white text-sm'>Don't have an account? <Link to={"/signup"}><span className='text-[#55E2CA]'>Sign up</span></Link></p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
