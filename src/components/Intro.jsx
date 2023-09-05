import styled from "styled-components";
import { motion } from "framer-motion";

import Me from "../assets/Images/profile-img.png";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 65vw;
  transform: translate(-50%, -50%);

  display: flex;

  border-width: 2px;
      border-style: solid;
      border-image: linear-gradient(
          to right,
          ${(props) => props.theme.body} 50%,
          ${(props) => props.theme.text} 50%
        )
        1;


  @media only screen and (max-width: 600px) {
    & {
      border-image: linear-gradient(
          to bottom,
          ${(props) => props.theme.body} 50%,
          ${(props) => props.theme.text} 50%
        )
        1;

        flex-direction: column;
        align-items: space-between;
    }
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    & {
      width: 100%;
      height: 50%;
      justify-content: space-between;
    }
  }
`;

const Text = styled.div`
  color: ${(props) => props.theme.body};
  font-size: calc(1em + 1.5vw);
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: "0" }}
      animate={{ height: "70vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Ali Fikri.</h3>
          <h6>I Code simple yet beautiful websites.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
