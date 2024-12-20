import React from "react";
import Heading1 from "./Heading1";
import Heading2 from "./Heading2";
import Para1 from "./Para1";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaCircleArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function Carecard({ tophead, ctext1, ctext2 }) {
  return (
    <div className="bg-white text-[#13182F] md:w-[250px] lg:w-[350px] p-4 md:p-10 rounded-lg flex md:flex-col justify-between md:gap-8">
      <Heading2 head={tophead} />
      <div className="md:flex md:flex-col hidden gap-4">
        <div className="flex gap-2">
          <IoIosCheckmarkCircle className="text-xl" />
          <Para1 textb={ctext1} />
        </div>
        <div className="flex gap-2">
          <IoIosCheckmarkCircle className="text-xl" />
          <Para1 textb={ctext2} />
        </div>
      </div>

      <Link href="./services">
        <FaCircleArrowRight className="text-3xl md:text-5xl hover:text-[#2563EB] cursor-pointer " />
      </Link>
    </div>
  );
}
