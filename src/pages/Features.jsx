import { motion } from 'motion/react';

import HeadingAnimated from '../components/HeadingAnimated';
import featureOne from './../assets/feature1.svg';
import featureTwo from './../assets/feature2.svg';
import featureThree from './../assets/feature3.svg';
import MacbookPro from './../assets/MacbookPro.png';

function Features() {
  return (
    <>
      <section
        id="features"
        className="max-w-[1440px] mx-auto py-20 flex flex-col gap-20 items-center text-[#252B42]"
      >
        <div className="flex flex-col items-center max-w-[318px]">
          <HeadingAnimated tag="h3" className="font-bold text-[22px]">
            At your fingertips
          </HeadingAnimated>

          <HeadingAnimated tag="h2" className="p-2.5 text-5xl">
            Features
          </HeadingAnimated>

          <HeadingAnimated
            tag="h4"
            className="p-2.5 text-[#374754] font-bold text-center"
          >
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </HeadingAnimated>
        </div>

        <div className="flex gap-13 justify-center flex-wrap px-6">
          {[
            {
              img: featureOne,
              title: 'The best products start with Sketch',
            },
            {
              img: featureTwo,
              title: 'Fastest way to organize',
            },
            {
              img: featureThree,
              title: 'Work better together',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="basis-62.5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.2,
                  ease: [0.5, 0, 0, 1],
                  delay: 0.08 + index * 0.3,
                },
              }}
            >
              <div className="grid grid-cols-[43px_1fr] items-center">
                <div className="h-[43.5px] py-[13.25px] px-[2.09px] bg-[#EF2779] rounded-full flex justify-center items-center">
                  <img src={item.img} className="w-auto" />
                </div>

                <h3 className="p-2.5 font-bold text-[22px]">{item.title}</h3>
              </div>

              <p className="py-2.5 text-[#374754] text-lg">
                Slate helps you see how many more days you need to work to reach
                your financial goal.{' '}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto py-20 flex justify-center items-center flex-col gap-10 text-[#252B42]">
        <div className="max-w-[358px] grid gap-2.5 text-center">
          <HeadingAnimated tag="h2" className="p-2 text-[46px]">
            Lightning fast prototyping{' '}
          </HeadingAnimated>

          <HeadingAnimated
            tag="h4"
            className="mt-1.75 p-2.5 font-bold text-[#374754]"
          >
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </HeadingAnimated>
        </div>

        <div className="p-2 py-5">
          <button className="cursor-pointer w-59 self-start py-4 rounded-[35px] text-white bg-[#38A3F1] text-[22px] font-bold hover:bg-[#EF2779] transition-all duration-300 ease-in-out">
            Try For Free
          </button>
        </div>

        <div className="p-[35.75px] max-w-1140px">
          <div className="p-[17.88x]">
            <img src={MacbookPro} alt="Macbook Pro" className="w-full" />
          </div>
        </div>
      </section>

      <section className="bg-linear-to-tr from-[#EF2779] to-[#7834BE] text-white">
        <div className="max-w-[1440px] mx-auto py-[70px] mt-2.75 flex flex-col justify-center items-center">
          <div className="text-center">
            <HeadingAnimated tag="h3" className="text-[22px] font-bold">
              At your fingertips
            </HeadingAnimated>
            <h2 className="text-[46px]">Lightning fast prototyping </h2>
          </div>

          <div className="mt-[59px] flex flex-col gap-3.25 p-2.5">
            <HeadingAnimated tag="h3" className="text-[22px] font-bold">
              Subscribe to our Newsletter
            </HeadingAnimated>

            <p className="text-lg">Available exclusivery on Figmaland</p>

            <form action="#" className="py-6 flex flex-col gap-3">
              <motion.input
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: 'easeInOut',
                  },
                }}
                type="text"
                placeholder="Your Email"
                className="px-8.75 py-4.75 rounded-[35px] bg-[#EFEFEF] border border-[#E8E8E8] outline-none text-[#18171D] placeholder:text-[#18171D] text-sm"
              />

              <button className="cursor-pointer px-8.75 py-4.25 rounded-[35px] bg-[#EF2779] text-white drop-shadow-[0_13px_19px_rgba(0,0,0,0.2)] hover:bg-white hover:text-[#EF2779] transition-all duration-300 ease-in-out">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
