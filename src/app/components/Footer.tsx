import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-secBlue flex flex-col items-center'>
      <div className='w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-between px-6 2xl:px-0 py-16 md:border-none border-b-2 border-[#434064]'>
        <h3 className="text-white text-[40px] md:text-[30px] xl:text-[40px] font-bold md:w-full">Stay in the loop with our newsletter</h3>
        <div className="relative md:w-3/5 w-full my-10 md:my-0">
          <label htmlFor="Subscribe" className='sr-only'>Subscribe</label>
          <input
            type="text"
            id="Subscribe"
            placeholder="Enter your email address..."
            className='rounded-sm text-[16px] md:text-[12px] lg:text-[14px] xl:text-[16px] h-[60px] w-full pl-6'
          />
          <span className='absolute end-[0.35rem] inset-y-[0.35rem]'>
            <button type="button" className="text-white bg-primBlue hover:bg-[#2d31b9] px-4 py-3 rounded-sm">
              <span className="font-bold text-[16px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-white">Subscribe</span>
            </button>
          </span>
        </div>
      </div>
      <div className='flex flex-col xl:flex-row overflow-hidden xl:justify-between xl:items-center w-[97vw] max-w-[1400px] px-6 2xl:px-0'>
        <div className='flex flex-col md:flex-row justify-between md:items-center items-start py-4'>
          <img src="/logotype-2.svg" alt='footer logo' width={120} height={100} className='md:my-0 my-16' />
          <ul className='flex flex-col md:flex-row min-w-full justify-between xl:ml-24 lg:ml-12 md:ml-4 text-white font-bold text-[14px] gap-6'>
            <li><a href="/why-calendio">Why Calendio</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/enterprise">Enterprise</a></li>
            <li><a href="/join-us">Join Us</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div className='text-white text-[14px] md:text-[16px] py-12 md:py-6 md:self-center'>
          <p>All Rights Reserved ® Calendio 2023</p>
        </div>
      </div>
    </div>
  )
}

export default Footer