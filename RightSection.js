import React from "react";
import Richard from "../img/avatar-richard.png";
import "../index.css";
// import BackButton from "./BackButton";

function RightSection() {
  return (
    <>
      <div
        id="contact_details"
        className="bg-white hidden lgg:col-span-3 lgg:flex rounded flex-col"
      >
        {/* <!-- Info Details --> */}
        <section id="info_details">
          <div className="flex flex-col px-[0.9rem] py-[1.6rem]">
            {/* <!-- Text --> */}
            {/* <BackButton /> */}

            <p className="text-[1rem] font-bold text-gray-700 text-left">
              Info Details
            </p>
            {/* <!-- User Image --> */}
            <div className="mt-[3.5rem] w-full flex justify-center itmes-center">
              <img className="w-[5.8rem]" src={Richard} alt="Richard" />
            </div>
            <div className="flex mt-[1rem] flex-col items-center justify-cneter space-y-[0.55rem]">
              {/* <!-- Person Name --> */}
              <p className="leading-4 font-bold text-lg">Mac Luis</p>
              {/* <!-- Person Status --> */}
              <p className="text-blue-600 leading-[1rem] font-medium after:block after:absolute after:-right-3 after:top-1 relative after:h-2 after:w-2 after:bg-green-600 after:rounded-full">
                Online
              </p>
            </div>
          </div>
        </section>
        {/* <!-- Settings --> */}
        <section id="settings">
          <div className="flex flex-col px-[0.9rem] mt-[1.4rem]">
            <div className="setting_container">
              <p className="text-left text-[1rem] font-bold text-gray-700 mb-[1.8rem]">
                SETTING
              </p>
            </div>
            {/* <!-- Options --> */}
            <div className="flex flex-col justify-center items-between space-y-[2rem]">
              {/* <!-- Options 1 --> */}
              <div className="flex flex-row justify-between items-center">
                <p className="text-left text-[0.9rem] font-medium text-gray-700">
                  Mute notification
                </p>
                <label
                  for="checked-toggle"
                  className="flex-col inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    id="checked-toggle"
                    className="sr-only peer outline-none"
                    checked
                  />
                  <div className="outline-none w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-l from-indigo-500 to-purple-500"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 outline-none"></span>
                </label>
              </div>
              {/* <!-- Options 2 --> */}
              <div className="flex flex-row justify-between items-center">
                <p className="text-left text-[0.9rem] font-medium text-gray-700">
                  Pinned
                </p>
                <label
                  for="checked-toggle1"
                  className="flex-col inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    id="checked-toggle1"
                    className="sr-only peer outline-none"
                    checked
                  />
                  <div className="outline-none w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-l from-indigo-500 to-purple-500"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 outline-none"></span>
                </label>
              </div>
              {/* <!-- Options 3 --> */}
              <div className="flex flex-row justify-between items-center">
                <p className="text-left text-[0.9rem] font-medium text-gray-700">
                  Call / Video Call
                </p>
                <label
                  for="checked-toggle2"
                  className="flex-col inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="checked-toggle2"
                    className="sr-only peer outline-none"
                    checked
                  />
                  <div className="outline-none w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-l from-indigo-500 to-purple-500"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 outline-none"></span>
                </label>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- buttons --> */}
        <section id="buttons">
          <div className="flex flex-row items-center justify-around mt-5 px-[0.9rem]">
            <button className="bg-[#ff00000f] hover:bg-[#ff000033] rounded-lg text-red-600 py-2 w-[45%] text-[0.9rem] font-medium">
              Report Chat
            </button>
            <button className="text-red-600 bg-[#ff00000f] hover:bg-[#ff000033] rounded-lg py-2 w-[45%] text-[0.9rem] font-medium">
              Block
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default RightSection;
