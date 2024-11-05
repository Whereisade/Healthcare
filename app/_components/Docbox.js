import React from 'react'
import Image from 'next/image'

export default function Docbox() {
  return (
    <div className="w-[400px] h-[400px] border bg-slate-400">
      <div className="w-[390px] h-[200px]">
        <Image
          src="https://res.cloudinary.com/ddrylpaqx/image/upload/v1730667135/dl.beatsnoop.com-3000-3qDpRLwGC2_cddpam.jpg"
          width={400}
          height={200}
          className="object-cover w-full "
        />
      </div>
    </div>
  );
}
