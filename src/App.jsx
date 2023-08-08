import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Work from "./components/Work"
import styled from "styled-components"
import Navbar from "./components/Navbar"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
`

function App() {

  return (
    <Container>
      <Hero></Hero>
      <Who></Who>
      <Work></Work> 
      <Contact></Contact>
    </Container>
  )
}

export default App
