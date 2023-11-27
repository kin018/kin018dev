import React from 'react';
import {
  AboutContainer,
  AboutHorizontal,
  AboutLogoSquare,
  AboutPuzzle,
  AboutSquare,
  AboutTitle,
  CenteredContainer,
  AboutWrapper,
} from '../styledComponents/StyledComponents';

function AboutMe() {
  return (
    <AboutContainer>
      <AboutWrapper>
        <AboutTitle>ABOUT</AboutTitle>
        <CenteredContainer>
          <AboutPuzzle>
            <AboutHorizontal>1</AboutHorizontal>
            <AboutSquare>{/* <AboutLogoSquare /> */}</AboutSquare>
            <AboutSquare>3</AboutSquare>
            <AboutHorizontal>4</AboutHorizontal>
            <AboutSquare>5</AboutSquare>
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
