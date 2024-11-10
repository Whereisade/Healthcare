import React from 'react'
import Image from 'next/image'
import { doctorsData } from './Data'


export default function Docbox() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {doctorsData.map((doctor, index) => (
        <div 
          key={doctor.id} 
          className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        >
          <div className="relative h-48">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">{doctor.name}</h2>
            <p className="text-gray-600 text-base">{doctor.department}</p>
            <p className="text-gray-500 text-sm mt-2">
              {doctor.certification}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {doctor.specialization}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
