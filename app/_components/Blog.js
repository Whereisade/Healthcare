import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDroprightCircle } from "react-icons/io";

const blogData = [
  {
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1728860998/Gemini_Generated_Image_5dhnob5dhnob5dhn_rekuhq.jpg', 
    title: 'Exploring Breakthroughs and Best Practices',
    description: 'In the ever-evolving field of medicine, breakthroughs and best practices always shape the landscape of healthcare.',
    
  },
  {
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730448558/655adf0463c953059316e7cf_demystifying-common-myths-about-vaccines_jh9sai.jpg',
    title: 'Demystifying Common Myths About Vaccines.',
    description: 'Vaccines have long been an important tool in protecting public health yet various lies and misinformation persist about them',
    
  },
  {
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730449879/655ad6500d6c0d2c7e49ed6f_10-essential-tips-for-a-healthier-pregnancy_dphida.jpg',
    title: 'The Connection Between Stress and Heart Health',
    description: 'The relationship between stress and heart health is a well-established complex exchange that has been broadly studied.',
    
  },
  {
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730449935/66b1c69b3708e31d8b9d9fc2_blog-thumbnail-img-07-p-500_z7x2bq.jpg',
    title: '10 Essential Tips for a Healthier Pregnancy',
    description: 'Pregnancy is a wonderful and exciting time, but it also comes with joy, happiness, many challenges and responsibilities.',
    
  },
  {
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730449983/6555b011943eef6ca327e830_navigating-womens-health-insights-and-advice_eockgv.jpg',
    title: 'Navigating WomenHealth Insights and Advice',
    description: 'From reproductive wellness to mental health, discover essential information for navigating and optimizing your well-being.',
   
  },
  {
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1728860984/Gemini_Generated_Image_rc9dm7rc9dm7rc9d_hq2sbk.jpg',
    title: 'The Role of Telemedicine in Modern Healthcare',
    description: 'In the contemporary era, telemedicine stands out as a great influence in the rapidly evolving landscape of healthcare.',
    
  },
  
];

const BlogList = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogData.map((blog, index) => (
          <div className="w-[550px] h-[500px]  rounded-md px-4 py-2 flex flex-col gap-5 bg-[#E0EDFF] font-[family-name:var(--font-proxnovar)]">
            <div className="w-[520px] h-[250px] relative justify-self-center  ">
              <Image
                src={blog.icon}
                width={500}
                height={250}
                className=" w-full h-full object-cover rounded-lg mt-2"
              />
            </div>

            <p className="p-1 rounded-lg text-[12px] bg-blue-600 w-fit text-white ">
              Dec 13, 2023
            </p>

            <div className="flex flex-col md:gap-3  text-[#13182F]">
              <h1 className="text-[16px] md:text-[22px] font-[700] font-[family-name:var(--font-domainer)] ">
                {blog.title}
              </h1>
              <p className="text-[14px] md:text-[16px] opacity-90 font-[family-name:var(--font-proxnovar)]">
                {blog.description}
              </p>
              <div className="flex items-center gap-1 mt-6 md:justify-end cursor-pointer hover:text-blue-400 self-end">
                <IoIosArrowDroprightCircle className="text-3xl " />
                <p className="">Read More</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;



