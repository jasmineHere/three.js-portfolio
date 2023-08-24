import React, {useState} from "react";
import styled from "styled-components";
import Development from "./Development";
import WebDesign from "./WebDesign";
import ProductDesign from "./ProductDesign";

const data = [
  "To-Do App",
  "eShop",
  "Portfolio Website",
  "Social Feed",
  "React Dashboard",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 70px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  &:after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    &:after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

function Work() {
  const [work, setWork] = useState("Web Design");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={()=>setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "To-Do App" ? (
            <WebDesign />
          ) : work === "eShop" ? (
            <WebDesign />
          ) : work === "Portfolio Website" ? (
            <WebDesign />
          ) : work === "Social Media Feed" ? (
            <WebDesign />
          ) : (
            <WebDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
}

export default Work;
