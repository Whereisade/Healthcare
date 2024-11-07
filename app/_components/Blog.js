import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { blogData } from './Data';


const BlogList = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogData.map((blog, index) => (
          <div className="md:w-[550px] md:h-[500px]  rounded-md px-4 py-2 flex flex-col gap-5 bg-[#E0EDFF] font-[family-name:var(--font-proxnovar)]">
            <div className="md:w-[520px] h-[250px] relative justify-self-center  ">
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
              <Link href={`./blog/${blog.link}`} key={index}>
                <div className="flex items-center gap-1 mt-6 md:justify-end cursor-pointer hover:text-blue-400 self-end">
                  <IoIosArrowDroprightCircle className="text-3xl " />
                  <p className="">Read More</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;



