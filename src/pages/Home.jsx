import React, { useState } from 'react';

import logo from './../assets/logo.svg';
import headerBg from './../assets/header-bg.png';
import headerBgOverlay from './../assets/header-bg-overlay.png';
import Checkbox from '../components/Checkbox';
import HeadingAnimated from '../components/HeadingAnimated';

function Home() {
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
            <ul className="flex gap-5.25 text-white group">
              <li>
                <a
                  href="#home"
                  className="cursor-pointer group-hover:opacity-60 hover:opacity-100 p-2.5 hover:pb-0 hover:pt-5 transition-all duration-300 ease-in-out block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="cursor-pointer group-hover:opacity-60 hover:opacity-100 p-2.5 hover:pb-0 hover:pt-5 transition-all duration-300 ease-in-out block"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="cursor-pointer group-hover:opacity-60 hover:opacity-100 p-2.5 hover:pb-0 hover:pt-5 transition-all duration-300 ease-in-out block"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="cursor-pointer group-hover:opacity-60 hover:opacity-100 p-2.5 hover:pb-0 hover:pt-5 transition-all duration-300 ease-in-out block"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="cursor-pointer group-hover:opacity-60 hover:opacity-100 p-2.5 hover:pb-0 hover:pt-5 transition-all duration-300 ease-in-out block"
                >
                  Contact
                </a>
              </li>
            </ul>

            <form action="#" className="hidden mlg:block">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="px-9.75 py-4.75 rounded-[9.75rem] bg-[#EFEFEF] border border-[#E8E8E8] outline-none text-[#18171D] placeholder:text-[#18171D]"
                />

                <button className="cursor-pointer px-9.5 p-4.75 bg-white rounded-[8.75rem] font-medium text-[#EF2779] hover:bg-[#EF2779] hover:text-white transition-all duration-300 ease-in-out">
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
          <div className="nav-for-mobile fixed top-0 left-0 w-1/2 h-full bg-linear-to-b from-[#38A3F1] to-[#EF2779] text-white z-10">
            <ul className="h-full flex flex-col gap-7 items-center justify-center py-6">
              <li className="cursor-pointer text-xl">
                <a href="#home" onClick={() => setShowMobileNav(false)}>
                  Home
                </a>
              </li>
              <li className="cursor-pointer text-xl">
                <a href="#features" onClick={() => setShowMobileNav(false)}>
                  Features
                </a>
              </li>
              <li className="cursor-pointer text-xl">
                <a href="#partners" onClick={() => setShowMobileNav(false)}>
                  Partners
                </a>
              </li>
              <li className="cursor-pointer text-xl">
                <a href="#pricing" onClick={() => setShowMobileNav(false)}>
                  Pricing
                </a>
              </li>
              <li className="cursor-pointer text-xl">
                <a href="#contact" onClick={() => setShowMobileNav(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <div className="flex z-10 px-14 xmd:px-20.5 pb-20 py-20 sm:py-2 lg:py-20 gap-15 flex-col md:flex-row justify-center items-center">
        <div className="text-white">
          <HeadingAnimated
            tag="h1"
            className="py-2.5 max-w-80.25 text-[52px] font-black hidden sm:block"
          >
            We focus on ergonomics
          </HeadingAnimated>
          <h2 className="py-2.5 max-w-80.25 text-[46px] block sm:hidden text-center">
            Lightning fast prototyping
          </h2>
          <p className="py-2.5 max-w-74.5 font-bold text-center">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </p>
        </div>

        <button className="cursor-pointer max-w-59 w-full py-4 rounded-[35px] text-white md:bg-white bg-[#38A3F1] md:text-[#38A3F1] text-[22px] font-bold hover:bg-[#EF2779] hover:text-white hover:drop-shadow-[0_13px_19px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out">
          Try For Free
        </button>
      </div>
    </header>
  );
}

export default Home;
