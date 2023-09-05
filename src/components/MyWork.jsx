import { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";

import { darkTheme } from "./Themes";
import LogoComponent from "./LogoComponent";
import PowerButton from "./PowerButton";
import SocialIcons from "./SocialIcons";
import { Work } from "../data/WorkData";
import Card from "./Card";
import { YinYang } from "./AllSvgs";
import MainTitle from "./MainTitle";
import SoundBar from "./SoundBar";

const Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 300vh;
  position: relative;
`;

const Cards = styled(motion.ul)`
  position: fixed;
  top: 25%;
  left: calc(9rem + 12vw);
  height: 40vh;
  display: flex;

  @media only screen and (max-width: 600px) {
    & {
      left: calc(2rem + 15vw);
    }
  }
`;

const RotateYinYang = styled.div`
  position: fixed;
  width: 80px;
  height: 80px;
  bottom: 1rem;
  right: 2rem;
`;

const MyWork = () => {
  const cardsRef = useRef(null);
  const yinyangRef = useRef(null);

  useEffect(() => {
    const rotate = (_) => {
      cardsRef.current.style.transform = `translateX(${-window.pageYOffset}px)`;
      yinyangRef.current.style.transform = `rotate(${-window.pageYOffset}deg)`;
    };

    window.addEventListener("scroll", rotate);
    return window.addEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <SoundBar theme="dark" />
        <PowerButton />
        <MainTitle text="WORK" top="10%" right="20%" theme={darkTheme} />
        <Cards
          ref={cardsRef}
          initial="hidden"
          animate="show"
          variants={Variants}
        >
          {Work.map((data) => (
            <Card
              key={data.id}
              id={data.id}
              name={data.name}
              description={data.description}
              tags={data.tags}
              demo={data.demo}
              github={data.github}
              theme="dark"
            />
          ))}
        </Cards>
        <RotateYinYang ref={yinyangRef}>
          <YinYang width={80} height={80} fill={darkTheme.text} />
        </RotateYinYang>
      </Container>
    </ThemeProvider>
  );
};

export default MyWork;
