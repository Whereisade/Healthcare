import React from 'react'
import Heading1 from './Heading1'
import HeadingBig from './HeadingBig'

export default function Bannerimg({bhead,}) {
  return (
    <div className="h-[700px] bg-cover bg-center bg-no-repeat flex flex-col  justify-center items-center text-white"
    style={{ backgroundImage: "url('https://res.cloudinary.com/ddrylpaqx/image/upload/v1730587205/fetchpik.com_-high-CosRY2QuMn_hdtwkn.jpg')" }}>
        <div className="absolute inset-0 bg-[#E0EDFF] opacity-30 h-[700px] -z-[0]"></div>
        <HeadingBig head={bhead} className="z-30"/>
    </div>
  )
}