import React, { useState } from "react";
import styled from "styled-components";

const defaultdescription =
  "Click on any option from the left to see more details.";

const data = [
  {
    name: "To-Do App",
    // image: "./path_to_image_todoapp.jpg",
    description:
      "A simple To-Do application built using React allowing users to efficiently manage tasks by adding, editing, and deleting them.Implemented task completion functionality to track completed tasks and utilized state management for efficient data handling.Incorporated sorting and filtering features to organize tasks effectively, showcasing a deep understanding of React component structure.",
  },
  {
    name: "eShop",
    // image: "./path_to_image_eshop.jpg",
    description:
      "An e-commerce platform built for modern businesses enabling users to browse and view a wide range of products.implemented advanced features such as product filtering and sorting to provide a seamless shopping experience for users, Developed a cart functionality to manage complex state and handle user interactions during the shopping process.",
  },
  {
    name: "Portfolio",
    image: "./././public/img/Work.png",
    description:
      "Crafted a personal portfolio website using React.js and integrated the Three.js library to create engaging 3D visual elements, showcasing professional skills, projects, and experience. Demonstrated proficiency in designing an aesthetically pleasing and responsive user interface. Emphasized the ability to organize, structure components effectively, and implement 3D interactivity seamlessly",
  },
  {
    name: "Social Feed",
    // image: "./path_to_image_eshop.jpg",
    description:
      "Developed a dynamic social media feed application showcasing posts from various users in real-time using React. Implemented advanced features like infinite scrolling to enhance the user experience and handled interactions such as liking and commenting on posts efficiently. Demonstrated a strong understanding of data handling and user interaction in a dynamic environment.",
  },
  {
    name: "Dashboard",
    // image: "./path_to_image_eshop.jpg",
    description:
      "Designed and developed an intuitive admin dashboard using React, enabling real-time data visualization, streamlined content management, and seamless user administration. The responsive interface boasts modular components, ensuring optimal performance and a user-friendly experience.",
  },
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

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
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

  @media only screen and (max-width: 768px) {
    font-size: 30px;
    color: white;
    -webkit-text-stroke: 0px;
  }

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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  background-color: black;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 0px 15px #dc9dcd;
  }
`;

const Image = styled.img`
  width: 100%; // adjust this based on your requirements
  height: auto;
  margin-bottom: 20px; // spacing between image and description
`;

const Description = styled.p`
  font-size: 20px;
  color: white;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  padding: 20px 20px 20px 20px;
  max-width: 100%;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

function Work() {
  const [work, setWork] = useState("");
  const currentWork = data.find((item) => item.name === work);
  return (
    <Section id="work">
      <Container>
        <Left>
          <List>
            {data.map((item, index) => (
              <ListItem
                key={index + "-" + (item.name || "default")}
                text={item.name}
                onClick={() => setWork(item.name)}
              >
                {item.name}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {currentWork ? (
            <Box>
              <Image
                src={currentWork.image}
                //alt={currentWork.name || "Default"}
              />
              <Description>{currentWork.description}</Description>
            </Box>
          ) : (
            <Box>
              <Description>{defaultdescription}</Description>
            </Box>
          )}
        </Right>
      </Container>
    </Section>
  );
}

export default Work;
