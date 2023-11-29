import React from 'react';
import {
  Bento,
  BentoContainer,
  BentoBox,
  BentoBoxText,
} from '../styledComponents/StyledComponents';

function About() {
  return (
    <div>
      <h1>About 2.0</h1>
      <Bento>
        <BentoContainer>
          <BentoBox>
            <BentoBoxText>About</BentoBoxText>
          </BentoBox>
          <BentoBox>
            <BentoBoxText>Picture</BentoBoxText>
          </BentoBox>
          <BentoBox>
            <BentoBoxText>Completed Projects</BentoBoxText>
          </BentoBox>
          <BentoBox>
            <BentoBoxText>Misson Statement</BentoBoxText>
          </BentoBox>
          <BentoBox>
            <BentoBoxText>Frelance Hours</BentoBoxText>
          </BentoBox>
          <BentoBox>
            <BentoBoxText>Certifications</BentoBoxText>
          </BentoBox>
        </BentoContainer>
      </Bento>
    </div>
  );
}

export default About;
