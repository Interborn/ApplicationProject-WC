'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const benefitIndex = [
  {
    class: 'benefit-1',
    title: 'Automated appointment booking and payment processing',
    body:
      'Encourage early booking with the personalized booking environment created by Calendio. Our appointment booking software easily integrates with your website, making it a stress-free online booking experience for your client.',
    image: '/benefit-1.png',
  },
  {
    class: 'benefit-2',
    title: 'Appointment reminders for all participants',
    body:
      'No more forgotten appointments. Our scheduling software will automatically send email and SMS notifications so that both the staff and the customers receive appointment reminders and updates.',
    image: '/benefit-2.png',
  },
  {
    class: 'benefit-3',
    title: 'Monitor your business performance',
    body:
      'The Calendio online booking system helps you increase sales by providing important business reports and dashboards to help you track the performance of your business through vital KPIs and statistics.',
    image: '/benefit-3.png',
  },
];

const Benefits = () => {
  const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold value as needed
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const visibleBenefitIndex = parseInt(entry.target.dataset.index);
          setActiveBenefitIndex(visibleBenefitIndex);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    const benefits = document.querySelectorAll('.benefit');

    benefits.forEach((benefit, index) => {
      observer.observe(benefit);
      benefit.setAttribute('data-index', index.toString());
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const currentBenefit = benefitIndex[activeBenefitIndex] || {};

  return (
    <div className="w-full">
      <div className="w-full md:flex md:justify-center pb-[8rem] md:pb-0">
        {/* Desktop/Tablet */}
        <div className="flex md:flex-row flex-col justify-between w-full max-w-[1400px] lg:py-10 sm:py-6 h-[100%] px-6">
          <div className="md:block hidden w-1/2 max-w-[455px] h-full">
            {benefitIndex.map((benefit, index) => (
              <div key={index} className={`benefit ${index === activeBenefitIndex ? 'active' : ''}`}>
                <div className={`${benefit.class} w-full py-40`}>
                  <h2 className="text-[40px] text-secBlue font-bold">{benefit.title}</h2>
                  <p className="text-[18px] text-triBlue">{benefit.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/2 h-[100%] sticky md:block hidden" style={{ top: 'calc(50vh/2)' }}>
            <div className="w-full flex justify-center">
              <Image src={currentBenefit.image} width={600} height={500} />
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="flex md:hidden flex-col justify-between min-w-full sm:py-6 h-[100%] px-6">
          {benefitIndex.map((benefit, index) => (
            <div key={index} className={`benefit ${index === activeBenefitIndex ? 'active' : ''}`}>
              <div className={`${benefit.class} w-full py-16 pt-32 flex flex-col gap-5`}>
                <h2 className="text-[40px] text-secBlue font-bold">{benefit.title}</h2>
                <p className="text-[18px] text-triBlue">{benefit.body}</p>
              </div>
              <div className="w-full flex justify-center">
                <Image src={benefit.image} width={500} height={500} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;