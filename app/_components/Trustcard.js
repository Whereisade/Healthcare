import React from 'react'
import Image from 'next/image';

export default function Trustcard() {
  return (
    <div className="bg-[#E0EDFF] flex p-5 items-center gap-2 rounded-lg">
      <div className="rounded-full ">
        <Image
          src="https://res.cloudinary.com/ddrylpaqx/image/upload/v1730157181/66b0a41ebfe67fc6e1221e0a_services-choose-icon-01_ndc5tv.svg"
          width={60}
          height={500}
          className='rounded-full'
        />
      </div>
      <div className=''>
        <h1 className='font-bold'>Health Partner</h1>
        <p>Your trusted partner in health, providing comprehensive and compassionate care</p>
      </div>
    </div>
  );
}
