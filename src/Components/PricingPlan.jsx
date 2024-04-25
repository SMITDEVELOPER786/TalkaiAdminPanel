import React, { useState } from "react";
  import { Icon } from "@iconify/react/dist/iconify.js";

  import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';





  function PricingPlans() {


const [select,setSelect] = useState(true)



    return (
      <>
        <section>
          <div class=" max-w-full mx-auto py-24 bg-white px-6">
            <h1 class="text-center text-4xl text-black font-medium leading-snug tracking-wider">
              Pricing
            </h1>
            <p class="text-center text-lg text-gray-700 mt-2 px-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <div className="bg-[#55E3CB] mt-2 w-14 md:w-20 h-2   flex justify-center mx-auto" />

            <div class="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
              <div class="relative  flex flex-col md:flex-row items-center">

              <Tabs>
      <TabList className={"outline-none border-none flex items-center justify-center font-bold w-80 mx-auto rounded-full shadow-lg bg-main"} >
        <Tab onClick={()=>setSelect(true)} className={`${select ? 'rounded-full !bg-[#55E3CB] ml-1 h-8 pt-1  outline-none w-full my-1 text-center' : 'text-white rounded-full ml-1 h-8 pt-1 text-center  outline-none w-full my-1' }`}>Monthly</Tab>
        <Tab onClick={()=>setSelect(false)} className={`${select ==false ? 'rounded-full !bg-[#55E3CB] mr-1 h-8 pt-1  outline-none w-full my-1 text-center' : 'text-white rounded-full mr-1 h-8 pt-1 text-center  outline-none w-full my-1' }`}>Annually</Tab>
      </TabList>

    <TabPanel className={"flex justify-center flex-col md:flex-row"}>






                <div class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
                  <div class="bg-white text-black rounded-lg  shadow-lg overflow-hidden">
                    <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                      <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                        Enterprise
                      </h1>
                      <p className="text-sm text-center">
                        {" "}
                        Stripe offers everything needed to run an
                      </p>
                    </div>
                    <div class="flex flex-wrap mt-3 px-6 py-20">
                      <ul className="space-y-3">
                        <li class="flex items-center">
                          <Icon
                            icon="lets-icons:check-fill"
                            color="black"
                            width="32"
                            height="32"
                          />

                          <span class="text-gray-700 text-lg ml-1">No setup</span>
                        </li>
                        <li class="flex items-center">
                          <Icon
                            icon="lets-icons:check-fill"
                            color="black"
                            width="32"
                            height="32"
                          />

                          <span class="text-gray-700 text-lg ml-1">No setup</span>
                        </li>
                        <li class="flex items-center">
                          <Icon
                            icon="lets-icons:check-fill"
                            color="black"
                            width="32"
                            height="32"
                          />

                          <span class="text-gray-700 text-lg ml-1">No setup</span>
                        </li>
                        <li class="flex items-center">
                          <Icon
                            icon="lets-icons:check-fill"
                            color="black"
                            width="32"
                            height="32"
                          />

                          <span class="text-gray-700 text-lg ml-1">No setup</span>
                        </li>
                        <li class="flex items-center">
                          <Icon
                            icon="lets-icons:check-fill"
                            color="black"
                            width="32"
                            height="32"
                          />

                          <span class="text-gray-700 text-lg ml-1">No setup</span>
                        </li>
                      </ul>
                    </div>

                    <div class=" flex items-center p-8  uppercase">
                      <button
                        class="mt-3 text-lg font-semibold 
    bg-[#FE7E29] duration-200 w-full text-white rounded-lg 
    px-6 py-3 block shadow-xl hover:bg-gray-700"
                      >
                        Select
                      </button>
                    </div>
                  </div>
                </div>



                <div class="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-[#55E3CB] rounded-lg shadow-lg">
                  <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                    <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                      Elevate
                    </h1>
                    <p className="text-sm text-center">
                      {" "}
                      Stripe offers everything needed to run an
                    </p>{" "}
                  </div>
                  <div class="flex pl-12 justify-start sm:justify-start mt-3 py-20">
                    <ul className="space-y-3">
                      <li class="flex items-center">
                        <Icon
                          icon="lets-icons:check-fill"
                          color="black"
                          width="32"
                          height="32"
                        />

                        <span class="text-gray-700 text-lg ml-1">No setup</span>
                      </li>
                      <li class="flex items-center">
                        <Icon
                          icon="lets-icons:check-fill"
                          color="black"
                          width="32"
                          height="32"
                        />

                        <span class="text-gray-700 text-lg ml-1">No setup</span>
                      </li>
                      <li class="flex items-center">
                        <Icon
                          icon="lets-icons:check-fill"
                          color="black"
                          width="32"
                          height="32"
                        />

                        <span class="text-gray-700 text-lg ml-1">No setup</span>
                      </li>
                      <li class="flex items-center">
                        <Icon
                          icon="lets-icons:check-fill"
                          color="black"
                          width="32"
                          height="32"
                        />

                        <span class="text-gray-700 text-lg ml-1">No setup</span>
                      </li>
                      <li class="flex items-center">
                        <Icon
                          icon="lets-icons:check-fill"
                          color="black"
                          width="32"
                          height="32"
                        />

                        <span class="text-gray-700 text-lg ml-1">No setup</span>
                      </li>
                      <li class="flex items-center">
                        <Icon
                          icon="lets-icons:check-fill"
                          color="black"
                          width="32"
                          height="32"
                        />

                        <span class="text-gray-700 text-lg ml-1">No setup</span>
                      </li>
                    </ul>
                  </div>

                  <div class=" flex items-center p-8  uppercase">
                    <button
                      class="mt-3 text-lg font-semibold 
                      hover:bg-[#FE7E29] duration-200 w-full text-white rounded-lg 
    px-6 py-3 block shadow-xl bg-gray-700"
                    >
                      Select
                    </button>
                  </div>
                </div>


                <div class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
                  <div class="bg-white text-black rounded-lg  shadow-lg overflow-hidden">
                    <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                      <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                        Enterprise
                      </h1>
                      <p className="text-sm text-center">
                        {" "}
                        Stripe offers everything needed to run an online business
                        at scale. Get in touch for details.
                      </p>{" "}
                    </div>
                    <div class="flex flex-wrap mt-3 px-6 py-20">
                      <ul className="space-y-3">
                        <li class="flex items-center">
                          <Icon
                            icon="lets-icons:check-fill"
                            color="black"
                            width="32"
                            height="32"
                          />

                          <span class="text-gray-700 text-lg ml-1">No setup</span>
                        </li>
                        <li class="flex items-center">
                          <Icon
                            icon="lets-icons:check-fill"
                            color="black"
                            width="32"
                            height="32"
                          />

                          <span class="text-gray-700 text-lg ml-1">No setup</span>
                        </li>
                        <li class="flex items-center">
                          <Icon
                            icon="lets-icons:check-fill"
                            color="black"
                            width="32"
                            height="32"
                          />

                          <span class="text-gray-700 text-lg ml-1">No setup</span>
                        </li>
                        <li class="flex items-center">
                          <Icon
                            icon="lets-icons:check-fill"
                            color="black"
                            width="32"
                            height="32"
                          />

                          <span class="text-gray-700 text-lg ml-1">No setup</span>
                        </li>
                        <li class="flex items-center">
                          <Icon
                            icon="lets-icons:check-fill"
                            color="black"
                            width="32"
                            height="32"
                          />

                          <span class="text-gray-700 text-lg ml-1">No setup</span>
                        </li>
                      </ul>
                    </div>

                    <div class=" flex items-center p-8  uppercase">
                      <button
                        class="mt-3 text-lg font-semibold 
                        bg-[#FE7E29] duration-200 w-full text-white rounded-lg 
    px-6 py-3 block shadow-xl hover:bg-gray-700"
                      >
                        Select
                      </button>
                    </div>
                  </div>
                </div>

                </TabPanel>



                <TabPanel className={"flex justify-center flex-col md:flex-row"}>






<div class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
  <div class="bg-white text-black rounded-lg  shadow-lg overflow-hidden">
    <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
      <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
        Enterprise
      </h1>
      <p className="text-sm text-center">
        {" "}
        Stripe offers everything needed to run an
      </p>
    </div>
    <div class="flex flex-wrap mt-3 px-6 py-20">
      <ul className="space-y-3">
        <li class="flex items-center">
          <Icon
            icon="lets-icons:check-fill"
            color="black"
            width="32"
            height="32"
          />

          <span class="text-gray-700 text-lg ml-1">No setup</span>
        </li>
        <li class="flex items-center">
          <Icon
            icon="lets-icons:check-fill"
            color="black"
            width="32"
            height="32"
          />

          <span class="text-gray-700 text-lg ml-1">No setup</span>
        </li>
        <li class="flex items-center">
          <Icon
            icon="lets-icons:check-fill"
            color="black"
            width="32"
            height="32"
          />

          <span class="text-gray-700 text-lg ml-1">No setup</span>
        </li>
        <li class="flex items-center">
          <Icon
            icon="lets-icons:check-fill"
            color="black"
            width="32"
            height="32"
          />

          <span class="text-gray-700 text-lg ml-1">No setup</span>
        </li>
        <li class="flex items-center">
          <Icon
            icon="lets-icons:check-fill"
            color="black"
            width="32"
            height="32"
          />

          <span class="text-gray-700 text-lg ml-1">No setup</span>
        </li>
      </ul>
    </div>

    <div class=" flex items-center p-8  uppercase">
      <button
        class="mt-3 text-lg font-semibold 
bg-[#FE7E29] duration-200 w-full text-white rounded-lg 
px-6 py-3 block shadow-xl hover:bg-gray-700"
      >
        Select
      </button>
    </div>
  </div>
</div>



<div class="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-[#55E3CB] rounded-lg shadow-lg">
  <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
    <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
      Elevate
    </h1>
    <p className="text-sm text-center">
      {" "}
      Stripe offers everything needed to run an
    </p>{" "}
  </div>
  <div class="flex pl-12 justify-start sm:justify-start mt-3 py-20">
    <ul className="space-y-3">
      <li class="flex items-center">
        <Icon
          icon="lets-icons:check-fill"
          color="black"
          width="32"
          height="32"
        />

        <span class="text-gray-700 text-lg ml-1">No setup</span>
      </li>
      <li class="flex items-center">
        <Icon
          icon="lets-icons:check-fill"
          color="black"
          width="32"
          height="32"
        />

        <span class="text-gray-700 text-lg ml-1">No setup</span>
      </li>
      <li class="flex items-center">
        <Icon
          icon="lets-icons:check-fill"
          color="black"
          width="32"
          height="32"
        />

        <span class="text-gray-700 text-lg ml-1">No setup</span>
      </li>
      <li class="flex items-center">
        <Icon
          icon="lets-icons:check-fill"
          color="black"
          width="32"
          height="32"
        />

        <span class="text-gray-700 text-lg ml-1">No setup</span>
      </li>
      <li class="flex items-center">
        <Icon
          icon="lets-icons:check-fill"
          color="black"
          width="32"
          height="32"
        />

        <span class="text-gray-700 text-lg ml-1">No setup</span>
      </li>
      <li class="flex items-center">
        <Icon
          icon="lets-icons:check-fill"
          color="black"
          width="32"
          height="32"
        />

        <span class="text-gray-700 text-lg ml-1">No setup</span>
      </li>
    </ul>
  </div>

  <div class=" flex items-center p-8  uppercase">
    <button
      class="mt-3 text-lg font-semibold 
      hover:bg-[#FE7E29] duration-200 w-full text-white rounded-lg 
px-6 py-3 block shadow-xl bg-gray-700"
    >
      Select
    </button>
  </div>
</div>


<div class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
  <div class="bg-white text-black rounded-lg  shadow-lg overflow-hidden">
    <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
      <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
        Enterprise
      </h1>
      <p className="text-sm text-center">
        {" "}
        Stripe offers everything needed to run an online business
        at scale. Get in touch for details.
      </p>{" "}
    </div>
    <div class="flex flex-wrap mt-3 px-6 py-20">
      <ul className="space-y-3">
        <li class="flex items-center">
          <Icon
            icon="lets-icons:check-fill"
            color="black"
            width="32"
            height="32"
          />

          <span class="text-gray-700 text-lg ml-1">No setup</span>
        </li>
        <li class="flex items-center">
          <Icon
            icon="lets-icons:check-fill"
            color="black"
            width="32"
            height="32"
          />

          <span class="text-gray-700 text-lg ml-1">No setup</span>
        </li>
        <li class="flex items-center">
          <Icon
            icon="lets-icons:check-fill"
            color="black"
            width="32"
            height="32"
          />

          <span class="text-gray-700 text-lg ml-1">No setup</span>
        </li>
        <li class="flex items-center">
          <Icon
            icon="lets-icons:check-fill"
            color="black"
            width="32"
            height="32"
          />

          <span class="text-gray-700 text-lg ml-1">No setup</span>
        </li>
        <li class="flex items-center">
          <Icon
            icon="lets-icons:check-fill"
            color="black"
            width="32"
            height="32"
          />

          <span class="text-gray-700 text-lg ml-1">No setup</span>
        </li>
      </ul>
    </div>

    <div class=" flex items-center p-8  uppercase">
      <button
        class="mt-3 text-lg font-semibold 
        bg-[#FE7E29] duration-200 w-full text-white rounded-lg 
px-6 py-3 block shadow-xl hover:bg-gray-700"
      >
        Select
      </button>
    </div>
  </div>
</div>

</TabPanel>
  </Tabs>

              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  export default PricingPlans;