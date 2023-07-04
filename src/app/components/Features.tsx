'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const featureIndex = [
  {
    title: 'Learn About Your Business Occupancy and Earned Revenue',
    body:
      'Keeping a detailed record of your business performance helps you have a clear insight into where your business is heading and what you can do to increase sales.',
    link: '#',
    option: 0,
    image: '/feature-1.png',
  },
  {
    title: 'Discover Your Returning Customer Rate',
    body:
      'Calendio dashboard reveals you the number of new customers and the percentage of your returning customers, so you can always know your retention rate.',
    link: '#',
    option: 1,
    image: '/feature-2.png',
  },
  {
    title: 'Easily Identify Your Most Demanded Employees and Services',
    body:
      'Under the performance section in the Calendio dashboard, you can see how many bookings each employee had and how much revenue they generated over the period you set.',
    link: '#',
    option: 2,
    image: '/feature-3.png',
  },
];

const startTimer = (
  setTimeProgress: React.Dispatch<React.SetStateAction<number>>,
  setSelectedOption: React.Dispatch<React.SetStateAction<number>>
) => {
  return setInterval(() => {
    setTimeProgress((prevTimeProgress) => {
      if (prevTimeProgress === 1000) {
        setSelectedOption((prevOption) =>
          prevOption === featureIndex.length - 1 ? 0 : prevOption + 1
        );
        return 0; // Reset the timer
      } else {
        return prevTimeProgress + 1;
      }
    });
  }, 10);
};

const Features = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [prevSelectedOption, setPrevSelectedOption] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [timeProgress, setTimeProgress] = useState(0);
  

  const startOrResetTimer = () => {
    clearInterval(timer as NodeJS.Timeout);
    setTimer(startTimer(setTimeProgress, setSelectedOption) as NodeJS.Timeout);
  };

  const handleOptionClick = (option: number) => {
    if (selectedOption === option) {
      return; // Do nothing if the clicked option is already selected
    }
    setSelectedOption(option);

    setSelectedOption(option);
  };

  const handleAccordionHover = () => {
    clearInterval(timer as NodeJS.Timeout);
  };

  const handleAccordionLeave = () => {
    startOrResetTimer();
  };

  useEffect(() => {
    setPrevSelectedOption(selectedOption);
  }, [selectedOption]);  

  useEffect(() => {
    startOrResetTimer();
    return () => {
      clearInterval(timer as NodeJS.Timeout);
    };
  }, []);

  useEffect(() => {
    const progress = document.getElementById('progress-bar') as HTMLProgressElement;
    if (progress) {
      progress.value = timeProgress;
    }
  }, [timeProgress]);

  return (
    <div className="w-full bg-primGray flex justify-center lg:h-[710px] overflow-hidden">
      <div className="flex lg:flex-row flex-col justify-center items-center w-screen p-10 max-w-[1600px]">
        <div className="lg:w-[60%] w-full h-full lg:pr-12 relative pb-[80%] lg:pb-0">
          {featureIndex.map((feature, index) => (
            <div
              key={index}
              className={`absolute top-0 w-full h-full transition-opacity duration-300 mt-[4rem] ${
                selectedOption === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={feature.image}
                width={800}
                height={1000}
              />
            </div>
          ))}
        </div>
        <div
          className="accordion flex flex-col lg:w-[35%] w-full mb-20 md:mb-0 border-b  lg:mt-0 lg:overflow-hidden border-secGray"
          onMouseEnter={handleAccordionHover}
          onMouseLeave={handleAccordionLeave}
        >
          {featureIndex.map((feature, index) => (
            <div
              key={index}
              className={"group focus:outline-none pb-6 " + (selectedOption !== index ? 'border-t border-secGray' : 'border-0')}
            >
              {selectedOption === index && (
                <progress
                  id="progress-bar"
                  className="w-full h-[0.3rem]"
                  max="1000"
                  value={timeProgress}
                ></progress>
              )}
              <button
                className="flex flex-col justify-between px-3 font-semibold focus:outline-none pt-6 w-full"
                onClick={() => handleOptionClick(index)}
              >
                <span className="text-[21px] lg:text-[28px] lg:max-w-[26ch] text-left text-secBlue font-bold line-clamp-2">
                  {feature.title}
                </span>
              </button>
              {selectedOption === index && (
                <div className={`overflow-hidden duration-300 px-4 text-[14px] lg:text-[17px] lg:max-w-[50ch] flex flex-col justify-center ${selectedOption !== prevSelectedOption ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                  <p className="text-triBlue my-6">{feature.body}</p>
                  <a href={feature.link} className="text-primBlue w-[10ch] font-bold hover:scale-105">
                    Learn more
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;