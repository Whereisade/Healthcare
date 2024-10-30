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
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730323504/645b1fec42ee1248ee1947e1_ophthalmology-icon-doctr-x-webflow-template_picmme.svg',
    title: 'Ophthalmology',
    description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    link: '/ophthalmology',
  },
  {
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730323532/645b1ffbd34ea29eb5000ff6_phatalogy-icon-doctr-x-webflow-template_mcbvip.svg',
    title: 'Pathology',
    description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    link: '/ophthalmology',
  },
  {
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730323559/645b200363154f4c5a050e8f_pulmonology-icon-doctr-x-webflow-template_ccsfvi.svg',
    title: 'Pulmonology',
    description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    link: '/ophthalmology',
  },
  {
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730323611/645b200cd34ea25c2c001015_orthopedic-icon-doctr-x-webflow-template_du5vs1.svg',
    title: 'Orthopedic',
    description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    link: '/ophthalmology',
  },
  {
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730323635/645b201951c157f13a1683c7_general-medicine-icon-doctr-x-webflow-template_qb4kgv.svg',
    title: 'General Medicine',
    description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    link: '/ophthalmology',
  },
  {
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730323671/645b202051c15753e2168432_oncology-icon-doctr-x-webflow-template_ci0osa.svg',
    title: 'Oncology',
    description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    link: '/ophthalmology',
  },
  {
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730323693/645b202f046e971060b215a4_gastroenterology-icon-doctr-x-webflow-template_c6embm.svg',
    title: 'Gastroenterology',
    description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    link: '/ophthalmology',
  },
  {
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730323821/645b2036b2f0b51c2b5f93fe_neurology-icon-doctr-x-webflow-template_d8ofeg.svg',
    title: 'Neurology',
    description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    link: '/ophthalmology',
  },
  {
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730323840/645b203df0b7304e24a46279_nutrition-icon-doctr-x-webflow-template_w4yq3u.svg',
    title: 'Nutrition',
    description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    link: '/ophthalmology',
  },
  {
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730323858/645b2057d2b6d1cefca00cd1_plastic-surgeons-icon-doctr-x-webflow-template_ek6fl4.svg',
    title: 'Plastic Surgeon',
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