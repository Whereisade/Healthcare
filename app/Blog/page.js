import React from 'react'
import Container from '../_components/Container';
import Bannersection from '../_components/Bannersection';
import Heading1 from '../_components/Heading1';
import Para1 from '../_components/Para1';

export default function page() {
  return (
    <>
      <section>
        <Container>
          <Bannersection bhead="Blog" />
        </Container>
      </section>

      <section>
        <Container>
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
            <div className='grid grid-cols-3'>

            </div>
          </div>
        </Container>
      </section>
            
        </Container>
      </section>
    </>
  );
}
