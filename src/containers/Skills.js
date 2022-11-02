import React from "react";
import styled from "styled-components";
import Title from "../components/Title";

const Wrapper = styled.div`
  margin: 100px 0px 200px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-wrap: nowrap;
  }
`;

const SubContainer = styled.div`
  margin: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-wrap: nowrap;
  }
`;

const SkillContent = styled.div`
  width: 100%;
`;

const TextWrapper = styled.div`
  max-width: 700px;
`;

const SkillsTable = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-wrap: nowrap;
  }
`;

const Skill = styled.p`
  color: black;
  font-weight: 700;
  min-width: 200px;
  margin: 20px 0px 0px;
  font-size: 16px;
  line-height: 184.69%;
  letter-spacing: 0.03em;
  font-style: normal;

  & span {
    font-size: 20px;
    margin-right: 5px;
    color: rgb(180, 225, 231);
  }

  @media ${(props) => props.theme.mediaQueries.large} {
    min-width: unset;
    margin: 30px 0;
  }
`;

const Skills = () => {
  return (
    <Wrapper>
      <SubContainer>
        <SkillContent>
          <TextWrapper>
            <Title text="My Skills" />
            <p>
              Through my studies, I've gained a solid understanding of computer
              science and web development concepts, and have dedicated a lot of
              my free time to apply these concepts to real-world scenarios and
              application
            </p>
          </TextWrapper>

          <SkillsTable>
            <div>
              <Skill>
                <span> o </span>
                HTML5
              </Skill>

              <Skill>
                <span> o </span>
                CSS3
              </Skill>

              <Skill>
                <span> o </span>
                Smart contract
              </Skill>

            </div>

            <div>
              <Skill>
                <span> o </span>
                Javascript ES6
              </Skill>
              
              <Skill>
                <span> o </span>
                React
              </Skill>

              <Skill>
                <span> o </span>
                Git
              </Skill></div>
            

            <div>
              <Skill>
                <span> o </span>
                Styled Components
              </Skill>

              

              <Skill>
                <span> o </span>
                Kadena Blockchain
              </Skill>
            </div>
          </SkillsTable>
        </SkillContent>
      </SubContainer>
    </Wrapper>
  );
};

export default Skills;
