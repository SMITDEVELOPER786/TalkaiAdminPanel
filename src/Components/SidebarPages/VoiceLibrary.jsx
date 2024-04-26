import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import AudioCall from "../../Common/AudioCall";

function VoiceLibrary() {
  const AudioCallData = [
    {
      assistants: "Ava",
      id: 2344343,
      gender: "Male",
    },
    {
      assistants: "Jhon",
      id: 234343,
      gender: "Male",
    },
    {
      assistants: "Doe",
      id: 2344343,
      gender: "Female",
    },
    {
      assistants: "Ava",
      id: 2344343,
      gender: "Male",
    },
  ];

  return (
    <>
      <header className="flex justify-between items-center px-4 my-4">
        <div className="leading-5 text-start">
          <h1 className="text-[18px] md:text-2xl text-[#55E3CB]">Call Logs</h1>{" "}
          {/* Text size changes with screen size */}
          <span className="text-sm md:text-base text-white">
            You can check your call history
          </span>{" "}
          {/* Adjusted text size */}
        </div>
      </header>

      <div className="h-[570px] border-gray-500 border bg-[#171717] rounded-xl w-full">
        {/* dropdown and search bar section */}

        <div className="w-full mt-2 rounded-lg flex flex-col gap-5 py-3 px-5 bg-[#26292E] md:flex-row md:items-center">
          {/* search bar */}
          <div className="flex w-full md:w-auto items-center bg-[#171717] rounded-lg border border-gray-500">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent placeholder:text-white p-2 placeholder:text-sm w-full"
            />
            <Icon
              icon="heroicons-solid:search"
              width="26"
              height="26"
              color="gray"
            />
          </div>

          {/* dropdowns */}
          <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto mt-4 md:mt-0">
            <div className="flex items-center justify-between md:justify-start w-full md:w-auto">
              <p className="text-sm text-white mr-2">Provider</p>
              <select
                name=""
                id=""
                className="bg-[#171717] text-white text-sm rounded-lg border border-gray-500 p-2 w-full md:w-40"
              >
                <option value="">11labs</option>
                <option value="">Demo</option>
                <option value="">Demo</option>
                <option value="">Demo</option>
              </select>
            </div>

            <div className="flex items-center justify-between md:justify-start w-full md:w-auto mt-4 md:mt-0 md:ml-4">
              <p className="text-sm text-white mr-2">Gender</p>
              <select
                name=""
                id=""
                className="bg-[#171717] text-white text-sm rounded-lg border border-gray-500 p-2 w-full md:w-40"
              >
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Rather Not to say</option>
              </select>
            </div>

            <div className="flex items-center justify-between md:justify-start w-full md:w-auto mt-4 md:mt-0 md:ml-4">
              <p className="text-sm text-white mr-2">Accent</p>
              <select
                name=""
                id=""
                className="bg-[#171717] text-white text-sm rounded-lg border border-gray-500 p-2 w-full md:w-40"
              >
                <option value="">American</option>
                <option value="">Demo</option>
                <option value="">Demo</option>
              </select>
            </div>
          </div>

          {/* icons */}
          <div className="flex w-full md:w-auto items-center justify-between md:justify-start rounded-md p-1.5 gap-2 mt-4 md:mt-0">
            <div className="flex items-center bg-[#171717] p-1.5 rounded-md">
              <Icon
                icon="dashicons:filter"
                className="h-6 w-6 text-[#6C6C6C]"
              />
              <p className="text-white">Clear</p>
            </div>
          </div>
        </div>

        <section class="text-gray-600  body-font">
          <div class="container px-5 py-5 border rounded-xl border-gray-500 my-2  mx-auto">
            <div class="flex justify-around y-2 flex-wrap -m-2">
              {AudioCallData.map((record, index) => {
                return (
                  <>
                    <AudioCall key={index} {...record} />
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default VoiceLibrary;
