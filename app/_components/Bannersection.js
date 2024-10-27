import Image from "next/image";
import HeadingBig from "./HeadingBig";
import Para1 from "./Para1";
import Ban from "../images/banner1.jpg";

export default function Bannersection({bhead}) {
  return (
    <section className=" py-[16px] px-[8px] md:px-16 h-[300px] md:h-[600px] relative justify-center  md:pt-[90px] flex flex-col gap-5 md:gap-15">
      <HeadingBig head={bhead} />
      {/* <Image src={Ban} width={1440} className="md:absolute w-full object-cover "/> */}
      
      
      
      
    </section>
  );
}
