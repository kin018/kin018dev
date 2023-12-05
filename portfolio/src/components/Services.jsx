import React from 'react';
import { TbDatabaseCog } from 'react-icons/tb';
import { DiScrum } from 'react-icons/di';
import { GiBullseye } from 'react-icons/gi';
import { GrMonitor, GrCode } from 'react-icons/gr';
import { MdSupportAgent } from 'react-icons/md';
import {
  ServicesMainContainer,
  ServicesWrapper,
  ServicesMainTitle,
  ServicesHubContainer,
  ServicesImgIcon,
  ServicesCard,
  ServicesHubTitle,
  ServicesMediaContent,
  ServicesParagraph,
  ServicesTextContent,
} from '../styledComponents/StyledComponents';

function Services() {
  return (
    <>
      <ServicesMainContainer id="services">
        <ServicesWrapper>
          <ServicesMainTitle>SERVICES</ServicesMainTitle>
          <ServicesHubContainer>
            <ServicesCard>
              <ServicesMediaContent>
                <ServicesImgIcon>
                  <GrMonitor />
                </ServicesImgIcon>
                <ServicesTextContent>
                  <ServicesHubTitle>Web Development</ServicesHubTitle>
                  <ServicesParagraph>
                    With a wealth of experience, I specialize in building
                    responsive and user-friendly web applications. I am
                    proficient in technologies such as React, Angular,
                    MaterialUI and more! I can assist you in developing
                    customized web solutions that align with your unique needs.
                  </ServicesParagraph>
                </ServicesTextContent>
              </ServicesMediaContent>
            </ServicesCard>
            <ServicesCard>
              <ServicesMediaContent>
                <ServicesImgIcon>
                  <DiScrum />
                </ServicesImgIcon>
                <ServicesTextContent>
                  <ServicesHubTitle>Agile Coaching</ServicesHubTitle>
                  <ServicesParagraph>
                    I am a certified Scrum Master with a wealth of experience
                    orchestrating and actively participating in meetings from
                    diverse perspectives, including that of a developer,
                    stakeholder, and Scrum Master. My expertise lies in
                    fostering collaborative environments that drive successful
                    project outcomes within the Scrum framework.
                  </ServicesParagraph>
                </ServicesTextContent>
              </ServicesMediaContent>
            </ServicesCard>
            <ServicesCard>
              <ServicesMediaContent>
                <ServicesImgIcon>
                  <TbDatabaseCog />
                </ServicesImgIcon>
                <ServicesTextContent>
                  <ServicesHubTitle>Database Management</ServicesHubTitle>
                  <ServicesParagraph>
                    I have experience in designing, implementing, and managing
                    efficient and secure databases using MySQL and SQL. This
                    ensures the constant protection and accessibility of your
                    data.
                  </ServicesParagraph>
                </ServicesTextContent>
              </ServicesMediaContent>
            </ServicesCard>
            <ServicesCard>
              <ServicesMediaContent>
                <ServicesImgIcon>
                  <GiBullseye />
                </ServicesImgIcon>
                <ServicesTextContent>
                  <ServicesHubTitle>Project Methodology</ServicesHubTitle>
                  <ServicesParagraph>
                    I adopt a proactive project management approach, ensuring
                    timely delivery, adherence to budget constraints, and the
                    highest quality standards. My commitment is unwavering in
                    guaranteeing the successful and impeccable delivery of each
                    project.
                  </ServicesParagraph>
                </ServicesTextContent>
              </ServicesMediaContent>
            </ServicesCard>
            <ServicesCard>
              <ServicesMediaContent>
                <ServicesImgIcon>
                  <MdSupportAgent />
                </ServicesImgIcon>
                <ServicesTextContent>
                  <ServicesHubTitle>Maintenance and Support</ServicesHubTitle>
                  <ServicesParagraph>
                    Recognizing that project delivery is just the starting
                    point, I am dedicated to delivering continual maintenance
                    and support for all client projects. My commitment lies in
                    ensuring the sustained efficiency and success of your
                    endeavors.
                  </ServicesParagraph>
                </ServicesTextContent>
              </ServicesMediaContent>
            </ServicesCard>
            <ServicesCard>
              <ServicesMediaContent>
                <ServicesImgIcon>
                  <GrCode />
                </ServicesImgIcon>
                <ServicesTextContent>
                  <ServicesHubTitle>Custom Development</ServicesHubTitle>
                  <ServicesParagraph>
                    Empower your business with a tailor-made software solution
                    designed to meet your unique needs. Ready to bring your
                    vision to life? Let's spark up a conversation and turn your
                    custom software aspirations into reality.
                  </ServicesParagraph>
                </ServicesTextContent>
              </ServicesMediaContent>
            </ServicesCard>
          </ServicesHubContainer>
        </ServicesWrapper>
      </ServicesMainContainer>
    </>
  );
}

export default Services;
