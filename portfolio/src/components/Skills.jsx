import React from 'react';
import { skills } from '../data/PortfolioData';
import {
  AnimatedSkillItem,
  SkillsMainContainer,
  SkillsWrapper,
  SkillsMainTitle,
  SkillsHubContainer,
  SkillFrontBackOther,
  SkillHubTitle,
  SkillList,
  SkillItem,
  SkillImage,
} from '../styledComponents/StyledComponents';

// ... (import statements)

function Skills() {
  return (
    <SkillsMainContainer id="skills">
      <SkillsWrapper>
        <SkillsMainTitle>SKILLS</SkillsMainTitle>
        <SkillsHubContainer>
          {skills.map((skill) => (
            <SkillFrontBackOther key={skill.title}>
              <SkillHubTitle>{skill.title}</SkillHubTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem key={item.name}>
                    <AnimatedSkillItem>
                      <SkillImage src={item.image} alt={item.name} />
                      {item.name}
                    </AnimatedSkillItem>
                  </SkillItem>
                ))}
              </SkillList>
            </SkillFrontBackOther>
          ))}
        </SkillsHubContainer>
      </SkillsWrapper>
    </SkillsMainContainer>
  );
}

export default Skills;
