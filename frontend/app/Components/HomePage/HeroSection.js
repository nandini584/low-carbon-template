import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="bg-[#F4F4F4] md:pl-36 pl-6 md:pr-96 md:py-20 py-4 flex flex-row items-center justify-between">
        <div>
            <h1 className="md:text-6xl text-2xl text-black font-semibold">
                Sustainability Web Designs <br />{' '}
                <span className="text-[#490ED9] font-semibold">
                Accessible & best SEO <br/> practices
                </span>
            </h1>
            <h4 className='md:text-lg text-black text-sm mt-8 md:w-[45vw]'>
                Our approach to web design is rooted in minimalism and sustainability, ensuring that every site we build is optimized for energy efficiency and low environmental impact.
            </h4>
            <ul className='text-lg text-black flex flex-row item-center justify-between mt-8 w-[45vw] font-semibold'>
                <li><span className='text-2xl'>&#x1f4af;</span> Sustainability</li>
                <li><span className='text-2xl'>&#x1f4af;</span> Accessibility</li>
                <li><span className='text-2xl'>&#x1f4af;</span> SEO</li>
            </ul>
        </div>
      {/* <Image
        src="/path/to/your/image.jpg"
        alt="Description of the image"
        width={500}
        height={300}
        /> */}
    </div>
  )
}

export default HeroSection