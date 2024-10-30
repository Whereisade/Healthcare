import React from 'react'
import Image from 'next/image';
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function Blogbox() {
  return (
    <div className="w-[350px] h-[460px]  rounded-md px-4 py-2 flex flex-col gap-5 bg-[#E0EDFF]">
      <div className="w-[320px] h-[250px] relative justify-self-center  ">
        <Image
          src="https://res.cloudinary.com/ddrylpaqx/image/upload/v1730125538/anime-boy-chill-digital-art-hd-wallpaper-uhdpaper.com-284_0_j_tb35wu.jpg"
          width={300}
          height={300}
          className="w-full max-h-full  rounded-lg mt-2"
        />
      </div>

      <p className="p-1 rounded-lg text-[12px] bg-blue-600 w-fit text-white">
        Dec 13, 2023
      </p>

      <div className="flex flex-col gap-2 text-[#13182F]">
        <h1 className="text-[16px] font-medium">
          Understanding Your Family Health History
        </h1>
        <p className="text-[14px] opacity-90">
          Uncover potential risks and take preventive measures
        </p>
      <div className="flex items-center gap-1 md:justify-end cursor-pointer hover:text-blue-400">
        <IoIosArrowDroprightCircle className="text-3xl " />
        <p className="">Read More</p>
      </div>
      </div>

    </div>
  );
}
