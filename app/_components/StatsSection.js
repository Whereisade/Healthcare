"use client";

import React from "react";
import { statsData } from "./Data";
import { motion } from 'framer-motion';

const StatsSection = () => {
  return (
    <div className="bg-[#2563EB] py-9">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-white">
          <div className=" text-center md:text-left text-[22px] md:text-4xl font-bold mb-4 md:mb-0">
            <div>"Health With Heart!"</div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
           
              {statsData.map((stat, index) => (
                 <motion.h1
                 initial={{ y: -50 }} // Start position (above)
                 animate={{ y: 0 }} // End position (normal)
                 transition={{
                   type: "spring", // Use spring animation
                   stiffness: 300, // Controls the bounce (higher = stiffer)
                   damping: 10, // Controls the "smoothness" of the bounce
                 }}
               >
                <div
                  key={index}
                  className="t text-center mr-0 md:mr-8 mb-4 md:mb-0"
                >
                  <div className="text-[26px] md:text-[40px] font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[14px] md:text-base">{stat.label}</div>
                </div>
               </motion.h1>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
