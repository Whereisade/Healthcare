import React from "react";
import Container from "../_components/Container";
import Bannersection from "../_components/Bannersection";
import Heading1 from "../_components/Heading1";
import Para1 from "../_components/Para1";
import Blogbox from "../_components/StatsSection";
import BlogList from "../_components/Blog";
import Bannerimg from "../_components/Bannerimg";

export default function page() {
  return (
    <>
      <section className=" w-full">
        <Bannerimg bhead="Blog"/>
      </section>

      <section>
        <Container>
          <div className="py-4 md:py-16">
            <div className="flex flex-col justify-center items-center">
              <Heading1 head="Our Recent News" />
              <Para1
                textb="Our articles provide a platform for sharing knowledge, 
                fostering understanding, and building a healthier community together."
              />
            </div>
          </div>
        </Container>
      </section>

      
      <section>
        <Container>
          <BlogList/>
        </Container>
      </section>
    </>
  );
}
