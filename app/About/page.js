import React from 'react';
import Container from '../_components/Container';
import Image from 'next/image';
import Bannersection from '../_components/Bannersection';



export default function page() {
  return (
    <>
      <section>
        <Container>
          <Bannersection></Bannersection>
        </Container>
      </section>
    </>
  );
}
