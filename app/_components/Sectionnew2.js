

import Image from 'next/image';

export default function Sectionnew2({head, p1, p2, reverse, imageSrc}) {
  return (
    <section className=" py-16 px-6">
      <div className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}>
        
       
       

        
        <div className="flex justify-center">
          <Image
            src={imageSrc}
            alt="Qualified Team"
            width={500}
            height={400}
            className="rounded-lg shadow-lg object-cover"
        
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-[36px] leading-10 font-bold text-gray-800">
            {head}
          </h2>
          <p className="text-gray-600 leading-7">
            {p1}
          </p>
          <p className="text-gray-600 leading-7">
            {p2}
          </p>
        </div>
        
      </div>
    </section>
  );
}
