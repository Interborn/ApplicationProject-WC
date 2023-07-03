import React from 'react';
import Image from 'next/image';
import { IoMenu } from "react-icons/io5";
import CtaButtons from './CtaButtons';

const Navigation = () => {
  return (
    <div>
      <div className='flex overflow-hidden justify-between items-center w-[97vw] max-w-[1400px] py-6 px-6'>
        <div className='flex justify-between items-center'>
          <Image src="/logotype.svg" width={113} height={100} />
          <ul className='lg:flex hidden min-w-full justify-between xl:ml-24 lg:ml-12 md:ml-4 text-secBlue font-bold text-[14px]'>
            <li>Why Calendio</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Enterprise</li>
            <li>Join Us</li>
            <li>Login</li>
          </ul>
        </div>
        <div className='hidden lg:block'>
          <CtaButtons py={'py-3'} px={'px-4'} textsize={'tex-[15px]'} /> {/* Pass the props correctly */}
        </div>
        <div className='lg:hidden'>
          <IoMenu className='text-secBlue w-10 h-10' />
        </div>
      </div>
    </div>
  );
};

export default Navigation;