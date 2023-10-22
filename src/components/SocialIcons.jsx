import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import { darkTheme } from "./Themes";
import { Facebook, Github, Linkedin, Twitter } from "./AllSvgs";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;
  gap: 0.5rem;
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
`;

const SocialIcons = ({ theme }) => {
  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1.5, delay: 1.2 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to="https://github.com/ali-fikri"
        >
          <Github
            width={25}
            height={25}
            fill={theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to="https://twitter.com/AliAllaithy"
        >
          <Twitter
            width={25}
            height={25}
            fill={theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to="https://github.com/ali-fikri"
        >
          <Facebook
            width={25}
            height={25}
            fill={theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1, delay: 1.8 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to="https://www.linkedin.com/in/ali-fikri-al-laithie/"
        >
          <Linkedin
            width={25}
            height={25}
            fill={theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </motion.div>
      <Line
        color={theme}
        initial={{
          y: 200,
          transition: { type: "spring", duration: 1, delay: 0.8 },
        }}
        animate={{
          y: 0,
          transition: { type: "spring", duration: 1, delay: 0.8 },
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
