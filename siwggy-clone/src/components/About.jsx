import React from 'react';
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import ScrollToTop from 'react-scroll-to-top';

const About = () => {
  return (
    <div>
      {/* start here */}
      <div className='relative'>
        <div className='flex justify-center items-center '>
          <img
            className='opacity-70'
            src='	https://careers.swiggy.com/assets/img/banner3.jpg'
            alt='background-img'
          />
          <div className='absolute  justify-center flex flex-col  gap-y-6 font-extralight text-white text-4xl tracking-widest'>
            <h1>Discover</h1>
            <p>The Swiggester</p>
            <p>In You</p>
          </div>
        </div>
      </div>
      {/* ends here */}
      <div className='pt-8 pb-8  bg-orange-400 pl-8 flex items-center justify-center gap-x-8 text-white text-3xl'>
        <BiSolidQuoteLeft size={32} />

        <p className='pt-3 tracking-wide font-thin text-2xl w-3/4 leading-8 '>
          Our mission is to elevate the quality of life for the urban consumer
          with unparalleled convenience. Convenience is what makes us tick. It's
          what makes us get out of bed and say, "Let's do this."
        </p>
      </div>
      <div className='relative cursor-pointer'>
        <div className='absolute top-0 justify-center flex pt-12 items-center w-full font-thin text-3xl tracking-widest'>
          <h1>
            The Swiggy <span className='font-bold tracking-wider'>Journey</span>
          </h1>
        </div>
        <div className='pt-32 '>
          <img
            src='https://careers.swiggy.com/assets/img/Swiggy-Journey.jpg'
            alt='about-journey'
          />
        </div>
      </div>
      <div className='pt-12  pb-12 flex flex-col items-center justify-center tracking-widest font-thin text-2xl'>
        <h1 className='pb-4 font-bold'>What’s In Store For The Future?</h1>
        <p className='w-3/4'>
          Swiggy has grand plans to be India’s most loved hyperlocal player. It
          aims to be the most accessible platform on the network - reimagining
          the meaning of convenience in the country through a variety of service
          offerings.
        </p>
      </div>
      <div className='border-b border-spacing-10 border-dashed border-slate-700  '></div>
      {/* changing the game */}
      <div className='flex  gap-x-8 pt-8 ml-12 mb-32'>
        <div className='flex items-center justify-center'>
          <h1 className='text-4xl tracking-widest '>
            Changing{' '}
            <span className='font-bold tracking-tighter '>the game</span>
          </h1>
        </div>

        {/* 2nd  */}
        <div className='flex flex-row gap-x-4 mr-4'>
          <div className='shadow-lg rounded-md bg-slate-100 border-orange-500 border h-32 w-64 flex flex-col items-center justify-center'>
            <h2 className=' text-2xl pb-4 font-bold tracking-widest'>
              150000 <span>+</span>
            </h2>
            <h3 className='font-thin tracking-widest w-3/4 '>
              Restaurant Partners Countrywide
            </h3>
          </div>

          <div className='shadow-lg rounded-md bg-slate-100 border-orange-500 border h-32 w-64 flex flex-col items-center justify-center '>
            <h2 className=' text-2xl pb-4 font-bold tracking-widest'>
              5000 <span>+</span>
            </h2>
            <h3 className='font-thin tracking-widest w-3/4 '>
              Employees across the country
            </h3>
          </div>
          {/* 3rd */}
          <div className='shadow-lg rounded-md bg-slate-100 border-orange-500 border h-32 w-64 flex flex-col items-center justify-center '>
            <h2 className=' text-2xl pb-4 font-bold tracking-widest'>
              260000 <span>+</span>
            </h2>
            <h3 className='font-thin tracking-widest w-3/4 '>
              Delivery
              <span>Executives</span>
            </h3>
          </div>
          <div className='shadow-lg rounded-md bg-slate-100 border-orange-500 border h-32 w-64 flex flex-col items-center justify-center '>
            <h2 className=' text-2xl pb-4 font-bold tracking-widest'>
              500 <span>+</span>
            </h2>
            <h3 className='font-thin tracking-widest w-3/4 '>
              Cities <span>Pan India</span>
            </h3>
          </div>
          {/* 4th */}
        </div>
      </div>
      {/* changing the game div ends here */}
      {/* swiggy first Jamboree */}
      <div className='flex grid grid-cols-1 md:grid-cols-2'>
        <div className=' flex flex-col gap-y-4 items-center justify-start bg-violet-500 text-white'>
          <h3 className='mt-4 font-bold text-4xl tracking-widest'>
            Swiggy's first Jamboree
          </h3>
          <p className='w-3/4 leading-8 tracking-wide mt-4 '>
            After two years of remote working at Swiggy, we had the first
            installment of our in-office Jamboree! It was a fun-filled week that
            covered - interesting knowledge sharing sessions with leaders, teams
            getting together in-person, and activities ranging from concerts to
            game sessions. Here's a glimpse into the makings of this delightful
            week.
          </p>
          <button className='btn btn-md outline-none border-none bg-white text-rose-900 mt-6'>
            Swiggy first Jamboree
          </button>
        </div>
        {/* swiggy first ends here */}
        {/* starts here */}
        <div>
          <figure>
            <img
              src='https://careers.swiggy.com/assets/img/jamboree-2022.jpg'
              alt='swiggy-jamboree'
            />
          </figure>
        </div>
      </div>
      {/* ends here */}
      {/* starts here */}

      <div className='grid grid-cols-1 md:grid-cols-2 '>
        {/* swiggy first ends here */}
        {/* starts here */}
        <div>
          <figure>
            <img
              src='https://careers.swiggy.com/assets/img/future-of-work.jpg'
              alt='swiggy-jamboree'
            />
          </figure>
        </div>
        <div className=' flex flex-col gap-y-4 items-center justify-center bg-purple-500 text-white'>
          <h3 className='ml-4 mt-4 font-bold text-3xl tracking-widest'>
            We Are Swiggy | The Inside Scoop
          </h3>
          <p className='w-3/4 leading-8 tracking-wide mt-4 '>
            Want to know what's buzzing at the Swiggy side of the planet? There
            here is what you need to follow. We Are Swiggy channels on Social
            Media will give you an inside-out view of the everyday serious and
            fun stuff within our world. All you need to do is to click your
            preferred channel and make sure you follow us.
          </p>
          <div className='flex'>
            <ul className='flex gap-x-4 mt-4 '>
              <li className='btn btn-md link link-hover transform-translate hover:skew-y-1'>
                <AiFillLinkedin sie={32} />
              </li>
              <li className='btn btn-md link link-hover transform-translate hover:skew-y-1'>
                <AiFillInstagram sie={32} />
              </li>
              <li className='btn btn-md link link-hover transform-translate hover:skew-y-1'>
                <FaFacebookSquare sie={32} />
              </li>
              <li className='btn btn-md link link-hover hover:transform hover:skew-y-1'>
                <FaXTwitter sie={32} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ends here */}
      {/* starts here */}
      {/* ends here */}
      <div className='mt-6 flex flex-col items-center justify-center mb-8 leading-10'>
        <h4 className='text-4xl mb-4 tracking-widest font-thin ml-6'>
          Get In <span className='font-bold  '>Touch</span>
        </h4>
        <h2 className='text-orange-500 tracking-widest text-2xl'>
          Head Office
        </h2>
        <p className='text-xl tracking-widest font-thin mt-2'>
          Bundl Technologies Pvt. Ltd.
        </p>
        <i className='text-xl tracking-widest font-thin mt-2 w-3/4'>
          No. 55 Sy No 8 to 14 I & J Block - Ground Floor, Embassy Tech Village
          | Outer Ring Road, Devarbisanahalli, Varthur Bengaluru - 560130
        </i>
      </div>
      <ScrollToTop smooth className='bg-orange-500' />
    </div>
  );
};

export default About;
