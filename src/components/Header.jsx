import React, { useState } from 'react';

import logo from './../assets/logo.svg';
import headerBg from './../assets/header-bg.png';
import headerBgOverlay from './../assets/header-bg-overlay.png';
import Checkbox from './Checkbox';

function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <header className="max-w-[1440px] mx-auto relative overflow-hidden md:aspect-[1439/954]">
      <img
        src={headerBgOverlay}
        alt="backgound image"
        className="h-full md:h-auto md:w-full absolute top-13.75 -z-10"
      />
      <img
        src={headerBg}
        alt="backgound image"
        className="h-full md:h-auto md:w-full absolute -z-10"
      />

      <nav className="z-10">
        <div className="flex justify-between items-center p-4 sm:p-10 pt-9.5">
          <div className="cursor-pointer">
            <img src={logo} alt="" className="w-full" />
          </div>

          <div className="gap-11 items-center hidden lg:flex">
            <ul className="flex gap-5.25 text-white">
              <li className="cursor-pointer p-2.5">Home</li>
              <li className="cursor-pointer p-2.5">Product</li>
              <li className="cursor-pointer p-2.5">Pricing</li>
              <li className="cursor-pointer p-2.5">About</li>
              <li className="cursor-pointer p-2.5">Contact</li>
            </ul>

            <form action="#" className="hidden mlg:block">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="px-9.75 py-4.75 rounded-[9.75rem] bg-[#EFEFEF] border border-[#E8E8E8] outline-none text-[#18171D] placeholder:text-[#18171D]"
                />

                <button className="cursor-pointer px-9.5 p-4.75 bg-white rounded-[8.75rem] font-medium text-[#EF2779]">
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className="block lg:hidden">
            <Checkbox
              showMobileNav={showMobileNav}
              setShowMobileNav={setShowMobileNav}
            />
          </div>
        </div>

        {showMobileNav && (
          <div className="nav-for-mobile fixed top-0 left-0 w-1/2 h-full bg-[#374754e6] text-white z-10">
            <ul className="h-full flex flex-col gap-7 items-center justify-center py-6">
              <li className="cursor-pointer text-xl">Home</li>
              <li className="cursor-pointer text-xl">Product</li>
              <li className="cursor-pointer text-xl">Pricing</li>
              <li className="cursor-pointer text-xl">About</li>
              <li className="cursor-pointer text-xl">Contact</li>
            </ul>
          </div>
        )}
      </nav>

      <div className="flex z-10 px-14 xmd:px-20.5 pb-20 py-20 sm:py-2 lg:py-20 gap-15 flex-col md:flex-row justify-center items-center">
        <div className="text-white">
          <h1 className="py-2.5 max-w-80.25 text-[52px] font-black hidden sm:block">
            We focus on ergonomics
          </h1>
          <h2 className="py-2.5 max-w-80.25 text-[46px] block sm:hidden text-center">
            Lightning fast prototyping
          </h2>
          <p className="py-2.5 max-w-74.5 font-bold text-center">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </p>
        </div>

        <button className="cursor-pointer max-w-59 w-full py-4 rounded-[35px] text-white md:bg-white bg-[#38A3F1] md:text-[#38A3F1] text-[22px] font-bold">
          Try For Free
        </button>
      </div>
    </header>
  );
}

export default Header;
