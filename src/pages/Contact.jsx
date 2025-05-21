import { motion } from 'motion/react';

import map from './../assets/map.svg';
import phone from './../assets/phone.svg';
import email from './../assets/email.svg';
import facebook from './../assets/facebook.svg';
import linkedin from './../assets/linkedin.svg';
import twitter from './../assets/twitter.svg';
import screen from './../assets/screen.png';
import HeadingAnimated from '../components/HeadingAnimated';

function Contact() {
  return (
    <>
      <section id="contact" className="py-8.75 bg-[#252B42]">
        <div className="max-w-[1440px] mx-auto px-6 py-12.5 flex flex-col gap-12.5 items-center text-white">
          <div className="grid gap-1.75">
            <HeadingAnimated
              tag="h2"
              className="p-2.5 text-center text-[46px] leading-14.25"
            >
              Contact Us
            </HeadingAnimated>

            <HeadingAnimated tag="h4" className="p-2.5 text-center font-bold">
              Most calendars are designed for teams. <br /> Slate is designed
              for freelancers
            </HeadingAnimated>
          </div>

          <div className="max-w-[729px] w-full grid grid-cols-[minmax(0,400px)] md:grid-cols-[400px_auto] gap-16.25 justify-center items-center">
            <form
              action="#"
              className="rounded-[13px] py-6.5 px-6 sm:px-10.25 bg-white border border-[#DDDDDD] drop-shadow-[0_9px_13px_rgba(0,0,0,0.1)] grid gap-7.75 text-[#18171D]"
            >
              <HeadingAnimated tag="h3" className="text-center font-bold">
                Contact Us
              </HeadingAnimated>

              <input
                type="text"
                name="name"
                className="w-full rounded-[25px] bg-[#F5F5F5] border border-[#E8E8E8] outline-none text-[#18171D] px-3.25 py-3"
                placeholder="Your Name"
              />

              <input
                type="text"
                name="email"
                className="w-full rounded-[25px] bg-[#F5F5F5] border border-[#E8E8E8] outline-none text-[#18171D] px-3.25 py-3"
                placeholder="Your Email"
              />

              <textarea
                name="message"
                className="px-3.25 py-3.75 bg-[#F5F5F5] border border-[#E8E8E8] outline-none text-[#18171D] resize-none"
                placeholder="Your Message"
              ></textarea>
              <button className="cursor-pointer justify-self-start rounded-[35px] px-9.5 py-4.5 bg-[#EF2779] text-white font-medium text-sm hover:bg-[#252B42] transition-all duration-300">
                Send
              </button>
            </form>

            <Address className="grid gap-12.5" />
          </div>
        </div>
      </section>

      <footer className="max-w-[1440px] mx-auto px-6 lg:px-12.5 pt-30 pb-6 text-[#252B42] bg-white">
        <div className="grid gap-13.75 md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-[auto_auto_auto] justify-center">
          <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-3.75 items-center">
            <h3 className="py-2.5 text-[22px] font-bold">Pages</h3>

            <ul className="grid gap-3.75 text-[15px] group">
              {[
                'Eleanor Edwards',
                'Ted Robertson',
                'Annette Russell',
                'Jennie Mckinney',
                'Gloria Richards',
              ].map((name, index) => (
                <motion.li
                  key={name}
                  className="cursor-pointer group-hover:opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 ease-in-out"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.5, 0, 0, 1],
                      delay: 0.08 * index,
                    },
                  }}
                >
                  {name}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex">
            <img
              src={screen}
              alt="map image"
              className="basis-118 rounded-3xl cursor-pointer"
            />
          </div>
          {/* replace it with original map */}

          <Address className="flex flex-col gap-10 items-center" />
        </div>

        <HeadingAnimated
          tag="p"
          className="mt-20 text-xs text-[#00000099] text-center"
        >
          {' '}
          Developed by{' '}
          <a
            href="https://sheraz-ahmad-portfolio.vercel.app"
            className="text-[#FF7967] font-medium hover:text-gray-600 text-sm"
            target="_blank"
          >
            Sheraz Ahmad
          </a>
          &nbsp;& Designed by{' '}
          <a
            href="https://www.figma.com/@CaptainDesign"
            className="text-[#FF7967] font-medium hover:text-gray-600 text-sm"
            target="_blank"
          >
            CaptainDesign
          </a>
        </HeadingAnimated>
      </footer>
    </>
  );
}

export default Contact;

function Address({ className }) {
  const data = [
    {
      text: (
        <h6 className="p-2.5 text-sm font-semibold">
          {' '}
          6386 Spring St Anchorage,
          <br /> Georgia 12473 United States{' '}
        </h6>
      ),
      img: map,
      alt: 'Address',
    },
    {
      text: <h6 className="p-2.5 text-sm font-semibold">(843) 555-0130</h6>,
      img: phone,
      alt: 'Phone number',
    },
    {
      text: (
        <h6 className="p-2.5 text-sm font-semibold">sherazmalyk7@gmail.com</h6>
      ),
      img: email,
      alt: 'Email address',
    },
  ];
  const socials = [
    { img: twitter, alt: 'link to twitter page' },
    { img: facebook, alt: 'link to facebook page' },
    { img: linkedin, alt: 'link to linkedin profile' },
  ];
  return (
    <div className={className}>
      <motion.div
        className="grid gap-2.5"
        initial="hidden"
        whileInView="visible"
        transition={{
          staggerChildren: 0.2, // Tighter stagger
        }}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            className="flex gap-2.5 items-center cursor-pointer group hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <img
              src={item.img}
              alt={item.alt}
              className="w-6.5 h-8 group-hover:brightness-0"
            />
            {item.text}
          </motion.div>
        ))}
      </motion.div>

      <HeadingAnimated tag="div" className="p-2.5 flex gap-6">
        {socials.map((item, index) => (
          <img
            key={index}
            src={item.img}
            alt={item.alt}
            className="cursor-pointer w-10.25 h-10.25 hover:brightness-0 hover:scale-110 transition-all duration-300 ease-in-out"
          />
        ))}
      </HeadingAnimated>
    </div>
  );
}
