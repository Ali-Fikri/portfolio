import styled from "styled-components";

const Title = styled.h2`
  position: fixed;
  font-size: calc(5rem + 5vw);
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  color: ${(props) => `rgba(${props.theme.textRgba},0.1)`};
`;

const MainTitle = (props) => {
  return (
    <Title
    top={props.top}
    bottom={props.bottom}
    right={props.right}
    left={props.left}
    theme={props.theme}
    >
      {props.text}
    </Title>
  );
};

export default MainTitle;
