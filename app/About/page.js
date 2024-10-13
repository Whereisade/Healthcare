import React from 'react';
import Container from '../_components/Container';
import Image from 'next/image';


export default function page() {
  return (
    <>
    <section>
      <Container>
        <div className="relative">
          <Image src="https://res.cloudinary.com/ddrylpaqx/image/upload/v1728860984/Gemini_Generated_Image_rc9dm7rc9dm7rc9d_hq2sbk.jpg" width={1200} height={300}/>

          <h1>ABOUT US</h1>
        </div>
      </Container>


    </section>


    </>
  )
}
