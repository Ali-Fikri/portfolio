import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

import PowerButton from "./PowerButton";
import LogoComponent from "./LogoComponent";
import SocialIcons from "./SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";

const MainContainer = styled.main`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "karla", sans-serif;
    font-weight: 500;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  background-color: #000;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Container = styled.div`
  padding: 2rem;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);

  }
  to {
    transform: rotate(360deg);
  }
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} 1.5s linear infinite;
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const About = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg); translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const Work = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: rotate(-90deg); translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  bottom: 2.5rem;
  left: ${(props) => (props.click ? "70%" : "50%")};
  transform: translate(-50%, -50%);
  transition: all 0.7s ease 0.5s;
  text-decoration: none;
  z-index: 1;
`;

const Home = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <MainContainer>
        <DarkDiv click={click}></DarkDiv>

        <Container>
          <PowerButton />
          <LogoComponent theme={click ? "dark" : "light"} />
          <SocialIcons theme={click ? "dark" : "light"} />

          <Center click={click}>
            <YinYang
              onClick={() => setClick(!click)}
              width={click ? 120 : 200}
              height={click ? 120 : 200}
              fill="currentColor"
            />
            <span>Click here</span>
          </Center>

          <Contact
            target="_blank"
            to={{ pathname: "mailto:alifikripr@gmail.com" }}
          >
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              say hi...
            </motion.h3>
          </Contact>

          <About to="/about">
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About
            </motion.h3>
          </About>

          <Work click={click} to="/work">
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Work
            </motion.h3>
          </Work>

          <Skills click={click} to="/my-skills">
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              My Skills
            </motion.h3>
          </Skills>
        </Container>
        {click && <Intro click={click} />}
      </MainContainer>
    </>
  );
};

export default Home;
