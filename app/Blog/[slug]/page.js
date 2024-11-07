import Image from "next/image";
import { blogData } from "@/app/_components/Data";

export default function BlogPost({ params }) {
    const data = blogData.find(
        (data) => data.link === params.slug
      );

  return (
    <div className="max-w-6xl mx-auto p-6">
     
      <div className="relative mb-8">
        <Image
          src={data.icon} // Replace with actual image URL
          alt="Healthcare Scene"
          width={800}
          height={400}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Meta Info Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-4 rounded-lg shadow-md mb-8">
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">Posted By:</span>
          <p className="text-gray-800 font-medium">Richard Alan</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="text-gray-500 text-sm">Date:</span>
            <p className="text-gray-800 font-medium">November 20, 2023</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-500 text-sm">Category:</span>
            <p className="text-gray-800 font-medium">Mental Health</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <article>
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
      </article>
    </div>
  );
}
