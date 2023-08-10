import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  dsiplay: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`; 

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1100px;
    display: flex;
    justify-content: space-between;
`;

const Hero = () => {
  return (
    <Section>
        <Navbar/>
        <Container> Hero </Container>
    </Section>
  )
};

export default Hero;