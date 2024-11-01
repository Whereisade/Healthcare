import React from 'react'
import Heading1 from './Heading1'
import Button from './Button'
import Link from 'next/link'

export default function Bottombox() {
  return (
    <div className='w-[1200px] h-[300px] bg-blue-600 rounded-3xl flex flex-col items-center md:p-16  my-4'>
      <div className=''>
      <Heading1 head="Book your medical appointment today" color/>

      </div>
      <div className='flex gap-4'>
        <Button text="Book an appointment" tcolo="text-white" bordercolo="border-[#13182F]" bcolo="bg-[#13182F]"/>
        <Link href="./Services">
        <Button text="Our specialities"  tcolo="text-white" />
        
        </Link>
      </div>

    </div>
  )
}
