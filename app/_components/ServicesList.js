import React from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "./Data";

const ServicesList = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div>
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-center mb-4 rounded-full">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {service.description}
              </p>
              <Link href={`./services/${service.link}`} key={index}>
                <p className="text-blue-500 hover:underline text-center block">
                  Learn more →
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
