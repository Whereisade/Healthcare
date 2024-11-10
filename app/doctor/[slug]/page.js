import { doctorsData } from "@/app/_components/Data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return doctorsData.map((doctor) => ({
    slug: doctor.slug,
  }));
}

export default function DoctorPage({ params }) {
  const doctor = doctorsData.find((doc) => doc.slug === params.slug);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
          <p className="text-xl text-gray-600 mb-2">{doctor.title}</p>
          <p className="text-lg text-gray-600 mb-4">{doctor.department}</p>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Education</h2>
            <p>{doctor.education}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Experience</h2>
            <p>{doctor.experience}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Biography</h2>
            <p className="text-gray-700">{doctor.bio}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Specialties</h2>
            <ul className="list-disc list-inside">
              {doctor.specialties.map((specialty, index) => (
                <li key={index}>{specialty}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Languages</h2>
            <p>{doctor.languages.join(", ")}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Availability</h2>
            <p>Days: {doctor.availability.days.join(", ")}</p>
            <p>Hours: {doctor.availability.hours}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Certifications</h2>
            <ul className="list-disc list-inside">
              {doctor.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Publications</h2>
            <ul className="list-disc list-inside">
              {doctor.publications.map((pub, index) => (
                <li key={index}>{pub}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Awards</h2>
            <ul className="list-disc list-inside">
              {doctor.awards.map((award, index) => (
                <li key={index}>{award}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
