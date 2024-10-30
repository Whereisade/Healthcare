import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const servicesData = [
  {
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730294123/64548807cef5ac7703bcd05e_pediatric-icon-doctr-x-webflow-template_e0l0xl.svg', 
    title: 'Pediatric',
    description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    link: '/pediatric', 
  },
  {
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730294405/645b1fe1f0b7307cbda45b74_cardiology-icon-doctr-x-webflow-template_jws6op.svg',
    title: 'Cardiology',
    description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    link: '/cardiology',
  },
  {
    icon: '/images/ophthalmology.svg',
    title: 'Ophthalmology',
    description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    link: '/ophthalmology',
  },
];

const ServicesList = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4 rounded-full">
              <Image src={service.icon} alt={service.title} width={64} height={64} className='rounded-full' />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
            <p className="text-gray-600 text-center mb-4">{service.description}</p>
            <Link href={service.link} className="text-blue-500 hover:underline text-center block">Learn more →</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;