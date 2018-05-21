import React, { Component } from 'react';
import Header from './Header.js';
import styled from 'styled-components';
import AboutMeImage from '../content/about-me-image.png';

class About extends Component {
  render() {
    return (
      <div>
        <Header/>
        <AboutMe>
          My name is Luke Nispel and I am a creator. I have a background in both software development as well as art and graphic design. I was raised by an elctrical engineer as my father and a graphic desginer as my mother.
        </AboutMe>
        <AboutImage src={AboutMeImage}/>
      </div>
    );
  }
}

export default About;

const AboutMe = styled.div`
    color: white;
    width: 80%;
    padding: 10%;
`

const AboutImage = styled.img`
  width: 300px;
  height: auto;
`
