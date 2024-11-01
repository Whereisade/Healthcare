'use client';

import React from 'react';

const statsData = [
  { value: '120k+', label: 'Recovered Patients' },
  { value: '96%', label: 'Satisfaction Rate' },
  { value: '62+', label: 'Expert Doctors' },
];

const StatsSection = () => {
  return (
    <div className="bg-[#E0EDFF] py-9">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-[#13182F]">
          <div className=" text-center md:text-left text-2xl md:text-4xl font-bold mb-4 md:mb-0"> 
            <div className="mb-2">"Delivering</div> 
            <div>Health With Heart!"</div>
          </div>
          <div className="flex flex-col md:flex-row items-center"> 
            {statsData.map((stat, index) => (
              <div key={index} className="t text-center mr-0 md:mr-8 mb-4 md:mb-0">
                <div className="text-2xl md:text-5xl font-bold mb-2">{stat.value}</div> 
                <div className="text-xs md:text-base">{stat.label}</div> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;