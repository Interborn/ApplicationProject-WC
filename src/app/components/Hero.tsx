import React from 'react';
import Image from 'next/image';
import CtaButtons from './CtaButtons';

const Hero = () => {
  return (
    <div>
      <div className='flex overflow-hidden lg:flex-row flex-col justify-between items-center w-full max-w-[1400px] lg:py-10 sm:py-6 h-full px-6'>
        <div className='flex flex-col gap-10 lg:w-1/2 lg:max-w-xl'>
          <h1 className='font-bold text-[50px] text-darkBlue leading-[3.5rem]'>The most intuitive online booking system</h1>
          <p className='text-secBlue text-[20px] lg:max-w-xl'>Calendio booking software helps you automate bookings, payments and reminders and manage services, employees, and locations. Set your schedule and availability, and watch your appointments get booked 24/7.</p>
          <div>
            <CtaButtons py={'py-4'} px={'px-4'} textsize={'text-[22px]'} /> {/* Pass the props correctly */}
          </div>
        </div>
        <div className='flex lg:w-1/2 my-24 justify-center items-center mr-6'>
          <Image src="/hero.png" width={1400} height={1000} className='max-h-[400px] lg:max-h-full object-cover' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
