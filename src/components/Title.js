import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 129.69%;
  letter-spacing: 0.03em;
  transform: translateY(30px);
  opacity: 0;
  animation: 1s ease 0.2s 1 normal forwards running animateText;

  @keyframes animateText {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }

    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @media ${(props) => props.theme.mediaQueries.large} {
    font-size: 40px;
    transform: scale(1);
  }
`;

const Title = ({ text }) => {
  return <StyledH1> {text}</StyledH1>;
};

export default Title;
