import React from 'react';
import { FaPaperPlane } from 'react-icons/fa6';
import ContactBlob from './ContactBlob';
import {
  ContactMainContainer,
  ContactWrapper,
  ContactMainTitle,
  ContactHubContainer,
  ContactHubMediaContainer,
  ContactHubFormContainer,
  ContactHubMediaHeader,
  ContactHubMediaBlob,
  ContactHubFormInput,
  ContactHubFormMessageInput,
  ContactHubSendButton,
  ContactHubMediaVerticalHeader,
} from '../styledComponents/StyledComponents';

function Contact() {
  return (
    <ContactMainContainer>
      <ContactWrapper>
        <ContactMainTitle>Contact</ContactMainTitle>
        <ContactHubContainer>
          <ContactHubMediaContainer>
            <ContactHubMediaBlob>
              <ContactHubMediaHeader>
                Let's <br />
                Chat!
              </ContactHubMediaHeader>
              <ContactBlob />
            </ContactHubMediaBlob>
          </ContactHubMediaContainer>
          <ContactHubFormContainer>
            <ContactHubMediaVerticalHeader>
              Let's Chat!
            </ContactHubMediaVerticalHeader>
            <ContactHubFormInput type="text" placeholder="FULL NAME" required />
            <ContactHubFormInput type="email" placeholder="EMAIL" required />
            <ContactHubFormInput type="text" placeholder="SUBJECT" />
            <ContactHubFormMessageInput
              type="text"
              rows="6"
              placeholder="MESSAGE"
              required
            />
            <ContactHubSendButton type="submit">SEND</ContactHubSendButton>
          </ContactHubFormContainer>
        </ContactHubContainer>
      </ContactWrapper>
    </ContactMainContainer>
  );
}

export default Contact;
