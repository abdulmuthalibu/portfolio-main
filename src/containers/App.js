import React from "react";
import styled from "styled-components";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 20px;
  margin: 25px auto 0 !important;
  opacity: 0;
  animation: 0.6s ease-in-out 0.3s 1 normal forwards running animateText;

  @media ${(props) => props.theme.mediaQueries.large} {
    max-width: 940px;
    margin: 75px auto;
  }

  @media ${(props) => props.theme.mediaQueries.largest} {
    max-width: 1200px;
    margin: 75px auto;
  }

  @keyframes animateText {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const App = () => {
  return (
    <Wrapper>
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </Wrapper>
  );
};

export default App;
