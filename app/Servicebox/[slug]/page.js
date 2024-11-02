import ServicesList from "@/app/_components/ServicesList";
import { servicesData } from "@/app/_components/ServicesList";
import Image from "next/image";

export default function page({ params }) {
  const serviceData = servicesData.find(
    (serviceData) => serviceData.link === params.slug
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4 p-3 md:p-16 font-[family-name:var(--font-domainer)]">
        <div className="col-span-1 lg:col-span-2 flex flex-col lg:flex-row items-center justify-between mt-11  ">
          <div>
            <Image
              src={serviceData.icon}
              alt=" Icon"
              width={50}
              height={50}
              className="rounded-full "
            />
            <h2 className="text-xl font-bold">{serviceData.title}</h2>
            <p className="text-gray-600">{serviceData.description}</p>
          </div>
        </div>
        <div className="col-span-1">
          <Image
            src={serviceData.imageUrl}
            alt="Doctor with Patient"
            width={800}
            height={500}
            className="object-cover"
          />
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-bold">{serviceData.heading}</h3>
            <p className="text-gray-600">
              {serviceData.p1}
            </p>
            <p className="text-gray-600">
              {serviceData.p2}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Our Approach</h3>
            <p className="text-gray-600">
              Whether you require complex surgical procedures or ongoing care
              for chronic conditions, our doctors are dedicated to providing
              unmatched medical care characterized by compassion and precision.
              Each member of our staff has significant knowledge and experience.
            </p>
            <ul className="list-disc text-gray-600 ml-6">
              <li>Ensures accurate and effective care strategies.</li>
              <li>Covers diverse medical needs and conditions.</li>
              <li>Personalized to individual patient needs.</li>
              <li>Enhancing recovery rates and quality of life.</li>
              <li>Utilizes cutting-edge technology for accurate diagnoses.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
