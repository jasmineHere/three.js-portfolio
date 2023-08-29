import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link as ScrollLink } from "react-scroll";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1100px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 54px;
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
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  cursor: pointer;
  color: #da4ea2;

  &:hover {
    color: #c4428d;
  }
`;

const IconLink = styled.a`
  font-size: 24px;
  cursor: pointer;
  color: #da4ea2;

  &:hover {
    color: #c4428d;
  }
`;

const Who = () => {
  return (
      <Section id="about">
        <Container>
          <Left>
            {/* 3D model */}
            <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
              <OrbitControls enableZoom={false} autoRotate />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
            </Canvas>
          </Left>
          <Right>
            <Title>Think outside the square space</Title>
            <WhatWeDo>
              <Line src="./img/line.png" />
              <Subtitle>Who I am</Subtitle>
            </WhatWeDo>
            <Desc>
              have always been passionate about crafting web experiences that
              seamlessly blend human intuition with the power of technology.
            </Desc>
            <SocialIcons>
              <IconLink
                href="https://www.linkedin.com/in/jasminemuman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={faLinkedin} />
              </IconLink>
              <IconLink
                href="https://instagram.com/jasminemuman?igshid=MjEwN2IyYWYwYw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={faInstagram} />
              </IconLink>

              <IconLink
                href="https://github.com/jasmineHere"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={faGithub} />
              </IconLink>
            </SocialIcons>
            <ScrollLink
              to="work" 
              smooth={true} 
              duration={100} 
            >
              <Button>See my works</Button>
            </ScrollLink> 
          </Right>
        </Container>
      </Section>
  );
};

export default Who;
