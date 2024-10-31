import React from 'react'
import Image from 'next/image';

export default function Twoheading() {
  return (
    <div className="flex flex-col md:gap-14 w-1/2 text-[#13182F]">
      <div>
        <p className="text-[14px] md:text-[20px] font-[family-name:var(--font-proxnovar)]">Why Choose Us</p>
        <h1 className="text-[20px] md:text-[36px] font-[700] font-[family-name:var(--font-domainer)]">All-inclusive Medical Care for Everyone</h1>
        <p className=" hidden md:block text-[14px] font-[family-name:var(--font-proxnovar)] md:text-[20px] opacity-90">
          Comprehensive medical care tailored to all, ensuring health and
          well-being for every individual.
        </p>
      </div>
      <div className="w-[524px] h-[273px]">
        <Image
          src="https://res.cloudinary.com/ddrylpaqx/image/upload/v1730146568/66b0a33e2441e4f7c479053e_services-banner-img_m1w7ow.jpg"
          width={500}
          height={200}
          className='rounded-lg'
        />
      </div>
    </div>
  );
}
