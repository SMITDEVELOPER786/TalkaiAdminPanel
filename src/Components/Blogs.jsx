import React, { useState } from "react";
import img1 from "../assets/talkai1.gif"
import img2 from "../assets/callatt1.gif"
import img3 from "../assets/3333.gif"
import { useNavigate } from "react-router-dom";

function Blogs() {
  const blogs = [
    {
      title: "Revolutionizing Order Processing: The AI Receptionist Solution",
      desc: "Talkai247’s integration of sophisticated AI technologies in telecommunication not only promises operational efficiency for businesses but also ensures a more personalized and responsive experience for customers.",
      id: 1,
      blogImg: img1
    },
    {
      title: "Revolutionizing Order Processing: The AI Receptionist Solution",
      desc: "Talkai247’s integration of sophisticated AI technologies in telecommunication not only promises operational efficiency for businesses but also ensures a more personalized and responsive experience for customers.",
      id: 2,
      blogImg: img2
    },
    {
      title: "Revolutionizing Order Processing: The AI Receptionist Solution",
      desc: "Talkai247’s integration of sophisticated AI technologies in telecommunication not only promises operational efficiency for businesses but also ensures a more personalized and responsive experience for customers.",
      id: 3,
      blogImg: img3
    },

  ]

  // const [blogDetails, setBlogDetails] = useState(false)
  const naivgate = useNavigate()
  return (
    <>
      <div className="  bg-white py-10" style={{ border: "1px solid red" }}>
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
          {blogs.map((blog) => (
            <div class="max-w-xs rounded overflow-hidden shadow-lg">
              <img class="w-full" src={blog.blogImg} alt="Sunset in the mountains" />
              <div class="px-6 pt-4">
                <div class="font-bold text-[#FE7E29] text-xl mb-2 text-center">{blog.title}</div>
                <p class="text-black-500 text-sm">
                  {blog.desc}
                </p>
              </div>
              <div class="px-6  pb-2 cursor-pointer" onClick={() => naivgate(`/blogdetails/${blog.id}`)} >
                <span class="text-sm font-bold mr-2 mb-2" style={{ color: "#55E3CB" }}>Read More...</span>
              </div>
            </div>
          ))}


        </div>


      </div>
    </>
  );
}

export default Blogs;