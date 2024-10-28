import React from 'react'
import Container from '../_components/Container'
import Bannersection from '../_components/Bannersection'
import Twoheading from '../_components/Twoheading'

export default function page() {
  return (
    <>
    <section>
        <Container>
            <Bannersection bhead="Superior Services Through Expert Medical Practice"/>
        </Container>
    </section>

    <section>
        <Container>
            <Twoheading></Twoheading>
        </Container>
    </section>

    </>
  )
}
