import React, { Component } from 'react';
import styled from 'styled-components';
import AboutMeImage from '../content/about-me-image.png';
import { device } from '../device';

class Contact extends Component {
  render() {
    return (
      <div>
        <AboutMe>
          <ContactLink className="contact-link" href="https://www.linkedin.com/in/luke-nispel-76a5b7136/">LinkedIn</ContactLink>
          <ContactLink className="contact-link" href="mailto:lnispel@me.com">Email</ContactLink>
          <ContactLink className="contact-link" href="tel:8058330667">Phone</ContactLink>
        </AboutMe>
      </div>
    );
  }
}

export default Contact;

const AboutMe = styled.div`
    color: white;
    width: 80%;
    padding: 10%;
    position: relative;
    z-index: 6;

    .contact-link:hover {
      background-color: white;
      color: #25679e;
      box-shadow: 0px 0px 12px 2px #ffff97;
    }

    @media ${device.tablet} {
      display: flex;
      flex-direction: column;
    }
`

const ContactLink = styled.a`
  background-color: #efefef;
  color: black;
  text-decoration: none;
  border-radius: 15px;
  padding: 30px;
  margin: 10px;

  transition: all .2s ease-in-out;
`
