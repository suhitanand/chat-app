import React from "react";
import Richard from "../img/avatar-richard.png";
import Ali from "../img/avatar-ali.png";
import "../index.css";
import { IoCallOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHappyOutline } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";
import { IoAttachOutline } from "react-icons/io5";
import { IoSendSharp } from "react-icons/io5";


function MiddleSection() {
  return (
    <>
      <div
        id="chat"
        className="bg-white hidden smm:col-span-7 mdd:col-span-8 lgg:col-span-6 smm:flex rounded flex-col"
      >
        {/* <!-- Chat head --> */}
        <section id="chat head">
          <div className="flex flex-row items-center justify-between space-x-5 w-11/12 mx-auto py-9 px-2">
            {/* <!--person Image, Name, and Status --> */}
            <div className="flex items-center justify-center space-x-4">
              {/* <!-- Person Image--> */}
              <div className="ml-4 w-12 lgg:ml-0">
                <img src={Richard} alt="Richard" />
              </div>
              <div className="flex flex-col items-start space-y-1">
                {/* <!-- Person Name --> */}
                <p className="leading-4 font-bold text-lg">Mac Luis</p>
                {/* <!-- Person Status --> */}
                <p className="text-blue-600 leading-4 font-medium after:block after:absolute after:-right-3 after:top-1 relative after:h-2 after:w-2 after:bg-green-600 after:rounded-full">
                  Online
                </p>
              </div>
            </div>

            {/* <!-- Icons --> */}
            <div className="text-right flex space-x-8">
              <IoCallOutline class="text-[1.6rem] text-gray-500 cursor-pointer hover:text-gray-700" />
              <IoVideocamOutline class="text-[1.6rem] text-gray-500 cursor-pointer hover:text-gray-700" />
              <IoSettingsOutline class="text-[1.6rem] text-gray-500 cursor-pointer hover:text-gray-700" />
            </div>
          </div>
          <hr className="h-0.5px bg-gray-400 w-100 mx-auto" />
        </section>
        {/* <!-- Chat middle --> */}
        <section id="chat middle">
          <div className="flex flex-col items-center justify-between w-full mx-auto py-6 space-y-1">
            {/* <!-- Chat text 1 --> */}
            <div className="flex flex-row items-start justify-start w-full pl-3">
              {/* <!-- 2nd person image --> */}
              <div>
                <img className="max-w-[28px]" src={Ali} alt="Ali" />
              </div>
              {/* <!-- Chat Text and time --> */}
              <div
                after="10:23 pm"
                className="after:content-[attr(after)] after:-bottom-[25px] after:absolute after:text-gray-500 after:left-1 lggg:after:-right-8 lggg:after:left-[initial] relative after:text-[0.86rem] min-w-[23%] max-w-[40%] ml-6 bg-[#f0f0f0] rounded-xl rounded-br-[0px] py-2.5 px-4 text-sm"
              >
                <p className="break-words font-medium">Hi</p>
              </div>
            </div>
            {/* <!-- Chat text 2 --> */}
            <div className="pr-3 flex flex-row-reverse items-start justify-start w-full">
              {/* <!-- 1nd person image --> */}
              <div>
                <img className="max-w-[28px]" src={Richard} alt="Richard" />
              </div>
              {/* <!-- Chat Text and time --> */}
              <div
                after="10:23 pm"
                className="after:content-[attr(after)] after:right-1 lggg:after:-left-8 lggg:after:right-[initial] after:-bottom-[25px] after:absolute after:text-gray-500 relative after:text-[0.86rem] min-w-[23%] max-w-[40%] mr-6 bg-gradient-to-l from-indigo-500 to-purple-500 text-[#efefef] rounded-xl rounded-bl-[0px] py-2.5 px-4 text-sm"
              >
                <p className="break-words font-semibold">Hello.</p>
              </div>
            </div>
            {/* <!-- Chat text 3 --> */}
            <div className="pl-3 flex flex-row items-start justify-start w-full">
              {/* <!-- 2nd person image --> */}
              <div>
                <img className="max-w-[28px]" src={Ali} alt="Ali" />
              </div>
              {/* <!-- Chat Text and time --> */}
              <div
                after="10:23 pm"
                className="after:content-[attr(after)] after:left-1 lggg:after:-right-8 lggg:after:left-[initial] after:-bottom-[25px] after:absolute after:text-gray-500 relative after:text-[0.86rem] min-w-[23%] max-w-[40%] ml-6 bg-[#f0f0f0] rounded-xl rounded-br-[0px] py-2.5 px-4 text-sm"
              >
                <p className="break-words font-semibold">How r u?</p>
              </div>
            </div>
            {/* <!-- Chat text 4 --> */}
            <div className="pr-3 flex flex-row-reverse items-start justify-start w-full">
              {/* <!-- 1nd person image --> */}
              <div>
                <img className="max-w-[28px]" src={Richard} alt="Richard" />
              </div>
              {/* <!-- Chat Text and time --> */}
              <div
                after="10:23 pm"
                className="after:content-[attr(after)] after:right-1 lggg:after:-left-8 lggg:after:right-[initial] after:-bottom-[25px] after:absolute after:text-gray-500 relative after:text-[0.86rem] min-w-[23%] max-w-[40%] mr-6 bg-gradient-to-l from-indigo-500 to-purple-500 text-[#efefef] rounded-xl rounded-bl-[0px] py-2.5 px-4 text-sm"
              >
                <p className="break-words font-semibold">
                  I am fine what about u ?
                </p>
              </div>
            </div>
            {/* <!-- Chat text 5 --> */}
            <div className="pl-3 flex flex-row items-start justify-start w-full">
              {/* <!-- 2nd person image --> */}
              <div>
                <img className="max-w-[28px]" src={Ali} alt="Ali" />
              </div>
              {/* <!-- Chat Text and time --> */}
              <div
                after="10:23 pm"
                className="after:content-[attr(after)] after:left-1 lggg:after:-right-8 lggg:after:left-[initial] after:-bottom-[25px] after:absolute after:text-gray-500 relative after:text-[0.86rem] min-w-[23%] max-w-[40%] ml-6 bg-[#f0f0f0] rounded-xl rounded-br-[0px] py-2.5 px-4 text-sm"
              >
                <p className="break-words font-semibold">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
            {/* <!-- Chat text 6 --> */}
            <div className="pr-3 flex flex-row-reverse items-start justify-start w-full">
              {/* <!-- 1nd person image --> */}
              <div>
                <img className="max-w-[28px]" src={Richard} alt="Richard" />
              </div>
              {/* <!-- Chat Text and time --> */}
              <div
                after="10:43 pm"
                className="after:content-[attr(after)] after:right-1 lggg:after:-left-8 lggg:after:right-[initial] after:-bottom-[25px] after:absolute after:text-gray-500 relative after:text-[0.86rem] min-w-[23%] max-w-[40%] mr-6 bg-gradient-to-l from-indigo-500 to-purple-500 text-[#efefef] rounded-xl rounded-bl-[0px] py-2.5 px-4 text-sm"
              >
                <p className="break-words font-semibold">
                  Okay, I will let you know
                </p>
              </div>
            </div>
            <div className="py-[0.1rem] !mt-[4.6rem] !mb-6 text-center text-sm text-gray-500 w-full bg-gray-100">
              Unread Messages
            </div>
            {/* <!-- Chat text 7 --> */}
            <div className="pl-3 flex flex-row items-start justify-start w-full">
              {/* 2nd person image  */}
              <div>
                <img className="max-w-[28px]" src={Ali} alt="Ali" />
              </div>
              {/* <!-- Chat Text and time --> */}
              <div
                after="10:23 pm"
                className="after:content-[attr(after)] after:left-1 lggg:after:-right-8 lggg:after:left-[initial] after:-bottom-[25px] after:absolute after:text-gray-500 relative after:text-[0.86rem] min-w-[23%] max-w-[40%] ml-6 bg-[#f0f0f0] rounded-xl rounded-br-[0px] py-2.5 px-4 text-sm"
              >
                <p className="break-words font-semibold">Good Night</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Horizontal Rule --> */}

        {/* <!-- Chat bottom --> */}
        <section id="chat bottom">
          <div className="flex w-[94%] mx-auto px-8 space-x-1 justify-between items-center py-[1.4rem] bg-gray-100 rounded-3xl mt-5">
            {/* <!-- Smile icon--> */}
            <div>
              <IoHappyOutline class="text-gray-400 cursor-pointer hover:text-gray-700 flex justify-between items-center text-2xl" />
            </div>
            {/* <!-- Message section --> */}
            <div className="w-[100%] !ml-5">
              <input
                type="text"
                placeholder="Type a messages..."
                className="w-full text-[0.9rem] border-none outline-none bg-gray-100"
              />
            </div>
            {/* <!-- mic and send icons --> */}
            <div className="flex space-x-5">
              <div>
                <IoAttachOutline class="text-gray-400 cursor-pointer hover:text-gray-700 flex justify-between itmes-center text-2xl" />
              </div>
              <div>
                <IoMicOutline class="text-gray-400 cursor-pointer hover:text-gray-700 flex justify-between itmes-center text-2xl mr-[0.5rem]" />
              </div>
              <div>
                <IoSendSharp class="flex justify-between itmes-center text-2xl text-[#5960f6] cursor-pointer hover:text-[#383fc0]" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default MiddleSection;
