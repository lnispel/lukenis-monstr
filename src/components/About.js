import React, { Component } from 'react';
import styled from 'styled-components';
import AboutMeImage from '../content/about-me-image.png';

class About extends Component {
  render() {
    return (
      <div>
        <AboutMe>
          <AboutTitle>My name is Luke Nispel and I am a creator. </AboutTitle>I have a background in both software development as well as art and graphic design. I was raised by an electrical engineer as my father and a graphic desginer as my mother.
        </AboutMe>
        <AboutImage src={AboutMeImage}/>

          <AboutMe>
            <AboutTitle>My name is Luke Nispel and I am a creator. </AboutTitle>I have a background in both software development as well as art and graphic design. I was raised by an electrical engineer as my father and a graphic desginer as my mother.
          </AboutMe>
          <AboutImage src={AboutMeImage}/>

            <AboutMe>
              <AboutTitle>My name is Luke Nispel and I am a creator. </AboutTitle>I have a background in both software development as well as art and graphic design. I was raised by an electrical engineer as my father and a graphic desginer as my mother.
            </AboutMe>
            <AboutImage src={AboutMeImage}/>

              <AboutMe>
                <AboutTitle>My name is Luke Nispel and I am a creator. </AboutTitle>I have a background in both software development as well as art and graphic design. I was raised by an electrical engineer as my father and a graphic desginer as my mother.
              </AboutMe>
              <AboutImage src={AboutMeImage}/>
      </div>
    );
  }
}

export default About;

const AboutTitle = styled.h3`
  margin-left: -35%;
  margin-top: -10%;
`

const AboutMe = styled.div`
    color: #1e0707;
    width: 80%;
    padding: 10%;
    position: relative;
    z-index: 10
`

const AboutImage = styled.img`
  width: 300px;
  height: auto;
  z-index: 10;
  margin-top: -110px;
  position: relative;
  margin-right: -25%;
`
