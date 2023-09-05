import styled from "styled-components";
import { darkTheme } from "./Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  index: 3;

  @media only screen and (max-width: 600px) {
    & {
      left: 1rem;
      font-size: 1.5rem;
    }
  }
`;

const LogoComponent = ({ theme }) => {
  return <Logo color={theme}>AF</Logo>;
};

export default LogoComponent;
