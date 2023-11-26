import React from 'react';
import {
  AboutWrapper,
  AboutMainContainer,
  AboutSquare,
  AboutHorizontal,
  AboutRectangle,
} from '../styledComponents/StyledComponents';

function AboutMe() {
  return (
    <div>
      <h1>ABOUT</h1>
      <AboutWrapper>
        <AboutMainContainer>
          <AboutHorizontal></AboutHorizontal>
          <AboutSquare></AboutSquare>
          <AboutSquare></AboutSquare>
          <AboutHorizontal></AboutHorizontal>
          <AboutSquare></AboutSquare>
          <AboutHorizontal></AboutHorizontal>
        </AboutMainContainer>
      </AboutWrapper>
    </div>
  );
}

export default AboutMe;
