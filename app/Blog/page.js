import React from "react";
import Container from "../_components/Container";
import Bannersection from "../_components/Bannersection";
import Heading1 from "../_components/Heading1";
import Para1 from "../_components/Para1";
import Blogbox from "../_components/StatsSection";
import BlogList from "../_components/Blog";

export default function page() {
  return (
    <>
      <section className=" bg-[#E0EDFF] w-full">
        <Container>
          <Bannersection bhead="Blog" />
        </Container>
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
          <BlogList></BlogList>
        </Container>
      </section>
    </>
  );
}
