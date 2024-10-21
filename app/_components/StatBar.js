import React from 'react'
import Container from './Container'

export default function StatBar() {
  return (
    <section className="">
      <Container>
        <div className="py-7 px-60  flex flex-col justify-center md:flex-row gap-8 md:gap-28 font-[family-name:var(--font-domainer)]  justify-self-center">
          <div>
            <h1 className="text-5xl ">3500+</h1>
            <p>Consultations</p>
          </div>
          <div>
            <h1 className="text-5xl">95%</h1>
            <p>Trusted Patients</p>
          </div>
          <div>
            <h1 className="text-5xl">80</h1>
            <p>Trained Professionals</p>
          </div>
          <div>
            <h1 className="text-5xl">34+</h1>
            <p>Years Experience</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
