import React from 'react'
import Image from 'next/image'

export default function Section({ title, description, imageSrc, reversed }) {
  return (
    <section className={`flex flex-col md:flex-row items-center ${reversed ? 'flex-row-reverse' : ''}`}>
      <div className="md:w-1/2 p-4">
        <Image src={imageSrc} alt={title} width={600} height={500} className="rounded-lg shadow-md" />
      </div>
      <div className="md:w-1/2 p-4">
        <h2 className="text-[30px] md:text-[40px] font-[family-name:var(--font-domainer)] font-[600] md:w-fit">{title}</h2>
        <p className="font-[family-name:var(--font-proxnovar)] md:w-[70%] text-[16px] leading-6">{description}</p>
      </div>
    </section>
  )
}
