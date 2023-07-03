import BrandBanner from '@/app/components/BrandBanner'
import Hero from '@/app/components/Hero'
import Navigation from '@/app/components/Navigation'
import Benefits from './components/Benefits'
import Features from './components/Features'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="mainpage flex w-full h-full flex-col items-center justify-between">
      <Navigation />
      <Hero />
      <BrandBanner />
      <Benefits />
      <Features />
      <Footer />
    </main>
  )
}
