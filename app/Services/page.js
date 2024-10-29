import React from 'react'
import Container from '../_components/Container'
import Bannersection from '../_components/Bannersection'
import Twoheading from '../_components/Twoheading'
import Trustcard from '../_components/Trustcard';

export default function page() {
  return (
    <>
      <section>
        <Container>
          <Bannersection bhead="Superior Services Through Expert Medical Practice" />
        </Container>
      </section>

      <section>
        <Container>
          <div className='flex p-8'>
            <Twoheading />

            <div className='flex flex-col gap-4'>
                <Trustcard/>
                <Trustcard/>
                <Trustcard/>
                <Trustcard/>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
