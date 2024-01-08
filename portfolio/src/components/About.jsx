import React from 'react';
import { Bio } from '../data/PortfolioData';
import {
  AboutMainTitle,
  BentoBoxContainer,
  AboutLargestBox,
  AboutSquareBento,
  AboutBentoBoxParagraphTitle,
  AboutBentoBoxText,
  AboutBentoBoxParagraph,
  AboutBentoBoxNumber,
  AboutBentoBoxMissionStatementTitle,
  AboutBentoBoxCenteredCert,
  AboutBentoBoxCertImg,
  AboutBentoBoxTextContainer,
  AboutBentoBoxCenteredText,
} from '../styledComponents/StyledComponents';

const BentoBox = () => {
  return (
    <>
      <AboutMainTitle id="about">ABOUT ME</AboutMainTitle>
      <BentoBoxContainer>
        <AboutLargestBox>
          <AboutBentoBoxParagraph>
            <AboutBentoBoxParagraphTitle>
              Your ultimate development partner
            </AboutBentoBoxParagraphTitle>
            <AboutBentoBoxTextContainer>
              <AboutBentoBoxText>
                I am a passionate developer, blending creativity with technical
                mastery. I guide projects from concept to launch, ensuring a
                personalized and innovative journey. Elevating design,
                captivating interactions, and delivering exceptional user
                experiences are my foremost priorities.
                <br />
                <br />
              </AboutBentoBoxText>
            </AboutBentoBoxTextContainer>
          </AboutBentoBoxParagraph>
        </AboutLargestBox>
        <AboutBentoBoxParagraph>
          <AboutSquareBento>
            <AboutBentoBoxCenteredText>
              <AboutBentoBoxNumber>3+</AboutBentoBoxNumber>
              <p>
                Professional
                <br />
                Years
              </p>
            </AboutBentoBoxCenteredText>
          </AboutSquareBento>
        </AboutBentoBoxParagraph>
        <AboutBentoBoxParagraph>
          <AboutSquareBento>
            <AboutBentoBoxCenteredText>
              <AboutBentoBoxNumber>25+</AboutBentoBoxNumber>
              <p>
                Completed <br />
                Projects
              </p>
            </AboutBentoBoxCenteredText>
          </AboutSquareBento>
        </AboutBentoBoxParagraph>
        <AboutSquareBento>
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
        </AboutSquareBento>
        <AboutSquareBento>
          <AboutBentoBoxMissionStatementTitle>
            "Elevate! Elevate! Elevate!"
          </AboutBentoBoxMissionStatementTitle>
          <AboutBentoBoxParagraph>
            <AboutBentoBoxTextContainer>
              <AboutBentoBoxText>
                Empowering startups, small businesses, and creatives with
                tailor-made web and design solutions crafted to amplify your
                digital presence.
              </AboutBentoBoxText>
            </AboutBentoBoxTextContainer>
          </AboutBentoBoxParagraph>
        </AboutSquareBento>
      </BentoBoxContainer>
    </>
  );
};

export default BentoBox;
