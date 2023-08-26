import React from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

const Section = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0; // Aligns the navbar to the top of the viewport.
  width: 100%; // Makes sure it spans the entire width of the viewport.
  z-index: 1000; // This is optional, but ensures the navbar remains above other content.
  background: rgba(50, 50, 57, 0.8);
`;

const Container = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  text-decoration: none;
  color: inherit; // or specify a color if needed
  &:hover {
    text-decoration: none; // remove underline on hover
  }
`;

// const Logo = styled.img`
//   height: 70px;
// `;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
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

// const Link = styled.link`
//   text-decoration: none;
//   color: inherit; // or specify a color if needed
//   &:hover {
//     text-decoration: none; // remove underline on hover
//   }
// `;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          {/* <Logo src="./img/logo.png"/> */}
          <h3>Jasmine Muman</h3>
          <List>
            <ListItem>
              <ScrollLink to="hero" smooth={true}> Home </ScrollLink>
            </ListItem>
            <ListItem>
              <ScrollLink to="about" smooth={true}> About </ScrollLink>
            </ListItem>
            <ListItem>
              <ScrollLink to="work" smooth={true}> Work </ScrollLink>
            </ListItem>
            <ListItem>
              <ScrollLink to="contact" smooth={true}> Contact Me</ScrollLink>
            </ListItem>
          </List>
        </Links>
        <Icons>
          <a href="./././public/CV.pdf" download="CV.pdf">
            <Button>Resume</Button>
          </a>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
