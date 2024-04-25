import React, { useRef, useState } from 'react';
import robot from "../assets/robot.png"
import star from "../assets/stars.png"
import { Swiper, SwiperSlide } from 'swiper/react';

import profile from "../assets/profile.png"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

function About() {
  return (


    <div className='bg-white'>
        

    <img src={robot} alt="robot" className='mx-auto   w-52' />
    <p className='text-center font-bold text-lg md:text-3xl uppercase'>What People Think about Us</p>
    <div className="bg-[#55E3CB] mt-2 w-20 md:w-10 h-2    flex justify-center mx-auto" />

    <Swiper
    
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        
        slideShadows: true,
      }}

      pagination={true}
      className="mySwiper"
      style={{ maxWidth: '70%', maxHeight: '150vh',  marginTop:10 }}
    >
        <SwiperSlide>

            <div className='mt-5 border py-10   pt-5 border-gray-400 rounded-xl  '>
            <img src={profile} alt='...' className='mx-auto'/>
          <h1 className='text-center font-bold text-2xl text-[#FE7E29]'>Melony Ann</h1>
          <p className='text-sm mx-5 md:mx-10 py-2 font-normal'>

          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
          </p>
<img src={star} alt="rating"  className='mx-auto'/>


            </div>


        </SwiperSlide>


        <SwiperSlide>

<div className='mt-5 border py-10   pt-5 border-gray-400 rounded-xl  '>
<img src={profile} alt='...' className='mx-auto'/>
<h1 className='text-center font-bold text-2xl text-[#FE7E29]'>Melony Ann</h1>
<p className='text-sm mx-5 md:mx-10 py-2 font-normal'>

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
</p>
<img src={star} alt="rating"  className='mx-auto'/>


</div>


</SwiperSlide>


<SwiperSlide>

<div className='mt-5 border py-10   pt-5 border-gray-400 rounded-xl  '>
<img src={profile} alt='...' className='mx-auto'/>
<h1 className='text-center font-bold text-2xl text-[#FE7E29]'>Melony Ann</h1>
<p className='text-sm mx-5 md:mx-10 py-2 font-normal'>

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
</p>
<img src={star} alt="rating"  className='mx-auto'/>


</div>


</SwiperSlide>

      
      </Swiper>


    </div>
  )
}

export default About