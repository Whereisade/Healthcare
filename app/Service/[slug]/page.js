
import { servicesData } from "@/app/_components/ServicesList";
import Image from "next/image";
import Bannersection from "@/app/_components/Bannersection";
import Container from "@/app/_components/Container";

export default function page({ params }) {
  const serviceData = servicesData.find(
    (serviceData) => serviceData.link === params.slug
  );

  return (
    <>
      {/* <section className="w-full bg-[#E0EDFF]">
        <Container>
          <Bannersection bhead={serviceData.title} />
        </Container>
      </section> */}

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4 p-3 md:p-16 ">
          <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row items-center justify-between mt-12  ">
            <div className="md:flex  md:items-center md:gap-4">
              <div className="w-">
                <Image
                  src={serviceData.icon}
                  alt=" Icon"
                  width={104}
                  height={104}
                  className="rounded-full object-cover w-full h-full "
                />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[24px] font-[family-name:var(--font-domainer)] font-bold">
                  {serviceData.title}
                </h2>
                <p className="text-gray-600 font-[family-name:var(--font-proxnovar)]">
                  {serviceData.description}
                </p>
              </div>
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
              <h3 className="text-[22px] font-[family-name:var(--font-domainer)] font-bold">
                {serviceData.heading}
              </h3>
              <p className="text-gray-600 font-[family-name:var(--font-proxnovar)]">
                {serviceData.p1}
              </p>
              <p className="text-gray-600 font-[family-name:var(--font-proxnovar)]">
                {serviceData.p2}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[22px] font-[family-name:var(--font-domainer)] font-bold">
                Our Approach
              </h3>
              <p className="text-gray-600 font-[family-name:var(--font-proxnovar)]">
                Whether you require complex surgical procedures or ongoing care
                for chronic conditions, our doctors are dedicated to providing
                unmatched medical care characterized by compassion and
                precision. Each member of our staff has significant knowledge
                and experience.
              </p>
              <ul className="list-disc text-gray-600 ml-6 font-[family-name:var(--font-proxnovar)]">
                <li>Ensures accurate and effective care strategies.</li>
                <li>Covers diverse medical needs and conditions.</li>
                <li>Personalized to individual patient needs.</li>
                <li>Enhancing recovery rates and quality of life.</li>
                <li>
                  Utilizes cutting-edge technology for accurate diagnoses.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
