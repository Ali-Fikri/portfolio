import { NavLink } from "react-router-dom";
import styled from 'styled-components'
import { Facebook, Github, Twitter } from "./AllSvgs";
import { darkTheme } from './Themes'

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  &>*::not(:last-child) {
    margin: 0%.5rem 0;
  }
`

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
`

const socialIcons = ({ theme }) => {
  return (
    <Icons>
      <div>
        <NavLink style={{color: 'inherit'}} target='_blank' to="https://github.com/ali-fikri">
          <Github width={25} height={25} fill={theme === 'dark' ? darkTheme.text : darkTheme.body} />
        </NavLink>
      </div>
      <div>
        <NavLink style={{color: 'inherit'}} target='_blank' to="https://github.com/ali-fikri">
          <Twitter width={25} height={25} fill={theme === 'dark' ? darkTheme.text : darkTheme.body} />
        </NavLink>
      </div>
      <div>
        <NavLink style={{color: 'inherit'}} target='_blank' to="https://github.com/ali-fikri">
          <Facebook width={25} height={25} fill={theme === 'dark' ? darkTheme.text : darkTheme.body} />
        </NavLink>
      </div>
      <Line color={theme} />
    </Icons>
  );
};

export default socialIcons;
