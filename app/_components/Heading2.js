import React from 'react'

export default function Heading2({head, left}) {
  return (
    <h2 className={`text-[30px] md:text-[30px] font-[family-name:var(--font-domainer)] font-[600]  text-[#13182F] ${left ? 'text-center' : 'w-fit'} `}>{head}</h2>
  )
}
