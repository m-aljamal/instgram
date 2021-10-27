import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";
const Header = () => {
  return (
    <div className=" shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto ">
        {/* left */}

        <div className=" relative w-24 hidden   lg:inline-grid cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            objectFit="contain"
            alt="logo"
            layout="fill"
          />
        </div>
        <div className=" relative w-10   lg:hidden flex-shrink-0 cursor-pointer ">
          <Image
            src="https://links.papareact.com/jjm"
            objectFit="contain"
            alt="logo"
            layout="fill"
          />
        </div>

        {/* middle */}
        <div className="mx-w-xs">
          <div className=" relative mt-1 p-3 rounded-md ">
            <div className=" absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-50 block pl-10  sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className=" relative">
            <PaperAirplaneIcon className="navBtn" />
            <div className=" absolute hidden md:flex -top-2 -right-1  text-xs w-5 h-5 bg-red-500 rounded-full  items-center justify-center animate-pulse text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            className="h-10 rounded-full cursor-pointer"
            src="https://www.uopeople.edu/wp-content/uploads/2017/07/MohammadAlJamal.png"
            alt="my"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
