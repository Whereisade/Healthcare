import Image from "next/image";
import Container from "./_components/Container";
import Button from "./_components/Button";
import Carecard from "./_components/Carecard";
import StatBar from "./_components/StatBar";
import Section from "./_components/Section";
import Heading1 from "./_components/Heading1";
import Heading2 from "./_components/Heading2";
import ServicesList from "./_components/ServicesList";
import StatsSection from "./_components/StatsSection";

import Faq from "./_components/Faq";

export default function Home() {
  return (
    <>
      <section className="  w-full ">
        <Container>
          <div className=" py-[16px] px-[8px] md:px-[16px]  md:pt-[0px] flex flex-col-reverse md:flex-row  gap-5 md:gap-15 ">
            <div className=" md:flex md:flex-col md:justify-center  md:pt-[120px] ">
              <h1
                className={`font-[family-name:var(--font-domainer)] font-[700] md:mb-4 md:font-[400] text-[30px] md:text-[56px] leading-[36px] md:leading-[68px] text-[#3D65FF] md:w-fit`}
              >
                Embrace a healthier you, Discover the power of personalized care
              </h1>
              <p
                className={`font-[family-name:var(--font-proxnovar)] mt-4  font-[500] leading-[23px] md:mt-6 mb-4 md:mb-8 text-[#3D65FF] md:w-[70%]`}
              >
                At Ori-Ire hospital, we believe that healthcare should be more than just a service. It should be a compassionate and collaborative journey towards wellness.
              </p>

              <Button text="Request A Call" tcolo="text-[#3D65FF]" bcolo="border-[#3D65FF]" className="" />
            </div>

            <div className="h-[700px] w-[2000px]">
            <Image
              src="https://res.cloudinary.com/ddrylpaqx/image/upload/v1730841966/dl.beatsnoop.com-3000-JGWdVctCXs_d2xaxe.png"
              width={1000}
              height={1000}
              className="rounded-lg w-full h-full object-cover"
            />

            </div>

            

          </div>
        </Container>
      </section>

      <section className="bg-[#E0EDFF] w-full">
        <StatsSection  className="justify-self-center "/>
      </section>

      <section className="mt-5 ">
        <Container>
          <div className="flex flex-col gap-24 p-6 md:p-16">
            <Section
              title="Healthcare Excellence"
              description="Your health is your most valuable possession. It's the foundation for a vibrant and fulfilling life.  At Ori Ire Medical Center, we believe health is more than just the absence of disease."
              imageSrc="https://res.cloudinary.com/ddrylpaqx/image/upload/v1728776130/Gemini_Generated_Image_73bnuc73bnuc73bn_gkq2jg.jpg"
            />
            <Section
              title="Healing Starts Here"
              description="Effective treatment depends on getting the right diagnosis. Our experts diagnose and treat the toughest medical challenges. Ori Ire medical center has more No. 1 rankings than any other hospital in the nation"
              imageSrc="https://res.cloudinary.com/ddrylpaqx/image/upload/v1728766719/Gemini_Generated_Image_8y6bfr8y6bfr8y6b_obdnrf.jpg"
              reversed
            />
          </div>
        </Container>
      </section>

      <section className=" w-full">
        <Container>
          <div className="bg-[#2563EB]  p-6 md:p-16  md:justify-self-center rounded-[32px] ">
            <Heading1 head="Find the care you are looking for" color/>

            <div className="flex flex-col md:flex-row gap-6  md:justify-self-center">
              <Carecard
                tophead="24/7 virtual care"
                ctext1="Uninterrupted Access to Care"
                ctext2="No Appointment Needed"
              />
              <Carecard
                tophead="Primary Care"
                ctext1="Personalized Care"
                ctext2="Preventive & Proactive Health"
              />
              <Carecard
                tophead="Urgent Care"
                ctext1="Walk-In Clinic Convenience"
                ctext2="Beyond the Emergency Room"
              />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="w-full flex flex-col items-center md:h-[722px]  md:gap-4 p-3 md:p-16">
            <Heading2 head="Frequently Asked Questions" />

            <Faq></Faq>
          </div>
        </Container>
      </section>
    </>
  );
}
