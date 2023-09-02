import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Github } from "./AllSvgs";

const Box = styled.li`
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  width: 16rem;
  height: 40vh;
  padding: 1.5rem 2rem;
  margin: 4rem;
  border-radius: 0 3rem;
  transition: all 0.2s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  margin-right: 1rem;
  padding-top: 0.5rem;

  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;

  ${Box}:hover & {
    border-color: ${props => props.theme.text};
  } 

  &>* {
    font-size: 1.1rem;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled(NavLink)`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  text-decoration: none;
  font-size: 1.5rem;

  ${Box}:hover & {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Git = styled(NavLink)`
  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
`;

const Card = ({ id, name, description, tags, demo, github }) => {
  return (
    <Box key={id}>
      <h2>{name}</h2>
      <Description>{description}</Description>
      <Tags>
        {tags.map((tag) => (
          <span key={crypto.randomUUID()}>#{tag}</span>
        ))}
      </Tags>
      <Footer>
        <Link to={demo} target="blank">
          Visit
        </Link>
        <Git to={github} target="blank">
          {<Github width="30px" height="30px" />}
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;
