import React from 'react';

import {
  AboutContainer,
  AboutHorizontal,
  AboutLogoSquareImg,
  AboutParagraph,
  AboutPuzzle,
  AboutSquare,
  AboutTitle,
  CenteredContainer,
  AboutWrapper,
  AboutNumber,
  AboutSquareText,
  AboutCenteredText,
} from '../styledComponents/StyledComponents';

function AboutMe() {
  return (
    <AboutContainer>
      <AboutWrapper>
        <AboutTitle>ABOUT</AboutTitle>
        <CenteredContainer>
          <AboutPuzzle>
            <AboutHorizontal>
              <AboutParagraph>
                I am Ken,
                <br />
                <br />
                A passionate developer, blending creativity with technical
                mastery. I guide projects from concept to launch, ensuring a
                personalized and innovative journey at every step.
                <br />
                <br />
                Striking design, captivating interactions, and an exceptional
                user experience are my top priorities.
              </AboutParagraph>
            </AboutHorizontal>
            <AboutSquare>
              <AboutLogoSquareImg src="../images/Logo.png" alt="Logo" />
            </AboutSquare>
            <AboutSquare>
              <AboutCenteredText>
                <AboutNumber>20+</AboutNumber>
                <AboutSquareText>
                  Completed <br />
                  Projects
                </AboutSquareText>
              </AboutCenteredText>
            </AboutSquare>
            <AboutHorizontal>
              <AboutParagraph>
                Empowering startups, small businesses, and creatives with
                tailor-made web and design solutions crafted to elevate your
                digital presence.
              </AboutParagraph>
            </AboutHorizontal>
            <AboutSquare>
              <AboutCenteredText>
                <AboutNumber>3+</AboutNumber>
                <AboutSquareText>
                  Professional <br />
                  Experience
                </AboutSquareText>
              </AboutCenteredText>
            </AboutSquare>
            {/* <AboutSquare>6</AboutSquare>
            <AboutSquare>7</AboutSquare> */}
            <AboutHorizontal>8</AboutHorizontal>
          </AboutPuzzle>
        </CenteredContainer>
      </AboutWrapper>
    </AboutContainer>
  );
}

export default AboutMe;
