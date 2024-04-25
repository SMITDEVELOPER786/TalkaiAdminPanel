import React from "react";

function Business() {
  return (
    <div className="    overflow-hidden">
      <h1 className="uppercase text-center text-lg md:text-3xl pt-10 font-extrabold">
        Join Us and Automate Your <br /> Business Calls
      </h1>
      <div className="bg-[#55E3CB] mt-2 w-14 md:w-20 h-2   flex justify-center mx-auto" />

      <p className="text-center mx-10 md:mx-32 text-sm text-gray-500 py-5">
        Talkai247’s integration of sophisticated AI technologies in
        telecommunication not only promises operational efficiency for
        businesses but also ensures a more personalized and responsive
        experience for customers. With services covering everything from call
        handling to automated invoicing, Talkai247 stands as a comprehensive
        solution for modern business communication needs.
      </p>

      <div class="text-white flex justify-center items-center text-center py-4 relative">
        <div className="bg-[#FE7E29]  w-full md:block hidden h-4 -z-10 absolute top-9 " />

        <div class="flex justify-between md:flex-row flex-col items-center rounded-lg md:rounded-full shadow-xl bg-gray-800 mx-6 md:w-[60%] w-full">
          <div class="flex-1">
            <div class="text-2xl font-bold text-[#FE7E29]">+5.2k</div>
            <div>Happy Customers</div>
          </div>

          <div class="border-t md:border-l md:border-t-0 border-black-500 md:block hidden w-full md:w-auto h-10"></div>

          <div class="flex-1 mt-4 md:mt-0">
            <div class="text-2xl font-bold text-[#FE7E29]">100%</div>
            <div>Work Quality</div>
          </div>

          <div class="border-t md:border-l md:border-t-0 border-black-500 md:block hidden w-full md:w-auto h-10"></div>

          <div class="flex-1 mt-4 md:mt-0">
            <div class="text-2xl font-bold text-[#FE7E29]">+700.9k</div>
            <div>Calls Handled</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;
