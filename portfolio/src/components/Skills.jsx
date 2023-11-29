import React from 'react';
import { skills } from '../data/PortfolioData';
import {
  SkillsMainContainer,
  SkillsWrapper,
  SkillsMainTitle,
  SkillsHubContainer,
  Skill,
  SkillHubTitle,
  SkillList,
  SkillItem,
  SkillImage,
} from '../styledComponents/StyledComponents';

function Skills() {
  return (
    <SkillsMainContainer>
      <SkillsWrapper>
        <SkillsMainTitle>SKILLS</SkillsMainTitle>
        <SkillsHubContainer>
          {skills.map((skill) => (
            // Iterate over each skill
            <Skill key={skill.title}>
              {/* Display the skill title */}
              <SkillHubTitle>{skill.title}</SkillHubTitle>
              {/* Display a list of skills for the current skill */}
              <SkillList>
                {skill.skills.map((item) => (
                  // Iterate over each skill item
                  <SkillItem key={item.name}>
                    {/* Display the skill image */}
                    <SkillImage src={item.image} alt={item.name} />
                    {/* Display the skill name */}
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsHubContainer>
      </SkillsWrapper>
    </SkillsMainContainer>
  );
}

export default Skills;
