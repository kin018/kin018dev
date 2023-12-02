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
                {/* Let's <br />
                Talk */}
                Send <br /> me a message
              </ContactHubMediaHeader>
              <ContactBlob />
            </ContactHubMediaBlob>
          </ContactHubMediaContainer>
          <ContactHubFormContainer>
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
