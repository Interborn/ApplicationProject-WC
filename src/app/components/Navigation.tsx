'use client'
import React, { useState, useEffect } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import CtaButtons from './CtaButtons';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial isMobile value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <nav className="fixed top-0 left-0 w-screen z-50">
        <div className="w-full h-full bg-white ml-[-10px]">
          <div className="flex justify-center w-full h-full max-w-[1400px] mx-auto px-6 py-6">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <img src="/logotype.svg" alt="Logo" width={113} height={100} />
                <ul className={`lg:flex hidden min-w-full justify-between xl:ml-24 lg:ml-12 md:ml-4 text-secBlue font-bold text-[14px] ${isMobile ? 'hidden' : ''}`}>
                  <li><a href="/why-calendio">Why Calendio</a></li>
                  <li><a href="/features">Features</a></li>
                  <li><a href="/pricing">Pricing</a></li>
                  <li><a href="/enterprise">Enterprise</a></li>
                  <li><a href="/join-us">Join Us</a></li>
                  <li><a href="/login">Login</a></li>
                </ul>
              </div>

              <div className="hidden lg:block">
                <CtaButtons py="py-3" px="px-4" textsize='text-[14px]' />
              </div>

              {isMobile && (
                <div className="lg:hidden">
                  {!isMenuOpen ? (<IoMenu className="text-secBlue w-10 h-10 cursor-pointer" onClick={toggleMenu} />) : (<IoClose className="text-secBlue w-10 h-10 cursor-pointer" onClick={toggleMenu} />)}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && isMobile && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-white z-40">
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="text-secBlue font-bold text-[44px]">
              <li><a href="/why-calendio">Why Calendio</a></li>
              <li><a href="/features">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/enterprise">Enterprise</a></li>
              <li><a href="/join-us">Join Us</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
