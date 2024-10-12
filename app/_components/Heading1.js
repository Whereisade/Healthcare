import React from 'react'
import Button from './Button'

export default function Heading1({ head, para }) {
  return (
    <div className="">
     <h3 className="text-[40px] font-[family-name:var(--font-domainer)] font-[600] md:w-fit">{head}</h3>
     <p className="font-[family-name:var(--font-proxnovar)] md:w-[70%]">{para}</p>
     
    </div>
  )
}
