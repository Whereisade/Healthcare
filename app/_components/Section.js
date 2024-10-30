import React from 'react'
import Image from 'next/image'

export default function Section({ title, description, imageSrc, reversed }) {
  return (
    <section
      className={`flex flex-col items-center justify-center text-[#13182F]  md:gap-14 ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="w-fit ">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="md:max-w-[380px] p-1  md:flex md:flex-col md:gap-4 ">
        <h2 className="text-[30px] md:text-[32px] font-[family-name:var(--font-domainer)] font-[600] w-fit ">
          {title}
        </h2>
        <p className="font-[family-name:var(--font-proxnovar)] md:w-[70%] text-[16px] leading-6 w-fit">
          {description}
        </p>
      </div>
    </section>
  );
}
