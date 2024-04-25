import React from "react";
import border from "../assets/border.png";
import { ServiceCard } from "../Constant/LocalDb";

function Service() {
  return (
    <>
      <div className="bg-[#26292E] py-10">
        <h1 className="text-center pt-10 font-bold text-base md:text-2xl text-[#FE7E29]">
          SERVICE WE PROVIDE FOR YOU
        </h1>
        <div className="bg-[#55E3CB] mt-2 w-14 md:w-20 h-2   flex justify-center mx-auto" />

        <p className="text-[#55E3CB] underline text-center py-8 text-sm">
          Learn More
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center  grid-cols-1">
          {ServiceCard.map((v, i) => {
            return (
              <>
                <div
                  key={i}
                  className="border-gray-400 border h-64 w-56 rounded-3xl overflow-hidden flex my-2 justify-center items-center relative"
                >
                  <img
                    className="w-full h-full  object-cover"
                    src={border}
                    alt=""
                  />
                  <img
                    src={v.img}
                    className="text-white absolute top-[20%] left-1/2 transform -translate-x-1/2 h-16 w-20 -translate-y-1/2"
                    alt=""
                  />
                  <h1 className="absolute top-[45%]  w-[75%]  text-center font-bold text-[18px] mt-2 text-[#FE7E29] left-1/2 transform -translate-x-1/2  -translate-y-1/2">
                    {v.title}
                  </h1>

                  <p className="absolute top-[60%]  mt-3 w-[75%] text-center text-[10px]  text-white left-1/2 transform -translate-x-1/2   ">
                    {v.desc}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Service;
