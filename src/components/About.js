import React, { Component } from 'react';
import styled from 'styled-components';
import AboutMeImage from '../content/about-me-image.png';
import { device } from '../device';

class About extends Component {
  render() {
    return (
      <div>
        <AboutMe>
          <AboutTitle>My name is Luke Nispel and I am a creator. </AboutTitle>I have a background in both software development as well as art and graphic design. I was raised by an electrical engineer as my father and a graphic desginer as my mother.
        </AboutMe>

        <AboutMeSub>
          I started off my own journey into the real world as a painter and aspiring graphic designer. It was not until going to the Maryland Instute College of Art for graphic design that I realized how much I wanted to build the things I was designing. I wanted to have a hands on approach and to create my products from start to finish to be able to understand the whole scope of the ideas I was creating.
        </AboutMeSub>

        <AboutMeSub>
          I continued on with my education through Colorado State University - Global Campus' IT Program as well as attending a code school named Sabio in Los Angeles. Since then, I have been able to build my own projects on the side as well as work as a full-time softeware engineer at Big Brand Tire & Service in Camarillo, CA building out various in house applications, revamping their websit while working in many different coding environments such as TFS, Visual Studios, C#, ASP.Net, CSS, HTML, React and Node.
        </AboutMeSub>

        <AboutImage src={AboutMeImage}/>
      </div>
    );
  }
}

export default About;

const AboutTitle = styled.h3`
  margin-left: -35%;
  margin-top: -10%;
  color: #441919;

  @media ${device.tablet} {
    width: 100%;
    margin-left: 0;
  }

  transition: all .2s ease-in-out;
`

const AboutMe = styled.div`
    color: #1e0707;
    width: 80%;
    padding: 10%;
    position: relative;
    z-index: 10;
`

const AboutImage = styled.img`
  width: 300px;
  height: auto;
  z-index: 10;
  position: relative;
  margin-right: -25%;
`

const AboutMeSub = styled.div`
    color: #1e0707;
    width: 80%;
    padding: 2% 10%;
    position: relative;
    z-index: 10;

`
