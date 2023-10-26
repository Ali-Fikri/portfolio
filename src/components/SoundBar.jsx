import { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

import { darkTheme } from "./Themes";
import music from "../assets/audio/kon.m4a";

const Box = styled.div`
  position: fixed;
  left: 8rem;
  top: 4rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    & {
      left: 1rem;
      top: 6rem;
    }
  }

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.6s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }
`;

const wave = keyframes`
  0% {
    transform: scaleY(1)
  }
  50% {
    transform: scaleY(2)
  }
  100% {
    transform: scaleY(1)
  }
`;

const Line = styled.span`
  width: 2px;
  height: 1rem;
  margin-right: 0.2rem;
  background-color: ${(props) =>
    props.color === "light" ? darkTheme.text : darkTheme.body};
  border: 1px solid
    ${(props) => (props.color === "light" ? darkTheme.body : darkTheme.text)};

  animation: ${wave} 1s ease infinite;
  animation-play-state: ${(props) => (props.animate ? "running" : "paused")};

  @media only screen and (max-width: 600px) {
    & {
      height: 0.7rem;
      width: 1px;
    }
  }
`;

const SoundBar = ({ theme }) => {
  const soundRef = useRef(null);
  const [play, setPlay] = useState(false);

  const handleSoundPlay = (_) => {
    setPlay(!play);

    if (!play) {
      soundRef.current.play();
    } else {
      soundRef.current.pause();
    }
  };
  return (
    <Box color={theme} onClick={handleSoundPlay}>
      <Line animate={play} />
      <Line animate={play} />
      <Line animate={play} />
      <Line animate={play} />
      <Line animate={play} />
      <audio ref={soundRef} src={music} loop />
    </Box>
  );
};

export default SoundBar;
