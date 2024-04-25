import React from "react";
import card from "../assets/PchkJS.png"
function Blogs() {
  return (
    <>
      <div className="  bg-white py-10">
       <div className=" flex flex-col  justify-center items-center">
       <h1 className="text-center  pt-10 font-bold text-base md:text-2xl ">
          LATEST BLOGS AND NEWS
        </h1>

       </div>
        <div className="bg-[#55E3CB] mt-2 w-14 md:w-20 h-2   flex justify-center mx-auto" />
        <p className="text-sm md:px-40 sm:px-20 pt-5 text-center text-black-500">
        Talkai247’s integration of sophisticated AI technologies in telecommunication not only promises operational efficiency for businesses but also ensures a more personalized and responsive experience for customers.
        </p>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 py-5   justify-center justify-items-center gap-5  grid-cols-1">
     
     
        <div class="max-w-xs rounded overflow-hidden shadow-lg">
  <img class="w-full" src={card} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-[#FE7E29] text-xl mb-2 text-center">Revolutionizing Order 
Processing: The AI 
Receptionist Solution</div>
    <p class="text-black-500 text-sm text-center">
    Talkai247’s integration of sophisticated AI technologies in telecommunication not only promises operational efficiency for businesses but also ensures a more personalized and responsive experience for customers.
    </p>
  </div>
  <div class="px-6 pt-4 text-center pb-2">
    <span class="inline-block  text-sm font-bold text-black-500 mr-2 mb-2">READ MORE</span>
  </div>
</div>





<div class="max-w-xs rounded overflow-hidden shadow-lg">
  <img class="w-full" src={card} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-[#FE7E29] text-xl mb-2 text-center">Revolutionizing Order 
Processing: The AI 
Receptionist Solution</div>
    <p class="text-black-500 text-sm text-center">
    Talkai247’s integration of sophisticated AI technologies in telecommunication not only promises operational efficiency for businesses but also ensures a more personalized and responsive experience for customers.
    </p>
  </div>
  <div class="px-6 pt-4 text-center pb-2">
    <span class="inline-block  text-sm font-bold text-black-500  mr-2 mb-2">READ MORE</span>
  </div>
</div>
<div class="max-w-xs rounded overflow-hidden shadow-lg">
  <img class="w-full" src={card} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-[#FE7E29] text-xl mb-2 text-center">Revolutionizing Order 
Processing: The AI 
Receptionist Solution</div>
    <p class="text-black-500 text-sm text-center">
    Talkai247’s integration of sophisticated AI technologies in telecommunication not only promises operational efficiency for businesses but also ensures a more personalized and responsive experience for customers.
    </p>
  </div>
  <div class="px-6 pt-4 text-center pb-2">
    <span class="inline-block  text-sm font-bold text-black-500 mr-2 mb-2">READ MORE</span>
  </div>
</div>
           
        </div>
      </div>
    </>
  );
}

export default Blogs;