import Image from "next/image";

export default function Bannersection() {
    return (
      <section className="relative text-white">
        <Image
          src="https://res.cloudinary.com/ddrylpaqx/image/upload/v1729027103/drugs87_fikwmt.webp" 
          width={1440}
          height={500}
          
          className="w-fu h-[500px]" 
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-8 md:px-20 py-12 md:py-24 bg-purple-800 bg-opacity-70">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Contact</h1>
          <p className="text-base md:text-lg leading-relaxed">
          We are committed to providing & maintaining excellence in healthcare
          provision and to enhance the quality of life by providing our patients
          with exceptional healthcare through our team of highly-skilled and
          experienced professionals.
          </p>
      </div>
      </section>
    );
  }