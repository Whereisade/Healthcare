import React from 'react';
import Container from '../_components/Container';
import Image from 'next/image';
import Bannersection from '../_components/Bannersection';
import "../globals.css";
import HeadingLine from '../_components/HeadingLine';
import Para1 from '../_components/Para1';
import Heading2 from '../_components/Heading2';



export default function page() {
  return (
    <>
      <section className="bg-[#F1F7F6] w-full">
        <Container>
          <Bannersection bhead="About Us"/>
        </Container>
      </section>

      <section>
        <Container>
          <div className=" px-4 md:px-14 py-10 ">
            <HeadingLine tophead="Our Story" left2 />
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 ">
              <Image
                src="https://res.cloudinary.com/ddrylpaqx/image/upload/v1729669012/Gemini_Generated_Image_6jr5336jr5336jr5_msldo6.jpg"
                width={500}
                height={500}
                alt="group of doctors"
                className="rounded"
              />

              <div className="text-[16px] font-[family-name:var(--font-proxnovar)] flex flex-col gap-4 font-medium opacity-90">
                <p>
                  Dr. Amina Abubakar, a dedicated physician with a heart for her
                  community, founded Ori-Ire Medical Center in the vibrant Ikoyi
                  district of Lagos in 2018. Witnessing the healthcare
                  disparities in her own village while growing up instilled in
                  her a deep commitment to providing accessible, high-quality
                  care for all. The name Ori-Ire, meaning Good Fortune or
                  Wellbeing in Yoruba, reflects Dr. Abubakar's belief in a
                  holistic approach to healthcare. At Ori-Ire, it's not just
                  about treating illnesses; it's about fostering wellness and
                  empowering individuals to take an active role in their health.
                  Initially a small clinic with limited resources, Ori-Ire
                  gradually expanded its services thanks to Dr. Abubakar's
                  determination and the growing trust of the community.
                </p>

                <p>
                  Today, the center boasts specialized clinics for women's
                  health, pediatrics, and geriatric care, recognizing the unique
                  needs of different patient groups. Dr. Abubakar also
                  integrated mental health services, understanding the vital
                  connection between mental and physical well-being. But
                  Ori-Ire's impact extends beyond its modern facility in Ikoyi.
                  The center actively engages in community outreach, bringing
                  free health screenings and educational programs to underserved
                  areas of Lagos. Dr. Abubakar firmly believes that healthcare
                  is a right, not a privilege, and strives to make a positive
                  impact on the lives of as many people as possible. Ori-Ire
                  Medical Center has become a symbol of hope and healing in
                  Ikoyi, a testament to Dr. Abubakar's unwavering dedication and
                  the compassionate spirit of her team. As the center continues
                  to evolve, its core mission remains constant: to provide
                  comprehensive, accessible, and culturally sensitive care that
                  uplifts individuals and strengthens the community. How does
                  this sound? Is there anything you'd like to add or change in
                  this version of the story?
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#E0EDFF]">
        <Container>
          <div className="px-4 md:px-14 py-10 ">
            <HeadingLine tophead="Our Team" left  />

            <p className=" font-[family-name:var(--font-proxnovar)] opacity-95  ">
              Our talented and highly committed team drives our success in
              innovating sustainable healthcare solutions that advance patient
              care outcomes. Ori-Ire experience in healthcare, combined with the
              local knowledge of our distributor network, help ensure that care
              teams have the necessary tools to care for patients safely and
              efficiently. Ultimately, we come to work every day so patients can
              receive superior care in a safe, healing environment.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#F1F7F6] ">
        <Container>
          <div className="flex flex-col md:flex-row md:p-16 md:gap-28 justify-center items-center">
            <Image
              src="https://res.cloudinary.com/ddrylpaqx/image/upload/v1729723307/image_2_nvafnq.svg"
              width={400}
              height={500}
            />
            <div className='md:w-1/2 flex flex-col md:gap-2'>
              <Heading2 head="WE ARE HERE FOR YOU"  left/>
              <Para1 textb="Whether you're seeking support for an acute situation, ready to take a new direction in life, or looking for a transformative experience, we are here to guide you towards achieving your goals." />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
