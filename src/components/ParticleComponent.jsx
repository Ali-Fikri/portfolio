import { useCallback } from "react";
import styled from "styled-components";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticleComponent = ({ theme }) => {
  
  const particleInit = useCallback(async engine => {
    console.log(engine);

    await loadSlim(engine);
  }, [])
  
  return (
    <Box>
      <Particles init={particleInit} options={theme === "light" ? configLight : configDark} />
    </Box>
  );
};

export default ParticleComponent;
