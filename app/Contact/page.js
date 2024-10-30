import Image from 'next/image';
import React from 'react'
import Container from '../_components/Container'
import HeadingBig from '../_components/HeadingBig'
import Para1 from '../_components/Para1';
import Bannersection from '../_components/Bannersection';
import Heading1 from '../_components/Heading1';
import Form from '../_components/Form';
import { faqs } from '../_components/Faqdata';
import Faqbox from '../_components/Faqbox';


export default function () {
  return (
    <>
      <section className="bg-[#F1F7F6] w-full">
        <Container>
          <Bannersection bhead="Contact Us" />
        </Container>
      </section>

      <section>
        <Container>
          <div className="py-4 md:py-16">
            <div className="flex flex-col justify-center items-center">
              <Heading1 head="Get In Touch" />
              <Para1
                textb="Your health is our priority. Don't hesitate to connect with us. 
                    We offer various ways to get in touch, ensuring you can reach us conveniently."
              />
            </div>
            <div>
              <Form />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div >
            <Faqbox></Faqbox>

         
          </div>
        </Container>
      </section>
    </>
  );
}
