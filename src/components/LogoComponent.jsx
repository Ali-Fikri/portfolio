import styled from "styled-components";
import { darkTheme } from "./Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => props.color === 'dark' ? darkTheme.text : darkTheme.body};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  index: 3;
`;

const LogoComponent = ({ theme }) => {
  return <Logo color={ theme }>AF</Logo>;
};

export default LogoComponent;
