import React from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

const Section = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  background: rgba(50, 50, 57, 0.8);
  width: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 70px;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px 20px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const ResumeLink = styled.a`
  cursor: pointer;
`;

const Navbar = () => {
  const openResumeInNewTab = () => {
    const resumeUrl = "/Resume.pdf";
    window.open(resumeUrl, "_blank");
  };
  return (
    <Section>
      <Container>
        <Links>
          <h3>Jasmine Muman</h3>
          <List>
            <ListItem>
              <ScrollLink to="hero" smooth={true} duration={100}>
                {" "}
                Home{" "}
              </ScrollLink>
            </ListItem>
            <ListItem>
              <ScrollLink to="about" smooth={true} duration={100} offset={-50}>
                {" "}
                About{" "}
              </ScrollLink>
            </ListItem>
            <ListItem>
              <ScrollLink to="work" smooth={true} duration={100}>
                {" "}
                Work{" "}
              </ScrollLink>
            </ListItem>
            <ListItem>
              <ScrollLink to="contact" smooth={true} duration={100}>
                {" "}
                Contact Me
              </ScrollLink>
            </ListItem>
          </List>
        </Links>
        <Icons>
          <ResumeLink onClick={openResumeInNewTab}>
            <Button>Resume</Button>
          </ResumeLink>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
