import React from "react";
import image from "../assets/image.png";

function Transform() {
  return (
    <>
      <div className="bg-main px-10 flex justify-evenly items-center py-10  md:flex-row flex-col">
        <div>
          <img
            src={image}
            alt="...."
            className="md:w-80 w-40 h-[45%] md:h-[90%] "
          />
        </div>

        <div>
          <h1 className="text-white sm:text-3xl md:text-5xl text-2xl font-bold text-center md:text-right">
            Transform Your Business <br />
            Communication <br />
            with Advanced AI Solutions
          </h1>
          <div className="bg-[#55E3CB] mt-2 w-14 md:w-24 h-2  mx-auto  md:float-right " />

          <br />
          <p className="text-[#FE7E29] mt-3 text-xl md:text-2xl font-bold text-center md:text-right">
            Maximize Efficiency, Minimize Costs with Talkai247
          </p>

          <p className="text-white text-[14.5px] mt-3 text-center md:text-right">
            Talkai247’s integration of sophisticated AI technologies in
            telecommunication not only promises{" "}
            <br className="sm:block hidden" /> operational efficiency for
            businesses but also ensures a more personalized and responsive{" "}
            <br /> experience for customers.
          </p>
        </div>
      </div>
    </>
  );
}

export default Transform;
