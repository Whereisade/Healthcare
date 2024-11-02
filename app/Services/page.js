import React from "react";
import Container from "../_components/Container";
import Bannersection from "../_components/Bannersection";
import Twoheading from "../_components/Twoheading";
import Trustcard from "../_components/Trustcard";
import ServicesList from "../_components/ServicesList";
import Heading1 from "../_components/Heading1";
import Bannerimg from "../_components/Bannerimg2";

export default function page() {
  return (
    <>
      <section className="bg-[#E0EDFF] w-full">
        <Bannerimg bhead="Superior Services Through Expert Medical Practice" />
      </section>

      <section>
        <Container>
          <div className="flex  flex-col">
            <div className="flex flex-col md:flex-row gap-4 md:gap-24 md:justify-center p-4 md:p-16 ">
              <Twoheading />

              <div className="flex flex-col gap-4">
                <Trustcard
                  pic="https://res.cloudinary.com/ddrylpaqx/image/upload/v1730368363/66ac885155b4425b83d5857e_choose-icon-01_t7ylsk.svg"
                  head="Health Partner"
                  para="Your trusted partner in health, providing comprehensive and compassionate care"
                />
                <Trustcard
                  pic="https://res.cloudinary.com/ddrylpaqx/image/upload/v1730368567/66ac8851d07b1ae1de9cf164_choose-icon-02_qnyr5o.svg"
                  head="Medical Excellence"
                  para="Leaders in medical excellence, offering advanced treatments and concern care"
                />
                <Trustcard
                  pic="https://res.cloudinary.com/ddrylpaqx/image/upload/v1730368761/66ac88512d8c519304fdfd27_choose-icon-03_wxu2pm.svg"
                  head="Our Commitment"
                  para="Dedicated to your health and well-being with personalized care."
                />
                <Trustcard
                  pic="https://res.cloudinary.com/ddrylpaqx/image/upload/v1730368837/66ac8851db277ca300e50820_choose-icon-04_amv9gj.svg"
                  head="Patient Focus"
                  para="Centered on you, delivering personalized care with compassion and expertise."
                />
              </div>
            </div>

            
          </div>
        </Container>
      </section>

      <section className="bg-[#E0EDFF] w-full">
        <Container>
        <div className="flex flex-col items-center p-3 md:p-16 ">
              <Heading1 head="Tailored Medical Services For Diverse Needs"/>
              <ServicesList />
            </div>
        </Container>
      </section>
    </>
  );
}
