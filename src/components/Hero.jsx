import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Link as ScrollLink } from "react-scroll";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1000px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;
const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: #da4ea2;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const styledCanvas = styled(Canvas)`
  @media only screen and (max-width: 768px) {
    // adjust dimensions as needed for smaller screens
    width: 80%;
    height: 50%;
  }
`;

const Img = styled.img`
    width: 600px;
    height: 600px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;
    
    @media only screen and (max-width: 768px) {
      width: 300px;
      height: 300px;
    }

    @keyframes animate {
        to{
            transform: translateY(25px);
        }
`;

const Hero = () => {
  const [sphereScale, setSphereScale] = useState(2.4); 

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) { // for mobile devices
        setSphereScale(1.5); 
      } else {
        setSphereScale(2.4);  // default scale
      }
    }
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="hero">
      <Section>
        <Navbar />
        <Container>
          <Left>
            <Title>Design. Code. Innovate</Title>
            <WhatWeDo>
              <Line src="./img/line.png" />
              <Subtitle>What I Do</Subtitle>
            </WhatWeDo>
            <Desc>
              I craft intuitive and dynamic web experiences using cutting-edge
              React technologies, transforming ideas into interactive digital
              realities.
            </Desc>
            <ScrollLink to="about" smooth={true} duration={500} offset={-50}>
              <Button>Learn More</Button>
            </ScrollLink>
          </Left>
          <Right>
            <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 100]} position={[0, 0, 0]} scale={sphereScale}>
                <MeshDistortMaterial
                  color="#c5d5fc"
                  attach="material"
                  distort={0.25}
                  speed={2}
                />
              </Sphere>
            </Canvas>
            <Img src="./img/moon.png" />
          </Right>
        </Container>
      </Section>
    </div>
  );
};

export default Hero;
