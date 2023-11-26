import React from 'react';
import {
  AboutPuzzle,
  AboutSquare,
  AboutHorizontal,
  CenteredContainer,
  AboutContainer,
  AboutWrapper,
} from '../styledComponents/StyledComponents';

function AboutMe() {
  return (
    <AboutContainer>
      <AboutWrapper>
        <h1>ABOUT</h1>
        <CenteredContainer>
          <AboutPuzzle>
            <AboutHorizontal></AboutHorizontal>
            <AboutSquare></AboutSquare>
            <AboutSquare></AboutSquare>
            <AboutHorizontal></AboutHorizontal>
            <AboutSquare></AboutSquare>
            <AboutHorizontal></AboutHorizontal>
          </AboutPuzzle>
        </CenteredContainer>
      </AboutWrapper>
    </AboutContainer>
  );
}

export default AboutMe;
