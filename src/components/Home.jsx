import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

import PowerButton from "./PowerButton";
import LogoComponent from "./LogoComponent";
import SocialIcons from "./SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";
import SoundBar from "./SoundBar";

const MainContainer = styled(motion.main)`
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

  @media only screen and (max-width: 600px) {
    & {
      right: 0;
      width: ${(props) => (props.click ? "100%" : "0%")};
      height: ${(props) => (props.click ? "50%" : "0%")};
      transition: width 0.5s ease 0s, height 1s ease 0.5s;
    }
  }
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

  @media only screen and (max-width: 600px) {
    & {
      top: ${(props) => (props.click ? "93%" : "50%")};
    }
  }
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 3rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;

  @media only screen and (max-width: 600px) {
    & {
      font-size: 0.9rem;
      color: ${(props) => (props.click ? props.theme.text : props.theme.body)};
    }
  }
`;

const About = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg); translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;

  @media only screen and (max-width: 600px) {
    & {
      color: ${props => props.click ? "white" : props.theme.text};
      right: 1rem;
      font-size: 0.9rem;
      text-shadow: rgb(0, 0, 0) 0px 0px 4px;}
  }
`;

const Work = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: rotate(-90deg); translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;

  @media only screen and (max-width: 600px) {
    & {
      left: 1rem;
      font-size: 0.9rem;
      text-shadow: rgb(0, 0, 0) 0px 0px 4px;}
  }
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

  @media only screen and (max-width: 600px) {
    & {
      left: 50%;
      font-size: 0.9rem;
      text-shadow: rgb(0, 0, 0) 0px 0px 4px;
    }
  }
`;

const Home = () => {
  const [click, setClick] = useState(false);
  const [smallYin, setSmallYin] = useState(120);
  const [bigYin, setBigYin] = useState(200);
  const [targetSec, setTargetSec] = useState('');

  useEffect(
    (_) => {
      if (window.innerWidth > 600) {
        setSmallYin(120);
        setBigYin(200);
      } else {
        setSmallYin(50);
        setBigYin(150);
      }
    },
    [click]
  );

  return (
    <>
      <MainContainer 
        init={{opacity: 0}}
        animate={{ opacity: [0, 0.5, 1]}}
        exit={{ x: `${targetSec === "work" ? "100%" : "-100%" }`}}
        transition={{ duration: 1.5, type: "spring"}}
        >
        <DarkDiv click={click}></DarkDiv>

        <Container>
          <PowerButton />
          <LogoComponent theme={click ? "dark" : "light"} />
          <SoundBar theme={click ? "dark" : "light"} />
          <SocialIcons
            theme={click & (window.innerWidth > 600) ? "dark" : "light"}
          />

          <Center click={click}>
            <YinYang
              onClick={() => setClick(!click)}
              width={click ? smallYin : bigYin}
              height={click ? smallYin : bigYin}
              fill="currentColor"
            />
            <span>Click here</span>
          </Center>

          <Contact target="_blank" to={"mailto:ali.bin.fikri@gmail.com"}>
            <motion.h3
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
            >
              say hi...
            </motion.h3>
          </Contact>

          <About click={click} onClick={_=> setTargetSec('about')} to="/about">
            <motion.h3
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
            >
              About
            </motion.h3>
          </About>

          <Work click={click} onClick={_=> setTargetSec('work')} to="/work">
            <motion.h3
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
            >
              Work
            </motion.h3>
          </Work>

          <Skills click={click} onClick={_=> setTargetSec('skills')} to="/my-skills">
            <motion.h3
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
            >
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
