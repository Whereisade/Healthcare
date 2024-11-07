import Image from "next/image";
import Container from "./_components/Container";
import Button from "./_components/Button";
import Carecard from "./_components/Carecard";
import Heading1 from "./_components/Heading1";
import Heading2 from "./_components/Heading2";
import StatsSection from "./_components/StatsSection";
import Faq from "./_components/Faq";
import Sectionnew from "./_components/Sectionnew";
import Sectionnew2 from "./_components/Sectionnew2";

export default function Home() {
  return (
    <>
      <section className="  w-full ">
        <Container>
          <div className=" py-[16px] px-[1px] md:px-[16px]  md:pt-[0px] flex flex-col-reverse md:flex-row  gap-5 md:gap-15 ">
            <div className=" md:flex md:flex-col md:justify-center  md:pt-[120px] ">
              <h1
                className={`font-[family-name:var(--font-domainer)] font-[700] md:mb-4 md:font-[600] text-[30px] md:text-[56px] leading-[32px] md:leading-[68px]  md:w-fit`}
              >
                Embrace a <span className="text-[#3D65FF]">healthier</span> you,
                Discover the power of <span className="text-[#3D65FF]">personalized care</span>
              </h1>
              <p
                className={`font-[family-name:var(--font-proxnovar)] mt-4  font-[600] leading-[23px] md:mt-6 mb-4 md:mb-8 text-[#1F2937] md:w-[70%]`}
              >
                At Ori-Ire hospital, we believe that healthcare should be more
                than just a service. It should be a compassionate and
                collaborative journey towards wellness.
              </p>

              <Button
                text="Request A Call"
                tcolo="text-white"
                bcolo="bg-[#3A7DFF]"
                className=""
              />
            </div>

            <div className="h-[300px] md:h-[700px] md:w-[2000px] w-full">
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
        <StatsSection className="justify-self-center " />
      </section>

      <section className=" bg-[#F1F6FB] w-full">
        <Container>
          <div className="flex flex-col px-2 py-6 md:p-16">
            <Sectionnew
              head="Our Qualified Team is Always Ready to Help You!"
            
              p1=" Our team of highly skilled and experienced professionals is dedicated to providing you with the highest quality care. We stay up-to-date with the latest advancements in medical science to offer you the most effective treatments."
              p2=" We are committed to open and honest communication. We believe in empowering our patients with knowledge and understanding, so they can make informed decisions about their healthcare."
              imageSrc="https://res.cloudinary.com/ddrylpaqx/image/upload/v1730448558/655adf0463c953059316e7cf_demystifying-common-myths-about-vaccines_jh9sai.jpg"
            />
            <Sectionnew2
              head="Your Well-Being is our Main Priority."
              p1=" Your health and happiness are at the heart of everything we do. We are committed to providing personalized care that meets your specific needs and expectations."
              p2="We go beyond medical treatment. We offer comprehensive care that includes preventive measures, wellness programs, and ongoing support to ensure your long-term well-being."
              reverse
              imageSrc="https://res.cloudinary.com/ddrylpaqx/image/upload/v1730449983/6555b011943eef6ca327e830_navigating-womens-health-insights-and-advice_eockgv.jpg"
            />
            <Sectionnew
              head="We don't treat patients, we treat human beings."
              p1="Our team of highly skilled and experienced professionals is dedicated to providing you with the highest quality care. We stay up-to-date with the latest advancements in medical science to offer you the most effective treatments."
              p2="We believe in the power of human connection. Our compassionate and empathetic care fosters trust and understanding, creating a supportive environment for healing and recovery."
              imageSrc="https://res.cloudinary.com/ddrylpaqx/image/upload/v1730461393/DocVisit_1300x_2x_hgpop6.jpg"
            />
          </div>
        </Container>
      </section>

      <section className="py-4 bg-[#F1F6FB] w-full">
        <Container>
          <div className="bg-[#2563EB]  p-6 md:p-16  md:justify-self-center rounded-[32px] ">
            <Heading1 head="Find the care you are looking for" color />

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
          <div className="w-full flex flex-col items-center md:h-[722px]  md:gap-4 pt-4 md:p-16">
            <Heading2 head="Frequently Asked Questions" />

            <Faq/>
          </div>
        </Container>
      </section>
    </>
  );
}
