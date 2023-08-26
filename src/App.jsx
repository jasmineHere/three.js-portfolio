import React from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Work from "./components/Work";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  // scroll-snap-type: y mandatory;
  //overflow-y: auto;
  scrollbar-width: none;
  color: white;
  &::-webkit-scrollbar {
    display: none;
  }
  // background: url("./img/bg.jpeg");
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover; // To ensure it covers the entire viewport
  // background-attachment: fixed; // This makes sure the background stays fixed on scrolling
`;

function App() {
  return (
    <Container>
      <Hero/>
      <Who/>
      <Work/>
      <Contact/>
    </Container>
  );
}

export default App;
