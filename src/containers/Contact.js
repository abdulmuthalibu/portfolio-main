import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import IconImg from './images/icon.png';
import StrImg from './images/str.jpg';
import ArrImg from './images/ar.jpg';
import AniImg from './images/ani.jpg';
import TamashaImg from './images/tamasha.jpg';
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 50px 0px 0px;
`;

const Container = styled.div`
  padding: 20px;
  margin: 0 !important;


  @media ${(props) => props.theme.mediaQueries.large} {
    max-width: 940px;
    padding: 50px 0px 0px ;
    margin: 40px auto;
  }

  @media ${(props) => props.theme.mediaQueries.largest} {
    max-width: 1200px;
    padding: 50px 0px 75px;
    margin: 40px auto 0;
  }
`;

const SubContainer = styled.div`
  margin: 40px 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-wrap: nowrap;
    margin-bottom: 50px;
  }
`;

const TextContent = styled.div`
  max-width: 700px;
`;

const InstaGridWrapper = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 100%;
  flex-wrap: wrap-reverse;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-wrap: nowrap;
  }
`;

const InstaLeftWrapper = styled.div`
  display: flex;
  flex: 1 1 100%;
  padding: 0;
  margin-top: 40px;
  max-width: 100%;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex: 1 1 30%;
    margin-top: 0;
    max-width: 200px;
    margin-right: 200px;
  }
`;

const LeftText = styled.div`
  flex: 1 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0px;
  background-position: center center;
`;

const InstaTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 129.69%;
  text-align: left;
  max-width: 90%;
  letter-spacing: normal;

  @media ${(props) => props.theme.mediaQueries.large} {
    max-width: 200px;
  }
`;

const InstaRightWrapper = styled.div`
  flex: 1 1 100%;
  flex-wrap: wrap;
  padding: 0;
  display: grid;
  grid-template:
    "Left Left centertop Right Right" 1fr
    "Left Left centerbot Right Right" 1fr / 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex: 1 1 70%;
    gap: 20px;
  }
`;

const Left = styled.div`
  grid-area: Left / Left / Left / Left;
  height: 220px;
  background-image: url(${StrImg});
  background-size: cover;
  border-radius: 4px;
  background-position: left center;

  @media ${(props) => props.theme.mediaQueries.large} {
    height: 300px;
  }
`;

const Top = styled.div`
  grid-area: centertop / centertop / centertop / centertop;
  background-image: url(${ArrImg});
  background-size: cover;
  border-radius: 4px;
  height: auto;
  background-position: right center;

  @media ${(props) => props.theme.mediaQueries.large} {
    height: unset;
  }
`;

const Bottom = styled.div`
  grid-area: centerbot / centerbot / centerbot / centerbot;
  background-image: url(${TamashaImg});
  border-radius: 4px;
  background-size: cover;
  height: auto;
  background-position: center top;

  @media ${(props) => props.theme.mediaQueries.large} {
    height: unset;
  }
`;

const Right = styled.div`
  grid-area: Right / Right / Right / Right;
  height: 220px;
  background-image: url(${AniImg});
  border-radius: 4px;
  background-size: cover;
  background-position: right top;

  @media ${(props) => props.theme.mediaQueries.large} {
    height: 300px;
  }
`;

const Footer = styled.div`
  margin: 50px 0px 0px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-wrap: nowrap;
    margin: 100px 0 0;
  }
`;

const Logo = styled.div`
  position: relative;
  background-image: url(${IconImg});
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 10px;
`;

const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <SubContainer>
          <TextContent>
            <Title text="Let's Build Something Together" />
            <p>
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
            </p>
            <a href="mailto:abdulmuthalibu270@gmail.com">
              <p className="link email"> abdulmuthalibu270@gmail@gmail.com </p>
            </a>
          </TextContent>
        </SubContainer>

        <InstaGridWrapper>
          <InstaLeftWrapper>
            <LeftText>
              <InstaTitle> I'm a lot cooler on instagram </InstaTitle>
              <a
                href="https://instagram.com/abdul_muthalibu_ibnu_atham"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="link">
                  See More
                  <span className="ml-10">›</span>
                </p>
              </a>
            </LeftText>
          </InstaLeftWrapper>

          <InstaRightWrapper>
            <Left></Left>
            <Top></Top>
            <Bottom></Bottom>
            <Right></Right>
          </InstaRightWrapper>
        </InstaGridWrapper>
      </Container>
      {/* Footer */}
      <Footer>
        <a style={{ textAlign: Left }} href="#">
          <Logo></Logo>
        </a>
        <div>
          <a
            href="https://github.com/abdulmuthalibu"
            target="_blank"
            className="social-link"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-muthalibu-86404b1bb/"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedIn
          </a>
          <a
            href="https://instagram.com/abdul_muthalibu_ibnu_atham"
            target="_blank"
            className="social-link"
            rel="noopener noreferrer"
          >
            instagram
          </a>
        </div>
      </Footer>
    </Wrapper>
  );
};

export default Contact;
