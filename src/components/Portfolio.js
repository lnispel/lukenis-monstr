import React, { Component } from 'react';
import styled from 'styled-components';
import AboutMeImage from '../content/about-me-image.png';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="https://discover-family-history.herokuapp.com/">Discover Family History</a>

            <div>Discover Family History is a geneology business ran by Gail Shaffer Blankenuea.</div>
          </li>

          <li>
            <a href="https://the-other-77000-app.herokuapp.com/">The Other 77,000</a>
              <div>The Other 77,000 was a project I designed for myself to document the rural decay in Nebraksa and other parts of the rural midwest

              Associated accounts:
              <a href='https://www.facebook.com/theother77000/'>Facebook</a>
              <a href='https://github.com/lnispel/TheOther77000'>Github</a>
              <a href=''></a>
              </div>
          </li>

          <li>
            <a href="https://github.com/lnispel/Meemo">Meemo</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Portfolio;


const AboutMe = styled.div`
    color: white;
    width: 80%;
    padding: 10%;
`

const AboutImage = styled.img`
  width: 300px;
  height: auto;
  z-index: 10;
  position: relative;
`
