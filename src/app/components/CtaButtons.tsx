import React from 'react';

const CtaButtons = ({ py, px, textsize }) => {
  return (
    <div className={`text-white flex gap-5 ${textsize} flex-col md:flex-row`}>
      <button className={`bg-primBlue ${py} ${px} rounded-[3px] w-full lg:w-fit`}>
        Start Free Trial
      </button>
      <button className={`bg-darkBlue ${py} ${px} rounded-[3px] w-full lg:w-fit`}>
        Schedule Demo
      </button>
    </div>
  );
};

export default CtaButtons;
