import React from 'react';

interface CtaButtonsProps {
  py: string;
  px: string;
  textsize: string;
}

const CtaButtons: React.FC<CtaButtonsProps> = ({ py, px, textsize }) => {
  return (
    <div className={`text-white flex gap-5 ${textsize} flex-col md:flex-row`}>
      <button className={`bg-primBlue hover:bg-[#2d31b9] ${py} ${px} rounded-[3px] w-full lg:w-fit`}>
        Start Free Trial
      </button>
      <button className={`bg-darkBlue hover:bg-[#0B173F] ${py} ${px} rounded-[3px] w-full lg:w-fit`}>
        Schedule Demo
      </button>
    </div>
  );
};

export default CtaButtons;