import { ThemeProvider } from "styled-components";
import styled from "styled-components";

import { lightTheme } from "./Themes";
import { Develope } from "./AllSvgs";

const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
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

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
`;

const MySkills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <Card>
          <Title>
            <Develope width={40} height={40} /> Frontend Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default MySkills;
