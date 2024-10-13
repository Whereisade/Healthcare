import React from 'react'

export default function StatBar() {
  return (
    <section className="py-7 px-60  flex flex-col md:flex-row md:gap-[120px]">
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
    </section>
  )
}
