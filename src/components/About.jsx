import { ThemeProvider } from "styled-components";
import styled, { keyframes } from "styled-components";

import { darkTheme } from "./Themes";
import LogoComponent from "./LogoComponent";
import PowerButton from "./PowerButton";
import SocialIcons from "./SocialIcons";
import ParticleComponent from "./ParticleComponent";
import astronaut from "../assets/Images/spaceman.png";

const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
  0% { transform: translateY(-15px)}
  50% { transform: translateY(-20px) translateX(10px)}
  100% { transform: translateY(-15px)}
`;

const Spaceman = styled.div`
  position: absolute;
  top: 20%;
  right: 5%;
  width: 20vw;
  animation: ${float} 2s ease infinite;
`;

const Bio = styled.div`
position: absolute;
top: 12rem;
left: calc(5rem + 5vw);

width: 50vw;
height: 50vh;
padding: 2rem;
border: 3px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};

font-size: 1.6em;
font-family: "Ubuntu Mono",monospace;
font-style: italic:
line-height: 1.5;

display: flex;
justify-content: center;
align-items: center;
`;

const About = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Bio>
          Hello! I'm a passionate Frontend Developer with a knack for creating
          visually stunning and user-friendly websites.
          <br />
          <br />
          My portfolio showcases my projects and reflects my dedication to
          continuous growth in the field. I believe in the power of collaboration and enjoy working with others to create innovative solutions.
          <br />
          <br />
          Thank you for visiting my portfolio website, and I look forward to
          connecting with you for exciting web development opportunities!
        </Bio>
      </Container>
    </ThemeProvider>
  );
};

export default About;
