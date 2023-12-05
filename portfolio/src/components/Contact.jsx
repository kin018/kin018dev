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
  ContactHubAltSendButton,
  ContactHubAltSendButtonText,
  ContactHubAltSendButtonIcon,
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
            <ContactHubFormInput type="text" placeholder="Full Name" required />
            <ContactHubFormInput type="email" placeholder="Email" required />
            <ContactHubFormInput type="text" placeholder="Subject" />
            <ContactHubFormMessageInput
              type="text"
              rows="6"
              placeholder="MESSAGE"
              required
            />
            <ContactHubSendButton id="submit" type="submit" value="SEND">
              <ContactHubAltSendButton>
                <ContactHubAltSendButtonIcon>
                  <FaPaperPlane />
                </ContactHubAltSendButtonIcon>
                <ContactHubAltSendButtonText>Send</ContactHubAltSendButtonText>
              </ContactHubAltSendButton>
            </ContactHubSendButton>
          </ContactHubFormContainer>
        </ContactHubContainer>
      </ContactWrapper>
    </ContactMainContainer>
  );
}

export default Contact;
