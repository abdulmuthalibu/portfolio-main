import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import LandingImg from './images/landing.jpg';
import IconImg from './images/icon.png';

const MarginWrapper = styled.div`
  margin-top: 50px;
`;

const Logo = styled.div`
  position: relative;
  background-repeat: no-repeat;
  background-image: url(${IconImg});
  width: 54px;
  height: 60px;
  background-size: contain;
`;

const PText = styled.p`
  margin: 50px 0;
  color: black;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 184.69%;
  letter-spacing: 0.03em;
`;

const LandingImage = styled.div`
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  width: 100%;
  height: 450px;
  background-image: url(${LandingImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 4px;
  background-color: rgb(245, 245, 245);
  transform: translateY(30px);
  opacity: 0;
  animation: 1s ease 0.6s 1 normal forwards running animate;

  @keyframes animate {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  height: auto;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-wrap: nowrap;
  }
`;

const AboutCol = styled.div`
  max-width: 700px;
  width: 100%;

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 45%;
  }
`;

const Home = () => {
  return (
    <div>
      <a href="#">
        <Logo></Logo>
      </a>
      <MarginWrapper>
        <Title text="Hi There, I'm Abdul Muthalibu" />
      </MarginWrapper>
      <PText>
        A <strong> React Js </strong> developer, who loves coffee and
        javascript,React js.
      </PText>

      <LandingImage></LandingImage>

      <AboutWrapper>
        <AboutCol>
          <p>
            I'm a <strong> self taught </strong> web developer , who loves to
            build products, that delight people.
            <br />
            <br />
            Programming has always been at the very core of my interests.I love
            to to build something new that people around the world can
            experience and interact with.
          </p>
        </AboutCol>
        <AboutCol>
          <p className="remove-margin">
            I build products that are not only enjoyable to use but are written
            in code that's maintainable and easy to understand.
            <br />
            <br />
            Apart from coding, I love to watch movies with cold coffee in hand
            and i'm learning <strong> New Technology </strong> in life time.
          </p>
        </AboutCol>
      </AboutWrapper>
    </div>
  );
};

export default Home;
