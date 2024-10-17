import Image from "next/image";
import Container from "./_components/Container";
import Button from "./_components/Button";

import StatBar from "./_components/StatBar";
import Section from "./_components/Section";

export default function Home() {
  return (
    <>
      <section className="bg-[#005350] w-full ">
        <Container>
          <div className=" py-[16px] px-[8px] md:px-[16px]  md:pt-[90px] flex flex-col-reverse md:flex-row  gap-5 md:gap-15 ">
            <div className=" md:flex md:flex-col md:justify-center   ">
              <h1
                className={`font-[family-name:var(--font-domainer)] font-[500] md:mb-4 md:font-[400] text-[30px] md:text-[67px] leading-[36px] md:leading-[68px] text-white md:w-fit`}
              >
                Embrace a healthier you, Discover the power of personalized care
              </h1>
              <p
                className={`font-[family-name:var(--font-proxnovar)] mt-4  font-[300] leading-[23px] md:mt-6 mb-4 md:mb-8 text-white md:w-[70%]`}
              >
                More than medicine. We provide holistic support clinical,
                financial, and emotional for every stage of your life's journey
              </p>

              <Button text="Request A Call" tcolo="text-white" className="" />
            </div>

            <Image
              src="https://res.cloudinary.com/ddrylpaqx/image/upload/v1728657065/Gemini_Generated_Image_y58ra3y58ra3y58r_tgswvb.jpg"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>
        </Container>
      </section>

      <section className="bg-slate-400 w-full">
        <Container>
          <StatBar />
        </Container>
      </section>

      <section className="mt-5">
        <Container>
           <div className="flex flex-col gap-[100px]">
             <Section
              title="International Healthcare Excellence"
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

      <section>
        
      </section>
    </>
  );
}
