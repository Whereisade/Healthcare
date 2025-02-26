'use client'
import React from "react";
import Container from "../_components/Container";
import Image from "next/image";
import "../globals.css";
import HeadingLine from "../_components/HeadingLine";
import Para1 from "../_components/Para1";
import Heading2 from "../_components/Heading2";
import Bannerimg from "../_components/Bannerimg";
import Docbox from "../_components/Docbox";
import { motion } from 'framer-motion';

export default function page() {
  return (
    <>
      <section className=" w-full">
        <Bannerimg bhead="About Us" />
      </section>

      <section>
        <Container>
          <div className=" px-2 md:px-14 py-5 md:py-10 ">
            <HeadingLine tophead="Our Story" left2 />
            <motion.div
              initial={{ x: "-100vw" }} 
              animate={{ x: 0 }} 
              transition={{
                type: "tween",
                duration: 1.5,
                ease: "easeOut", 
              }}
            >

            <div className="flex flex-col md:flex-row gap-6 md:gap-12  justify-center">
              <Image
                src="https://res.cloudinary.com/ddrylpaqx/image/upload/v1730667136/dl.beatsnoop.com-final-j3dsByEGUt_zbno4r.jpg"
                width={500}
                height={300}
                alt="group of doctors"
                style={{ objectFit: "cover" }}
                className="rounded object-cover"
              />
              <div className="text-[16px] font-[family-name:var(--font-proxnovar)] flex flex-col  justify-center font-medium opacity-90">
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
              </div>
            </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="bg-[#E0EDFF] w-full">
        <Container>
          <div className="px-2 md:px-14 py-6 md:py-10 ">
            <HeadingLine tophead="Our Team" left />

            <div className="space-y-8">
              <p className=" font-[family-name:var(--font-proxnovar)] opacity-95  ">
                Our talented and highly committed team drives our success in
                innovating sustainable healthcare solutions that advance patient
                care outcomes. Ori-Ire experience in healthcare, combined with
                the local knowledge of our distributor network, help ensure that
                care teams have the necessary tools to care for patients safely
                and efficiently. Ultimately, we come to work every day so
                patients can receive superior care in a safe, healing
                environment.
              </p>

              <div className="w-full">
                <Docbox />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-6 ">
        <Container>
          <div className="flex flex-col md:flex-row md:p-16 gap-5 md:gap-28 p-3 justify-center items-center">
            <div className="max-w-[500px]">
              <Image
                src="https://res.cloudinary.com/ddrylpaqx/image/upload/v1730840414/dl.beatsnoop.com-3000-jKTyJgVlL7_glmu1f.png"
                width={500}
                height={500}
                alt="grandma and child"
                className="rounded-sm"
              />
            </div>
            <div className="md:w-1/2 flex flex-col gap-1 md:gap-2">
              <Heading2 head="WE ARE HERE FOR YOU" left />
              <Para1 textb="Whether you're seeking support for an acute situation, ready to take a new direction in life, or looking for a transformative experience, we are here to guide you towards achieving your goals." />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
