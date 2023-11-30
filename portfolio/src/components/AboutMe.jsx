import React from 'react';
import { Bio } from '../data/PortfolioData';
import {
  AboutBento,
  AboutBentoBoxCenteredCert,
  AboutBentoBoxCertImg,
  AboutBentoBoxCenteredText,
  AboutBentoContainer,
  AboutBentoBox,
  AboutBentoBoxImg,
  AboutBentoBoxMissionStatementTitle,
  AboutBentoBoxNumber,
  AboutBentoBoxParagraph,
  AboutBentoBoxParagraphTitle,
  AboutBentoBoxSquareContainerText,
  AboutBentoBoxSquareText,
  AboutBentoBoxText,
  AboutMainTitle,
} from '../styledComponents/StyledComponents';

function AboutMe() {
  return (
    <div>
      <AboutBento>
        <AboutMainTitle>ABOUT ME</AboutMainTitle>

        <AboutBentoContainer>
          <AboutBentoBox>
            <AboutBentoBoxParagraph>
              <AboutBentoBoxParagraphTitle>
                Your ultimate development partner
              </AboutBentoBoxParagraphTitle>
              <AboutBentoBoxText>
                I am a passionate developer, blending creativity with technical
                mastery. I guide projects from concept to launch, ensuring a
                personalized and innovative journey.
                <br />
                <br />
                Elevating design, captivating interactions, and delivering
                exceptional user experiences are my foremost priorities.
              </AboutBentoBoxText>
            </AboutBentoBoxParagraph>
          </AboutBentoBox>

          <AboutBentoBox>
            <AboutBentoBoxImg src="../images/Logo.png" alt="Front Face Logo" />
          </AboutBentoBox>
          <AboutBentoBox>
            <AboutBentoBoxParagraph>
              <AboutBentoBoxParagraphTitle>
                Certifications
              </AboutBentoBoxParagraphTitle>
              <AboutBentoBoxCenteredCert>
                <a
                  href={Bio.socialMedia.credly_CCP}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AboutBentoBoxCertImg
                    src="../images/ccp.png"
                    alt="AWS Certified Cloud Practitioner Badge"
                  />
                </a>
                <a
                  href={Bio.socialMedia.Credly_PSM}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AboutBentoBoxCertImg
                    src="../images/psm.png"
                    alt="Professional Scrum Master™ I (PSM I) Badge"
                  />
                </a>
              </AboutBentoBoxCenteredCert>
            </AboutBentoBoxParagraph>
          </AboutBentoBox>
          <AboutBentoBox>
            <AboutBentoBoxText>
              <AboutBentoBoxParagraph>
                <AboutBentoBoxMissionStatementTitle>
                  "Elevate! Elevate! Elevate!"
                </AboutBentoBoxMissionStatementTitle>
                <AboutBentoBoxText>
                  Empowering startups, small businesses, and creatives with
                  tailor-made web and design solutions crafted to amplify your
                  digital presence.
                </AboutBentoBoxText>
              </AboutBentoBoxParagraph>
            </AboutBentoBoxText>
          </AboutBentoBox>

          <AboutBentoBox>
            <AboutBentoBoxCenteredText>
              <AboutBentoBoxSquareContainerText>
                <AboutBentoBoxNumber>20+</AboutBentoBoxNumber>
                <br />
                <AboutBentoBoxText>
                  <AboutBentoBoxSquareText>
                    Completed <br />
                    Projects
                  </AboutBentoBoxSquareText>
                </AboutBentoBoxText>
              </AboutBentoBoxSquareContainerText>
            </AboutBentoBoxCenteredText>
          </AboutBentoBox>
          <AboutBentoBox>
            <AboutBentoBoxCenteredText>
              <AboutBentoBoxSquareContainerText>
                <AboutBentoBoxNumber>3+</AboutBentoBoxNumber>
                <br />
                <AboutBentoBoxText>
                  <AboutBentoBoxSquareText>
                    Years of <br /> Professional <br />
                    expertise
                  </AboutBentoBoxSquareText>
                </AboutBentoBoxText>
              </AboutBentoBoxSquareContainerText>
            </AboutBentoBoxCenteredText>
          </AboutBentoBox>
        </AboutBentoContainer>
      </AboutBento>
    </div>
  );
}

export default AboutMe;
