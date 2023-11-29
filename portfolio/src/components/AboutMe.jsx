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
  AboutSquareContainerText,
  AboutSquareText,
  AboutTitle,
  AboutText,
  AboutWrapper,
  CenteredContainer,
} from '../styledComponents/StyledComponents';

function AboutMe() {
  return (
    <AboutContainer>
      <AboutWrapper>
        <AboutTitle>ABOUT ME</AboutTitle>
        <CenteredContainer>
          <AboutPuzzle>
            <AboutHorizontal className="child1">
              <AboutParagraph>
                <AboutParagraphTitle>
                  Your ultimate development partner
                </AboutParagraphTitle>
                <AboutText>
                  I am a passionate developer, blending creativity with
                  technical mastery. I guide projects from concept to launch,
                  ensuring a personalized and innovative journey.
                  <br />
                  <br />
                  Elevating design, captivating interactions, and delivering
                  exceptional user experiences are my foremost priorities.
                </AboutText>
              </AboutParagraph>
            </AboutHorizontal>

            <AboutSquare className="child2">
              <AboutLogoSquareImg
                src="../images/Logo.png"
                alt="Front Face Logo"
              />
            </AboutSquare>

            <AboutSquare className="child3">
              <AboutCenteredText>
                <AboutSquareContainerText>
                  <AboutNumber>20+</AboutNumber>
                  <br />
                  <AboutSquareText>
                    Completed <br />
                    Projects
                  </AboutSquareText>
                </AboutSquareContainerText>
              </AboutCenteredText>
            </AboutSquare>

            <AboutHorizontal className="child4">
              <AboutParagraph>
                <AboutMissionStatementTitle>
                  "Elevate! Elevate! Elevate!"
                </AboutMissionStatementTitle>
                <AboutText>
                  Empowering startups, small businesses, and creatives with
                  tailor-made web and design solutions crafted to amplify your
                  digital presence.
                </AboutText>
              </AboutParagraph>
            </AboutHorizontal>

            <AboutSquare className="child5">
              <AboutCenteredText>
                <AboutSquareContainerText>
                  <AboutNumber>3+</AboutNumber>
                  <br />
                  <AboutSquareText>
                    Years of <br /> Professional <br />
                    expertise
                  </AboutSquareText>
                </AboutSquareContainerText>
              </AboutCenteredText>
            </AboutSquare>

            <AboutHorizontal className="child6">
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
            </AboutHorizontal>
          </AboutPuzzle>
        </CenteredContainer>
      </AboutWrapper>
    </AboutContainer>
  );
}

export default AboutMe;
