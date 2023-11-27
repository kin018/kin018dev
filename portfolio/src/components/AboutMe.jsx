import React from 'react';
import { Bio } from '../data/PortfolioData';
import {
  AboutCenteredCert,
  AboutCenteredText,
  AboutCertImg,
  AboutContainer,
  AboutHorizontal,
  AboutLogoSquareImg,
  AboutMissionStatementTitle,
  AboutNumber,
  AboutParagraph,
  AboutParagraphTitle,
  AboutPuzzle,
  AboutSquare,
  AboutSquareText,
  AboutTitle,
  AboutWrapper,
  CenteredContainer,
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
                <AboutParagraphTitle>
                  Your ultimate development partner
                </AboutParagraphTitle>
                I am a passionate developer, blending creativity with technical
                mastery. I guide projects from concept to launch, ensuring a
                personalized and innovative journey at every stage.
                <br />
                <br />
                Elevating design, captivating interactions, and delivering
                exceptional user experiences are my foremost priorities.
              </AboutParagraph>
            </AboutHorizontal>
            <AboutSquare>
              <AboutLogoSquareImg
                src="../images/Logo.png"
                alt="Front Face Logo"
              />
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
                <AboutMissionStatementTitle>
                  "Elevate! Elevate! Elevate!"
                </AboutMissionStatementTitle>
                Empowering startups, small businesses, and creatives with
                tailor-made web and design solutions crafted to amplify your
                digital presence.
              </AboutParagraph>
            </AboutHorizontal>
            <AboutSquare>
              <AboutCenteredText>
                <AboutNumber>3+</AboutNumber>
                <AboutSquareText>
                  Years of <br /> Professional <br />
                  expertise
                </AboutSquareText>
              </AboutCenteredText>
            </AboutSquare>
            <AboutSquare>
              <AboutParagraph>
                <AboutParagraphTitle>Certifications</AboutParagraphTitle>
                <AboutCenteredCert>
                  <a
                    href={Bio.socialMedia.credly_CCP}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AboutCertImg
                      src="../images/ccp.png"
                      alt="AWS Certified Cloud Practitioner Badge"
                    />
                  </a>
                  <a
                    href={Bio.socialMedia.Credly_PSM}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AboutCertImg
                      src="../images/psm.png"
                      alt="Professional Scrum Master™ I (PSM I) Badge"
                    />
                  </a>
                </AboutCenteredCert>
              </AboutParagraph>
            </AboutSquare>
            <AboutSquare></AboutSquare>
          </AboutPuzzle>
        </CenteredContainer>
      </AboutWrapper>
    </AboutContainer>
  );
}

export default AboutMe;
