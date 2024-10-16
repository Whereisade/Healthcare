import React from 'react'
import Button from './Button';


export default function Footer() {
  return (
    <section className="bg-[#005350] text-white py-20 px-8 md:px-20 font-[family-name:var(--font-domainer)]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 ">
          Schedule your appointment today!
        </h2>
        <p className="mb-8  font-[family-name:var(--font-proxnovar)]">
          Ready to prioritize your health? Schedule your appointment with Ori
          Ire Medical Center today! Our compassionate team is ready to provide
          you with personalized care and support on your journey to wellness.
        </p>
        
        <Button text="Make an Appointment" />
      </div>

      <div className="mt-16 md:flex md:justify-between md:items-center">
        <div className="md:w-1/2">
          <div className="mb-4">
            <span className="font-medium">Email</span>
            <a
              href="mailto:hello@oriire.com"
              className="text-blue-300 hover:text-blue-400"
            >
              {" "}
              hello@oriire.com
            </a>
          </div>
          <div className="mb-4">
            <span className="font-medium">Phone</span>
            <a
              href="tel:+2348155083221"
              className="text-blue-300 hover:text-blue-400"
            >
              {" "}
              (+234) 8155083221
            </a>
          </div>
          <div>
            <span className="font-medium">Address</span>
            <p>Plot 15, Awolowo Road</p>
            <p>Ikoyi, Lagos State</p>
            <p>Nigeria.</p>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/4">
          <div className="flex space-x-6">
            <a href="#" className="text-blue-300 hover:text-blue-400">
              <span className="sr-only">Twitter</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* ... Twitter SVG icon code ... */}
              </svg>
            </a>
            {/* ... Similar code for Facebook, Instagram, LinkedIn ... */}
          </div>
        </div>
      </div>
    </section>
  );
}
