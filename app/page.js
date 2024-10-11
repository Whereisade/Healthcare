import Image from "next/image";
import Container from "./_components/Container";
import Button from "./_components/Button";

export default function Home() {
  return (
    <>
      <section className="bg-[#005350] w-full ">
        <Container>
        
          <div className=" pt-[16px] px-[8px] md:px-[8px]  md:pt-[50px] flex flex-col-reverse md:flex-row  gap-5 md:gap-15 ">

            <div className=" md:flex md:flex-col md:justify-center   ">
             <h1 className={`font-[family-name:var(--font-domainer)] font-[500] md:font-[400] text-[30px] md:text-[56px] leading-[36px] md:leading-[65px] text-white md:w-fit`}>Embrace a healthier you, Discover the power of personalized care</h1>
             <p className={`font-[family-name:var(--font-proxnovar)] mt-4  font-[300] leading-[23px] md:mt-6 md:mb-10 text-white`}>More than medicine. We provide holistic support clinical, financial, and emotional for every stage of your life's journey</p>

             <Button text="Get started" className="mt-20" />

            </div>

            
           <Image src="https://res.cloudinary.com/ddrylpaqx/image/upload/v1728657065/Gemini_Generated_Image_y58ra3y58ra3y58r_tgswvb.jpg" width={600} height={600}  className="rounded-lg" />

          </div>

        

      
        </Container>

      </section>

      
    </>

  );
}
