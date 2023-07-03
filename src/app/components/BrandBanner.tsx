import Image from 'next/image'
import React from 'react'

const BrandBanner = () => {
  return (
    <div className='w-[100%] overflow-hidden'>
      <div className='xl:h-[200px] xl:px-36 xl:w-full bg-secBlue xl:flex xl:justify-around grid grid-cols-2 gap-y-14 md:gap-y-10 xl:gap-y-0 md:grid-cols-3 justify-items-center xl:py-0 py-20'>
        <Image src="/partner-1.svg" width={180} height={80} />
        <Image src="/partner-2.svg" width={180} height={80} />
        <Image src="/partner-3.svg" width={180} height={80} />
        <Image src="/partner-4.svg" width={180} height={80} />
        <Image src="/partner-5.svg" width={180} height={80} />
        <Image src="/partner-6.svg" width={180} height={80} />
      </div>
    </div>
  )
}

export default BrandBanner
