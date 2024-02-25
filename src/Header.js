import React from "react";
import { FaYoutube } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { ImMic } from "react-icons/im";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="px-6 flex bg-black w-full justify-between">
      <div className="flex py-3">
        <div className="pt-1">
          <RxHamburgerMenu className="text-2xl text-white" />
        </div>
        <div className="px-6 flex">
          <FaYoutube className="text-3xl text-red-500" />
          <p className="text-white text-xl font-semibold">YouTube</p>
          <p className="px-1 text-slate-300 text-xs">IN</p>
        </div>
      </div>
      <div className="md:flex hidden w-3/4 justify-center">
        <div className="flex pt-2 w-3/5">
          <input
            className="rounded-l-full w-full h-4/5 px-4 text-xl bg-black border-[1px] border-gray-600"
            placeholder="search"
          />
          <div className="px-5 py-2 bg-gray-800 rounded-r-full h-4/5 border-[1px] border-gray-600">
            <IoIosSearch className="text-2xl text-white" />
          </div>
        </div>
        <div className=" mx-4 my-2 px-3 pt-3 bg-gray-800 rounded-full">
          {" "}
          <ImMic className="text-lg text-white rounded-full" />
        </div>
      </div>
      <div className="flex py-3">
        <div className="px-6 py-1">
          <IoNotificationsOutline className="text-2xl text-white" />
        </div>
        <div className="px-2">
          <FaUserCircle className="text-3xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
