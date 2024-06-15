import React, { useState, Fragment } from 'react';
import shadow from "../assets/shadow.png";
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { register_user_post_async, verify_otp_post_async } from '../Store/Service/AuthService';
import { Dialog, Transition } from '@headlessui/react'
import OtpInput from 'react-otp-input';


function SignUp() {

  let [isOpen, setIsOpen] = useState(false)


  const [userOtp, setUserOtp] = useState()



  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


  const nav = useNavigate()

  const dispatch = useDispatch()

  const [otp, setOtp] = useState('');


  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };





  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name) {
      toast.error('Please enter your name.');
    } else if (!formData.email) {
      toast.error("Please enter your email")
    }
    else if (!formData.password) {
      toast.error("Please enter your password")
    }
    else if (!formData.contact) {
      toast.error("Please enter your Phone Number")
    }

    else if (formData.name && formData.email && formData.password && formData.contact) {

      const post_data = {
        name: formData.name,
        email: formData.email,
        phone: formData.contact,
        password: formData.password
      }


      await dispatch(register_user_post_async(post_data))
        .then(res => {
          // toast.success(res.error.message)

          setUserOtp(res.payload.data.otp)

          if (res?.payload?.message) {

            toast.success(res.payload.message)
            setTimeout(() => {
              openModal()
              // nav("/login")

            }, 2000);


          } else {
            toast.warning(res.error.message)
          }



        })
        .catch(e => {
          console.log(e);

        });






    }





  };


  const handleVerifyOtp = async () => {



    if (otp === userOtp) {



      const post_data = {
        otp
      }


      await dispatch(verify_otp_post_async(post_data))
        .then(res => {

          if (res?.payload?.message) {
            toast.success(res.payload.message)

            closeModal()


            setTimeout(() => {
              nav("/login")

            }, 2000);

          } else {
            toast.warning(res.error.message)

          }





        })
        .catch(e => {
          console.log(e);

        });






    }

    else {
      toast.warning("invalid otp")

    }



    // nav("/login")






  }





  return (
    <div className='bg-main py-20 relative'>
      {/* Shadow image */}
      <Toaster position='top-right' />
      <img src={shadow} alt="shadow" className='h-[75%] py-20 w-[70%] mx-auto ' />

      {/* Login section */}
      <section className="rounded-md absolute top-96 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 p-2 w-full max-w-lg">
        <div className="flex flex-col items-center justify-center rounded-3xl border-gray-600 border-2 shadow-2xl bg-main px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2">
              <h1 className='text-center font-bold text-white text-3xl'>Talkai247</h1>
            </div>
            <p className="mt-2 text-base text-center text-white">Welcome Sign Up for Free!</p>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <div className="mt-2 bg-white rounded-full flex items-center">
                    <span className="pl-3">
                      <Icon icon="fa-solid:user" width="18" height="18" />
                    </span>
                    <input
                      className="flex h-10 w-full outline-none bg-transparent px-3 py-2 text-sm placeholder:text-gray-400"
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mt-2 bg-white rounded-full flex items-center">
                    <span className="pl-3">
                      <Icon icon="vaadin:phone" width="18" height="18" />
                    </span>
                    <input
                      className="flex h-10 w-full outline-none bg-transparent px-3 py-2 text-sm placeholder:text-gray-400"
                      type="number"
                      name="contact"
                      placeholder="Enter Your Contact"
                      value={formData.contact}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mt-2 bg-white rounded-full flex items-center">
                    <span className="pl-3">
                      <Icon icon="eva:email-fill" width="18" height="18" />
                    </span>
                    <input
                      className="flex h-10 w-full outline-none bg-transparent px-3 py-2 text-sm placeholder:text-gray-400"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
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
                      onChange={handleChange}
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
                  Sign Up
                </button>

                <p className='text-center text-white text-sm'>Forgot your password?</p>
                <p className='text-center text-white text-sm'>Have an account? <Link to='/login'><span className='text-[#55E2CA]'>Login</span></Link></p>
              </div>
            </form>
          </div>
        </div>
      </section>












      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black-500 bg-opacity-50 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#26292E] p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-[#55E3CB]"
                  >
                    Please Verify Your OTP
                  </Dialog.Title>
                  <div className="mt-2">
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={6}

                      renderSeparator={<span>-</span>}
                      renderInput={(props) => <input {...props} className='!w-full h-14 rounded-lg' />}
                    />
                  </div>


                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleVerifyOtp}
                    >
                      Verify your otp
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>









    </div>
  );
}

export default SignUp;
