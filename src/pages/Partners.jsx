import { motion } from 'motion/react';

import HeadingAnimated from '../components/HeadingAnimated';
import Dropbox from './../assets/Dropbox.png';
import Ellipse2 from './../assets/Ellipse2.png';
import logos1 from './../assets/logos_1.png';
import logos2 from './../assets/logos_2.png';
import logos34 from './../assets/logos_4_3.png';
import logos5 from './../assets/logos_5.png';
import logos6 from './../assets/logos_6.png';

function Partners() {
  return (
    <>
      <section
        id="partners"
        className="max-w-[1440px] mx-auto text-[#252B42] py-20 grid gap-20 justify-center"
      >
        <div className="max-w-[318px] mx-auto grid gap-1.75 text-center">
          <HeadingAnimated tag="h2" className="p-2.5 text-[46px] mt-10">
            Partners
          </HeadingAnimated>

          <HeadingAnimated
            tag="h4"
            className="p-2.5 font-semibold text-[#374754]"
          >
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </HeadingAnimated>
        </div>

        <div className="grid gap-x-13 gap-y-17.5 grid-cols-[repeat(auto-fit,minmax(238px,1fr))]">
          {[
            { title: 'Apiary', img: logos1 },
            { title: 'Android', img: logos2 },
            { title: 'Base Camp', img: logos34 },
            { title: 'Boot Camp', img: logos34 },
            { title: 'Airbnb', img: logos5 },
            { title: 'Apple Store', img: logos6 },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.2,
                  ease: [0.5, 0, 0, 1],
                  delay: 0.08 + 0.2,
                },
              }}
              className="grid gap-3.75 justify-items-center text-center"
            >
              <h6 className="p-2.5 text-[#374754] text-sm font-bold">
                {item.title}
              </h6>
              <div className="w-30.5 h-30.75">
                <img src={item.img} alt={item.title} className="w-full" />
              </div>

              <p className="p-2.5 px-4 text-[#374754] text-lg">
                Slate helps you see how many more days you need to work to reach
                your financial goal for the month and year.
              </p>
            </motion.div>
          ))}
        </div>

        <button></button>
      </section>

      <section className="max-w-[1440px] mx-auto py-25 flex flex-col justify-center gap-20 items-center text-[#252B42]">
        <HeadingAnimated tag="h2" className="p-2.5 text-[46px]">
          Testimonials
        </HeadingAnimated>

        <div className="max-w-[703px] flex flex-col gap-5.25 items-center">
          <HeadingAnimated tag="div">
            <img src={Dropbox} alt="Dropbox" />
          </HeadingAnimated>

          <HeadingAnimated
            tag="h4"
            className="p-2.5 text-center text-[#374754] font-bold"
          >
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </HeadingAnimated>
        </div>

        <div className="flex gap-4.25">
          <img src={Ellipse2} alt="" className="w-12.5 h-12.5 rounded-full" />

          <div>
            <HeadingAnimated
              tag="h6"
              className="text-[#374754] py-0.5 text-sm font-bold"
            >
              Organize across
            </HeadingAnimated>

            <HeadingAnimated tag="p" className="text-[17px]">
              Ui designer
            </HeadingAnimated>
          </div>
        </div>

        <div className="p-5">
          <button className="cursor-pointer px-11.75 py-3.75 rounded-[35px] text-white bg-[#38A3F1] text-[22px] font-bold  hover:bg-[#EF2779] hover:drop-shadow-[0_13px_19px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-300 ease-in-out">
            More Testimonials
          </button>
        </div>
      </section>
    </>
  );
}

export default Partners;
