import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
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
  ContactHubAltSendButtonIcon,
  ContactHubAltSendButtonText,
} from '../styledComponents/StyledComponents';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); //prevent refresh

    emailjs
      .sendForm(
        `${process.env.REACT_APP_YOUR_SERVICE_ID}`,
        `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_YOUR_PUBLIC_KEY}`
      )
      .then((result) => {
        console.log(result.text);
        console.log('message sent');
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

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
            <form ref={form} onSubmit={sendEmail}>
              <ContactHubFormInput
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <ContactHubFormInput
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
              <ContactHubFormInput
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <ContactHubFormMessageInput
                name="message"
                rows="6"
                placeholder="MESSAGE"
                required
              />
              <ContactHubSendButton type="submit" value="SEND">
                <ContactHubAltSendButton>
                  <ContactHubAltSendButtonIcon>
                    <FaPaperPlane />
                  </ContactHubAltSendButtonIcon>
                  <ContactHubAltSendButtonText>
                    Send
                  </ContactHubAltSendButtonText>
                </ContactHubAltSendButton>
              </ContactHubSendButton>
            </form>
          </ContactHubFormContainer>
        </ContactHubContainer>
      </ContactWrapper>
    </ContactMainContainer>
  );
}

export default Contact;
