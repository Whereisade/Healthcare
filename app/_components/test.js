"use client";

import Image from "next/image";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
      <div className="col-span-1 lg:col-span-2 flex flex-col lg:flex-row items-center justify-between">
        <div>
          {/* <Image
            src=""
            alt="Neurology Icon"
            width={50}
            height={50}
          /> */}
          <h2 className="text-xl font-bold">Neurology</h2>
          <p className="text-gray-600">
            Specialized treatment for neurological health and disorders
          </p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Find a doctor
        </button>
      </div>
      <div className="col-span-1">
        <Image
          src="/doctor-patient.jpg"
          alt="Doctor with Patient"
          width={800}
          height={500}
        />
      </div>
      <div className="col-span-1 flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-bold">Comprehensive Medical Care</h3>
          <p className="text-gray-600">
            We are committed to offering comprehensive medical treatment that
            focuses on your health and well-being. Our expert physicians and
            specialists provide a comprehensive range of treatments tailored to
            your specific medical needs.
          </p>
          <p className="text-gray-600">
            Equipped with cutting-edge medical equipment and state-of-the-art
            facilities. Our state-of-the-art facilities provide precise and
            efficient care across multiple medical specialties, guaranteeing
            that you get the best care in a welcoming setting.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Specialized Medical Expertise</h3>
          <p className="text-gray-600">
            Whether you require complex surgical procedures or ongoing care for
            chronic conditions, our doctors are dedicated to providing unmatched
            medical care characterized by compassion and precision. Each member
            of our staff has significant knowledge and experience.
          </p>
          <ul className="list-disc text-gray-600 ml-6">
            <li>Ensures accurate and effective care strategies.</li>
            <li>Covers diverse medical needs and conditions.</li>
            <li>Personalized to individual patient needs.</li>
            <li>Enhancing recovery rates and quality of life.</li>
            <li>Utilizes cutting-edge technology for accurate diagnoses.</li>
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="text-lg font-bold">
            Message our medical professionals
          </h4>
          <p className="text-gray-600">
            Send a message to our dedicated and expert medical professionals.
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Phone:
              </label>
              <input
                type="tel"
                id="phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
