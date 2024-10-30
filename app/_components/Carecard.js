import React from 'react'
import Heading1 from './Heading1';
import Heading2 from './Heading2';
import Para1 from './Para1';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function Carecard({tophead, ctext1, ctext2}) {
  return (
    <div className='bg-white text-[#13182F] md:w-[350px] p-4 md:p-10 rounded-lg flex md:flex-col space-x-16 md:space-x-0 gap-8'>
        <Heading2 head={tophead}/>
        <div className='md:flex md:flex-col hidden gap-4'>
         <div className='flex gap-2'>
           <IoIosCheckmarkCircle  className='text-xl'/>
           <Para1 textb={ctext1}/>
         </div>
         <div className='flex gap-2'>
           <IoIosCheckmarkCircle className='text-xl'/>
           <Para1 textb={ctext2} />

         </div>


        </div>

        <FaCircleArrowRight  className='text-5xl cursor-pointer'/>


    </div>
  )
}
