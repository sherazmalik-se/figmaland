import './../styles/globals.css';
import Header from './Header';

import featureOne from './../assets/feature1.svg';
import featureTwo from './../assets/feature2.svg';
import featureThree from './../assets/feature3.svg';
import MacbookPro from './../assets/MacbookPro.png';
import Dropbox from './../assets/Dropbox.png';
import Ellipse2 from './../assets/Ellipse2.png';
import map from './../assets/map.svg';
import phone from './../assets/phone.svg';
import email from './../assets/email.svg';
import facebook from './../assets/facebook.svg';
import linkedin from './../assets/linkedin.svg';
import twitter from './../assets/twitter.svg';
import screen from './../assets/screen.png';
import logos1 from './../assets/logos_1.png';
import logos2 from './../assets/logos_2.png';
import logos34 from './../assets/logos_4_3.png';
import logos5 from './../assets/logos_5.png';
import logos6 from './../assets/logos_6.png';

function App() {
  return (
    <>
      <Header />

      <div className="max-w-[1440px] mx-auto py-20 flex flex-col gap-20 items-center text-[#252B42]">
        <div className="flex flex-col items-center max-w-[318px]">
          <h3 className="font-bold text-[22px]">At your fingertips</h3>

          <h2 className="p-2.5 text-5xl">Features</h2>

          <h4 className="p-2.5 text-[#374754] font-bold text-center">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </h4>
        </div>

        <div className="flex gap-13 justify-center flex-wrap px-6">
          <div className="basis-62.5">
            <div className="grid grid-cols-[43px_1fr] items-center">
              <div className="h-[43.5px] py-[13.25px] px-[2.09px] bg-[#EF2779] rounded-full flex justify-center items-center">
                <img src={featureOne} alt="icon" className="w-auto" />
              </div>

              <h3 className="p-2.5 font-bold text-[22px]">
                The best products start with Sketch
              </h3>
            </div>

            <p className="py-2.5 text-[#374754] text-lg">
              Slate helps you see how many more days you need to work to reach
              your financial goal.{' '}
            </p>
          </div>

          <div className="basis-62.5">
            <div className="grid grid-cols-[43px_1fr] items-center">
              <div className="h-[43.5px] py-[13.25px] px-[2.09px] bg-[#EF2779] rounded-full flex justify-center items-center">
                <img src={featureTwo} alt="icon" className="w-auto" />
              </div>

              <h3 className="p-2.5 font-bold text-[22px]">
                Fastest way to organize
              </h3>
            </div>

            <p className="py-2.5 text-[#374754] text-lg">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
          </div>

          <div className="basis-62.5">
            <div className="grid grid-cols-[43px_1fr] items-center">
              <div className="h-[43.5px] py-[13.25px] px-[2.09px] bg-[#EF2779] rounded-full flex justify-center items-center">
                <img src={featureThree} alt="icon" className="w-auto" />
              </div>

              <h3 className="p-2.5 font-bold text-[22px]">
                Work better together
              </h3>
            </div>

            <p className="py-2.5 text-[#374754] text-lg">
              Slate helps you see how many more days you need to work to reach
              your financial goal.{' '}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto py-20 flex justify-center items-center flex-col gap-10 text-[#252B42]">
        <div className="max-w-[358px] grid gap-2.5 text-center">
          <h2 className="p-2 text-[46px]">Lightning fast prototyping </h2>

          <h4 className="mt-1.75 p-2.5 font-bold text-[#374754]">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </h4>
        </div>

        <div className="p-2 py-5">
          <button className="cursor-pointer w-59 self-start py-4 rounded-[35px] text-white bg-[#38A3F1] text-[22px] font-bold">
            Try For Free
          </button>
        </div>

        <div className="p-[35.75px] max-w-1140px">
          <div className="p-[17.88x]">
            <img src={MacbookPro} alt="Macbook Pro" className="w-full" />
          </div>
        </div>
      </div>

      <div className="bg-linear-to-tr from-[#EF2779] to-[#7834BE] text-white">
        <div className="max-w-[1440px] mx-auto py-[70px] mt-2.75 flex flex-col justify-center items-center">
          <div className="text-center">
            <h3 className="text-[22px] font-bold">At your fingertips</h3>
            <h2 className="text-[46px]">Lightning fast prototyping </h2>
          </div>

          <div className="mt-[59px] flex flex-col gap-3.25 p-2.5">
            <h3 className="text-[22px] font-bold">
              Subscribe to our Newsletter
            </h3>

            <p className="text-lg">Available exclusivery on Figmaland</p>

            <form action="#" className="py-6 flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Email"
                className="px-8.75 py-4.75 rounded-[35px] bg-[#EFEFEF] border border-[#E8E8E8] outline-none text-[#18171D] placeholder:text-[#18171D] text-sm"
              />

              <button className="cursor-pointer px-8.75 py-4.25 rounded-[35px] bg-[#EF2779] text-white drop-shadow-[0_13px_19px_rgba(0,0,0,0.2)]">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto text-[#252B42] py-20 grid gap-20 justify-center">
        <div className="max-w-[318px] mx-auto grid gap-1.75 text-center">
          <h2 className="p-2.5 text-[46px] mt-10">Partners</h2>

          <h4 className="p-2.5 font-semibold text-[#374754]">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </h4>
        </div>

        <div className="grid gap-x-13 gap-y-17.5 grid-cols-[repeat(auto-fit,minmax(238px,1fr))]">
          <div className="grid gap-3.75 justify-items-center text-center">
            <h6 className="p-2.5 text-[#374754] text-sm font-bold">Apiary</h6>
            <div className="w-30.5 h-30.75">
              <img src={logos1} alt="logo" className="w-full" />
            </div>

            <p className="p-2.5 px-4 text-[#374754] text-lg">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
          </div>{' '}
          <div className="grid gap-3.75 justify-items-center text-center">
            <h6 className="p-2.5 text-[#374754] text-sm font-bold">Android</h6>
            <div className="w-30.5 h-30.75">
              <img src={logos2} alt="logo" className="w-full" />
            </div>

            <p className="p-2.5 px-4 text-[#374754] text-lg">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
          </div>{' '}
          <div className="grid gap-3.75 justify-items-center text-center">
            <h6 className="p-2.5 text-[#374754] text-sm font-bold">
              Base Camp
            </h6>
            <div className="w-30.5 h-30.75">
              <img src={logos34} alt="logo" className="w-full" />
            </div>

            <p className="p-2.5 px-4 text-[#374754] text-lg">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
          </div>{' '}
          <div className="grid gap-3.75 justify-items-center text-center">
            <h6 className="p-2.5 text-[#374754] text-sm font-bold">
              Boot Camp
            </h6>
            <div className="w-30.5 h-30.75">
              <img src={logos34} alt="logo" className="w-full" />
            </div>

            <p className="p-2.5 px-4 text-[#374754] text-lg">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
          </div>{' '}
          <div className="grid gap-3.75 justify-items-center text-center">
            <h6 className="p-2.5 text-[#374754] text-sm font-bold">Airbnb</h6>
            <div className="w-30.5 h-30.75">
              <img src={logos5} alt="logo" className="w-full" />
            </div>

            <p className="p-2.5 px-4 text-[#374754] text-lg">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
          </div>{' '}
          <div className="grid gap-3.75 justify-items-center text-center">
            <h6 className="p-2.5 text-[#374754] text-sm font-bold">
              Apple Store
            </h6>
            <div className="w-30.5 h-30.75">
              <img src={logos6} alt="logo" className="w-full" />
            </div>

            <p className="p-2.5 px-4 text-[#374754] text-lg">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
          </div>{' '}
        </div>

        <button></button>
      </div>

      <div className="max-w-[1440px] mx-auto py-25 flex flex-col justify-center gap-20 items-center text-[#252B42]">
        <h2 className="p-2.5 text-[46px]">Testimonials</h2>

        <div className="max-w-[703px] flex flex-col gap-5.25 items-center">
          <img src={Dropbox} alt="Dropbox" />

          <h4 className="p-2.5 text-center text-[#374754] font-bold">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </h4>
        </div>

        <div className="flex gap-4.25">
          <img src={Ellipse2} alt="" className="w-12.5 h-12.5 rounded-full" />

          <div>
            <h6 className="text-[#374754] py-0.5 text-sm font-bold">
              Organize across
            </h6>

            <p className="text-[17px]">Ui designer</p>
          </div>
        </div>

        <div className="p-5">
          <button className="cursor-pointer px-11.75 py-3.75 rounded-[35px] text-white bg-[#38A3F1] text-[22px] font-bold">
            More Testimonials
          </button>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto py-25 flex flex-col justify-center gap-20 items-center text-[#252B42]">
        <div className="max-w-[380px]">
          <h2 className="text-[46px] p-2.5 text-center">Pricing</h2>

          <h4 className="mt-1.75 text-center text-[#374754] p-2.5 font-bold">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </h4>
        </div>

        <div className="self-stretch flex gap-12.5 flex-wrap lg:flex-nowrap justify-center px-6">
          <div className="bg-white drop-shadow-[0_13px_19px_rgba(0,0,0,0.1)] basis-88.75 p-10 border border-[#DEDEDE] rounded-[10px] flex flex-col items-start gap-7.5">
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

            <button className="cursor-pointer self-center max-w-[255px] w-full px-9.5 py-4.5 rounded-[35px] text-white bg-[#38A3F1] font-medium">
              Order Now
            </button>
          </div>

          <div className="bg-white drop-shadow-[0_13px_19px_rgba(0,0,0,0.1)] basis-88.75 p-10 border border-[#DEDEDE] rounded-[10px] flex flex-col items-start gap-7.5">
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

            <button className="cursor-pointer self-center max-w-[255px] w-full px-9.5 py-4.5 rounded-[35px] text-white bg-[#38A3F1] font-medium">
              Order Now
            </button>
          </div>

          <div className="bg-linear-to-tr from-[#EF2779] to-[#7834BE] text-white drop-shadow-[0_13px_19px_rgba(0,0,0,0.1)] basis-88.75 p-10 border border-[#EF2779] rounded-[10px] flex flex-col items-start gap-7.5">
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

            <button className="cursor-pointer self-center max-w-[255px] w-full px-9.5 py-4.5 rounded-[35px] bg-white text-[#EF2779] font-medium">
              Order Now
            </button>
          </div>
        </div>
      </div>

      <div className="py-8.75 bg-[#252B42]">
        <div className="max-w-[1440px] mx-auto px-6 py-12.5 flex flex-col gap-12.5 items-center text-white">
          <div className="grid gap-1.75">
            <h2 className="p-2.5 text-center text-[46px] leading-14.25">
              Contact Us
            </h2>

            <h4 className="p-2.5 text-center font-bold">
              Most calendars are designed for teams. <br /> Slate is designed
              for freelancers
            </h4>
          </div>

          <div className="max-w-[729px] w-full grid grid-cols-[minmax(0,400px)] md:grid-cols-[400px_auto] gap-16.25 justify-center items-center">
            <form
              action="#"
              className="rounded-[13px] py-6.5 px-6 sm:px-10.25 bg-white border border-[#DDDDDD] drop-shadow-[0_9px_13px_rgba(0,0,0,0.1)] grid gap-7.75 text-[#18171D]"
            >
              <h3 className="text-center font-bold">Contact Us</h3>

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
              <button className="cursor-pointer justify-self-start rounded-[35px] px-9.5 py-4.5 bg-[#EF2779] text-white font-medium text-sm">
                Send
              </button>
            </form>

            <div className="grid gap-12.5">
              <div className="grid gap-2.5">
                <div className="flex gap-2.5 items-center">
                  <img src={map} alt="map icon" className="w-6.5 h-8" />
                  <h6 className="p-2.5 text-sm font-semibold">
                    6386 Spring St Anchorage,
                    <br />
                    Georgia 12473 United States
                  </h6>
                </div>

                <div className="flex gap-2.5 items-center">
                  <img src={phone} alt="map icon" className="w-6.5 h-8" />
                  <h6 className="p-2.5 text-sm font-semibold">
                    (843) 555-0130
                  </h6>
                </div>

                <div className="flex gap-2.5 items-center">
                  <img src={email} alt="map icon" className="w-6.5 h-8" />
                  <h6 className="p-2.5 text-sm font-semibold">
                    sherazmalyk7@gmail.com
                  </h6>
                </div>
              </div>

              <div className="p-2.5 flex gap-6">
                <img
                  src={twitter}
                  alt="twitter icon"
                  className="w-10.25 h-10.25"
                />
                <img
                  src={facebook}
                  alt="facebook icon"
                  className="w-10.25 h-10.25"
                />
                <img
                  src={linkedin}
                  alt="linkedin icon"
                  className="w-10.25 h-10.25"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="max-w-[1440px] mx-auto px-6 lg:px-12.5 py-30 text-[#252B42] bg-white">
        <div className="grid gap-13.75 md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-[auto_auto_auto] justify-center">
          <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-3.75 items-center">
            <h3 className="py-2.5 text-[22px] font-bold">Pages</h3>

            <ul className="grid gap-3.75 text-[15px]">
              <li className="cursor-pointer">Eleanor Edwards</li>
              <li className="cursor-pointer">Ted Robertson</li>
              <li className="cursor-pointer">Annette Russell</li>
              <li className="cursor-pointer">Jennie Mckinney</li>
              <li className="cursor-pointer">Gloria Richards</li>
            </ul>
          </div>

          <div className="flex">
            <img
              src={screen}
              alt="map image"
              className="basis-118 rounded-3xl"
            />
          </div>
          {/* replace it with original map */}

          <div className="flex flex-col gap-10 items-center">
            <div className="grid gap-2.5">
              <div className="flex gap-2.5 items-center">
                <img src={map} alt="map icon" className="w-6.5 h-8" />
                <h6 className="p-2.5 text-sm font-semibold">
                  6386 Spring St Anchorage,
                  <br /> Georgia 12473 United States
                </h6>
              </div>

              <div className="flex gap-2.5 items-center">
                <img src={phone} alt="map icon" className="w-6.5 h-8" />
                <h6 className="p-2.5 text-sm font-semibold">(843) 555-0130</h6>
              </div>

              <div className="flex gap-2.5 items-center">
                <img src={email} alt="map icon" className="w-6.5 h-8" />
                <h6 className="p-2.5 text-sm font-semibold">
                  sherazmalyk7@gmail.com
                </h6>
              </div>
            </div>

            <div className="p-2.5 flex gap-6">
              <img
                src={twitter}
                alt="twitter icon"
                className="cursor-pointer w-10.25 h-10.25"
              />
              <img
                src={facebook}
                alt="facebook icon"
                className="cursor-pointer w-10.25 h-10.25"
              />
              <img
                src={linkedin}
                alt="linkedin icon"
                className="cursor-pointer w-10.25 h-10.25"
              />
            </div>
          </div>
        </div>

        <p className="mt-20 text-lg text-[#00000099] text-center">
          Developed by{' '}
          <a
            href="https://www.fiverr.com/sherazmalik_se"
            className="text-[#FF7967] font-medium"
          >
            Sheraz Ahmad
          </a>
          &nbsp;& Designed by{' '}
          <a
            href="https://www.figma.com/@CaptainDesign"
            className="text-[#FF7967] font-medium"
          >
            CaptainDesign
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
