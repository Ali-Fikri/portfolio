import { useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

import { darkTheme } from "./Themes";
import LogoComponent from "./LogoComponent";
import PowerButton from "./PowerButton";
import SocialIcons from "./SocialIcons";
import { Work } from "../data/WorkData";
import Card from "./Card";
import { YinYang } from "./AllSvgs";
import MainTitle from "./MainTitle";

const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 300vh;
  position: relative;
`;

const Cards = styled.ul`
  position: fixed;
  top: 8rem;
  left: calc(9rem + 12vw);
  height: 40vh;
  display: flex;
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
        <PowerButton />
        <MainTitle 
          text="WORK" 
          top="10%" 
          right="20%" 
          theme={darkTheme} />
        <Cards ref={cardsRef}>
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
