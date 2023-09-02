import { ThemeProvider } from "styled-components";
import styled from "styled-components";

import { lightTheme } from "./Themes";
import { Develope } from "./AllSvgs";
import LogoComponent from "./LogoComponent";
import PowerButton from "./PowerButton";
import SocialIcons from "./SocialIcons";
import ParticleComponent from "./ParticleComponent";
import MainTitle from "./MainTitle";
import SoundBar from "./SoundBar";

const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  `;
  
  const Card = styled.div`
  width: 30vw;
  height: 60vh;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  border: 2px solid ${(props) => props.theme.text};
  padding: 2rem;
  line-height: 1.5;
  z-index: 3;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Card}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Card}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const MySkills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <SoundBar theme={"dark"} />
        <MainTitle 
          text="Skills" 
          bottom="0%" 
          right="10%" 
          theme={lightTheme} />
        <ParticleComponent theme="light" />

        <Card>
          <Title>
            <Develope width={40} height={40} /> Frontend Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>SKILLS</strong>
            <p>Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind etc.</p>
          </Description>
          <Description>
            <strong>TOOLS</strong>
            <p>VScode, Github, Codepen etc.</p>
          </Description>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default MySkills;
