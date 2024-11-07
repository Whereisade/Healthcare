import Image from "next/image";
import { blogData } from "@/app/_components/Data";
import Heading1 from "@/app/_components/Heading1";

export default function BlogPost({ params }) {
    const data = blogData.find(
        (data) => data.link === params.slug
      );

  return (
    <div className="max-w-6xl mx-auto p-6">
     
      <div className=" md:w-[1100px] md:h-[500px] md:mt-20 mb-8">
        <Image
          src={data.icon} 
          alt="people"
          width={600}
          height={400}
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
      </div>

      
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-4 rounded-lg shadow-md mb-8">
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">Post By:</span>
          <p className="text-gray-800 font-medium">Ade</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="text-gray-500 text-sm">Date:</span>
            <p className="text-gray-800 font-medium">Nov 20, 2023</p>
          </div>
          <div className="flex items-center gap-1 ">
            <span className="text-gray-500 text-sm hidden md:block">Category:</span>
            <p className="text-gray-800 font-medium hidden md:block">Mental Health</p>
          </div>
        </div>
      </div>

      
      <div>
        <div>
            <Heading1 head={data.title}/>
        </div>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Introduction:
          </h2>
          <p className="text-gray-600 leading-7">
            In the hustle and bustle of modern life, stress has become an
            unwelcome companion for many. What often goes unnoticed, however,
            is the profound impact chronic stress can have on our heart health.
            Join us on a journey as we explore the intricate connection between
            stress and cardiovascular well-being, and discover practical
            strategies to safeguard one of our most vital organs.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            The Stress-Heart Link:
          </h2>
          <p className="text-gray-600 leading-7">
            Our bodies are finely tuned instruments, and stress is the
            discordant note that can throw everything off balance. When stress
            becomes chronic, the physiological response kicks into overdrive.
            The release of adrenaline and cortisol, designed to prepare us for
            immediate action, can take a toll on the heart over time. Elevated
            heart rate and blood pressure may become constant companions,
            setting the stage for potential cardiovascular issues.
          </p>
        </section>
      </div>
    </div>
  );
}
