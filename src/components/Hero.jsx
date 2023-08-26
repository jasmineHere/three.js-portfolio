import React from "react";
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
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1000px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1`
  font-size: 74px;
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
`;
const Img = styled.img`
    width: 600px;
    height: 600px;
    object-fit: contain;
    position: absolute;
    // center the image vertically
    top: 0;
    bottom: 0;
    // center the image horizontally
    left: 0;
    right: 0;
    margin: auto;
    //adding animation (time, type, ease(how will it move), animation should delay, stop or repeat)
    animation: animate 2s infinite ease alternate;
    
    @keyframes animate {
        to{
            transform: translateY(25px);
        }
`;

const Hero = () => {
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
            <ScrollLink
              to="about" // ID of the "Who" section
              smooth={true} // Smooth scrolling
              duration={500} // Duration of scroll in milliseconds
              offset={-50} // Offset in pixels for precise placement (optional, adjust as necessary)
            >
              <Button>Learn More</Button>
            </ScrollLink>
            {/* <Button>Learn More</Button> */}
          </Left>
          <Right>
            {/* 3d model */}
            <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 100]} position={[0, 0, 0]} scale={2.4}>
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
