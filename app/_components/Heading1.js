import React from 'react'
import Button from './Button'

export default function Heading1({ head, para, color2, color }) {
  return (
    <div className="flex flex-col gap-2 md:gap-6">
     <h3 className={`text-[24px] md:text-[40px] font-[family-name:var(--font-domainer)] font-[600] ${color ? 'text-white' : 'text-[#13182F]' } md:w-fit`}>{head}</h3>
     <p className={`font-[family-name:var(--font-proxnovar)] md:w-[70%] text-[16px] leading-6 ${color2 ? 'text-white' : 'text-[#13182F]' } `}>{para}</p>
     
    </div>
  )
}
