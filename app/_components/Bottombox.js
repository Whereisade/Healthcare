import React from 'react'
import Heading1 from './Heading1'
import Button from './Button'
import Link from 'next/link'

export default function Bottombox() {
  return (
    <div className="md:w-[1200px] md:h-[300px] bg-blue-600 rounded-3xl flex flex-col items-center p-6 md:p-16  my-4">
      <div className=" flex justify-center items-center w-full md:w-fit ">
        <Heading1 head="Get Expert Care Today" color />
      </div>
      <div className="flex  flex-col md:flex-row gap-4 ">
        <Link href="./contact">

        <Button
          text="Book Now"
          tcolo="text-white"
          bordercolo="border-[#13182F]"
          bcolo="bg-[#13182F]"
        />
        </Link>
        <Link href="./services">
          <Button text="Our specialities" tcolo="text-white" />
        </Link>
      </div>
    </div>
  );
}
