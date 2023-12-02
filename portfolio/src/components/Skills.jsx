import React from 'react';
import { skills } from '../data/PortfolioData';
import {
  SkillsMainContainer,
  SkillsWrapper,
  SkillsMainTitle,
  SkillsHubContainer,
  SkillFrontBackOther,
  SkillHubTitle,
  SkillList,
  SkillItem,
  SkillImage,
  SkillItemText,
  SkillImageImg,
} from '../styledComponents/StyledComponents';

function Skills() {
  return (
    <SkillsMainContainer id="skills">
      <SkillsWrapper>
        <SkillsMainTitle>SKILLS</SkillsMainTitle>
        <SkillsHubContainer>
          {skills.map((skill) => (
            // Iterate over each skill
            <SkillFrontBackOther key={skill.title}>
              {/* Display the skill title */}
              <SkillHubTitle>{skill.title}</SkillHubTitle>
              {/* Display a list of skills for the current skill */}
              <SkillList>
                {skill.skills.map((item) => (
                  // Iterate over each skill item
                  <SkillItem key={item.name}>
                    <SkillImage>
                      {/* Display the skill image */}
                      <SkillImageImg src={item.image} alt={item.name} />
                    </SkillImage>
                    {/* Display the skill name */}
                    <SkillItemText>{item.name}</SkillItemText>
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
