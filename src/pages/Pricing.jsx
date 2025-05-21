import { motion } from 'motion/react';

import HeadingAnimated from '../components/HeadingAnimated';

function Pricing() {
  return (
    <section
      id="pricing"
      className="max-w-[1440px] mx-auto py-25 flex flex-col justify-center gap-20 items-center text-[#252B42]"
    >
      <div className="max-w-[380px]">
        <HeadingAnimated tag="h2" className="text-[46px] p-2.5 text-center">
          Pricing
        </HeadingAnimated>

        <HeadingAnimated
          tag="h4"
          className="mt-1.75 text-center text-[#374754] p-2.5 font-bold"
        >
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </HeadingAnimated>
      </div>

      <motion.div
        className="self-stretch flex gap-12.5 flex-wrap lg:flex-nowrap justify-center px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.5, 0, 0, 1],
          delay: 0.08,
        }}
      >
        <div className="scale-97 hover:scale-105 hover:drop-shadow-[0_13px_19px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out bg-white drop-shadow-[0_13px_19px_rgba(0,0,0,0.1)] basis-88.75 p-10 border border-[#DEDEDE] rounded-[10px] flex flex-col items-start gap-7.5">
          <div>
            <h3 className="py-0.75 text-[22px] font-bold">Free</h3>

            <h6 className="text-[#374754] text-xs font-bold">
              Organize across all apps by hand
            </h6>
          </div>

          <div className="flex items-center">
            <div className="p-2.5">
              <h1 className="text-[55px] font-black leading-[65px]">0</h1>
            </div>

            <div>
              <h3 className="text-[22px] font-bold">$</h3>

              <h6 className="text-sm font-bold text-[#374754]">Per Month</h6>
            </div>
          </div>

          <button className="cursor-pointer self-center max-w-[255px] w-full px-9.5 py-4.5 rounded-[35px] text-white bg-[#38A3F1] font-medium hover:drop-shadow-[0_13px_19px_rgba(0,0,0,0.2)]">
            Order Now
          </button>
        </div>

        <div className="scale-97 hover:scale-105 hover:drop-shadow-[0_13px_19px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out bg-white drop-shadow-[0_13px_19px_rgba(0,0,0,0.1)] basis-88.75 p-10 border border-[#DEDEDE] rounded-[10px] flex flex-col items-start gap-7.5">
          <div>
            <h3 className="py-0.75 text-[22px] font-bold">STANDARD</h3>

            <h6 className="text-[#374754] text-xs font-bold">
              Organize across all apps by hand
            </h6>
          </div>

          <div className="flex items-center">
            <div className="p-2.5">
              <h1 className="text-[55px] font-black leading-[65px]">10</h1>
            </div>

            <div>
              <h3 className="text-[22px] font-bold">$</h3>

              <h6 className="text-sm font-bold text-[#374754]">Per Month</h6>
            </div>
          </div>

          <button className="cursor-pointer self-center max-w-[255px] w-full px-9.5 py-4.5 rounded-[35px] text-white bg-[#38A3F1] font-medium hover:drop-shadow-[0_13px_19px_rgba(0,0,0,0.2)]">
            Order Now
          </button>
        </div>

        <div className="scale-97 hover:scale-105 hover:drop-shadow-[0_13px_19px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out bg-linear-to-tr from-[#EF2779] to-[#7834BE] text-white drop-shadow-[0_13px_19px_rgba(0,0,0,0.1)] basis-88.75 p-10 border border-[#EF2779] rounded-[10px] flex flex-col items-start gap-7.5">
          <div>
            <h3 className="py-0.75 text-[22px] font-bold">BUSINESS</h3>

            <h6 className="text-xs font-bold">
              Organize across all apps by hand
            </h6>
          </div>

          <div className="flex items-center">
            <div className="p-2.5">
              <h1 className="text-[55px] font-black leading-[65px]">99</h1>
            </div>

            <div>
              <h3 className="text-[22px] font-bold">$</h3>

              <h6 className="text-sm font-bold">Per Month</h6>
            </div>
          </div>

          <button className="cursor-pointer self-center max-w-[255px] w-full px-9.5 py-4.5 rounded-[35px] bg-white text-[#EF2779] font-medium hover:drop-shadow-[0_13px_19px_rgba(0,0,0,0.2)]">
            Order Now
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default Pricing;
