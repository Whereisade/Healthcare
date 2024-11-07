'use client'
import { useState } from 'react';
import Image from 'next/image';
import { GoPlus } from "react-icons/go";
import { HiMiniMinusSmall } from "react-icons/hi2";

const Faq = () => {
  
  const [activeIndex, setActiveIndex] = useState(null);

  
  const faqs = [
    { question: "What specialties do your doctors cover?", 
      answer: "Our doctors specialize in various fields including cardiology, dermatology, orthopedics, and more." 
    },
    { question: "Which insurance plans do you accept?", 
      answer: "We accept most major insurance plans. Please contact us for more details." 
    },
    { question: "How can I schedule an appointment?", 
      answer: "You can schedule an appointment by calling us or through our online booking system on our website." 
    },
    { question: "What should I bring to my appointment?", 
      answer: "Please bring a valid ID, insurance information, and any medical records relevant to your visit." 
    },
    { question: "Do you offer telemedicine or virtual visits?", 
      answer: "Yes, we offer telemedicine appointments for your convenience." 
    },

    { question: "What should I do in case of an emergency?", 
      answer: "In case of an emergency, call 112 or go to the nearest emergency room immediately." 
    },
  ];

  
  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col items-center p-2 md:p-6">
      
      
      
      <div className="flex flex-col md:flex-row items-start w-full max-w-4xl md:gap-8 font-[family-name:var(--font-proxnovar)]">
        
        
        <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
          <Image
            src="https://res.cloudinary.com/ddrylpaqx/image/upload/v1730125538/anime-boy-chill-digital-art-hd-wallpaper-uhdpaper.com-284_0_j_tb35wu.jpg"
            width={500}
            height={300}  
            alt="Nurse with headset"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
        
        
        <div className="lg:w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-lg p-4">
              
              
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <span className="font-medium ">{faq.question}</span>
                <span>{activeIndex === index ? <HiMiniMinusSmall /> : <GoPlus />}</span>
              </div>
              
              
              {activeIndex === index && (
                <div className="mt-2 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      
      
    </div>
  );
};

export default Faq;
