import Image from "next/image";
import Container from "./_components/Container";


export default function Home() {
  return (
    <>
      <Container>
        <section className="bg-[#005350] p-[24px] md:pt-[50px] md:flex w-full md:gap-15">
          <div className=" md:flex md:flex-col  md:justify-center ">
          <h1 className={`font-[family-name:var(--font-domainer)] font-[400] text-[58px] leading-[67px] text-white`}>Your Journey to Wellness Starts Here now</h1>
          <p className={`font-[family-name:var(--font-proxnovar)] font-[300] leading-[23px] md:mt-6 text-white`}>We combine cutting-edge technology with personalized care to ensure your well-being</p>

          </div>
          <Image src="https://res.cloudinary.com/ddrylpaqx/image/upload/v1728657065/Gemini_Generated_Image_y58ra3y58ra3y58r_tgswvb.jpg" width={600} height={600}/>

        </section>

      
      </Container>

      
    </>

  );
}
