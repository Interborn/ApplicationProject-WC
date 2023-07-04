import React from 'react';
import BrandBanner from '@/app/components/BrandBanner'
import Hero from '@/app/components/Hero'
import Navigation from '@/app/components/Navigation'
import Benefits from './components/Benefits'
import Features from './components/Features'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll">
      <main className="mainpage flex w-full flex-col items-center justify-between">
        <div className='relative'>
          <Navigation />
        </div>
        <Hero />
        <BrandBanner />
        <Benefits />
        <Features />
        <Footer />
      </main>
    </div>
  )
}
