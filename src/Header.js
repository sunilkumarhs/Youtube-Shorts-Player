import React from "react";
import { FaYoutube } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="px-6 py-3 flex bg-black w-full justify-between">
      <div className="flex">
        <FiMenu className="text-2xl text-white" />
        <FaYoutube className="text-2xl text-red-500" />
      </div>
      <div className="flex">
        <input />
        <IoIosSearch className="text-2xl text-white" />
        <FaMicrophone className="text-2xl text-white" />
      </div>
      <div className="flex">
        <IoNotificationsOutline className="text-2xl text-white" />
        <FaUserCircle className="text-2xl text-white" />
      </div>
    </div>
  );
};

export default Header;
