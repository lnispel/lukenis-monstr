import React, { Component } from 'react';
import logo from '../content/lukenis-monstr-home-image.png';
import Header from './Header.js';
import styled from 'styled-components';
import { device } from '../device';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Hr_1/>
        <Hr_2 />
        <Logo src={logo} alt="logo" />
        <Hr_3 />
      </div>
    );
  }
}

export default Home;

const Logo = styled.img`
  height: 500px;
  position: relative;
  z-index: 10;
  @media ${device.mobileL} {
    width: 90%;
    height: auto;
  }
`

const Hr_1 = styled.hr`
  border: 1px solid #63ecf7;
  position: relative;
  z-index: 1;
  margin-top: 300px;
  @media ${device.tablet} {
    margin-top: 425px;
  }
  @media ${device.mobileL} {
    margin-top: 300px;
  }
`
const Hr_2 = styled.hr`
  border: 4px solid #63ecf7;
  position: relative;
  z-index: 1;
  margin-bottom: -230px;
  @media ${device.mobileM} {
    margin-bottom: -175px;
  }
  @media ${device.mobileL} {
    margin-top: 15px;
  }
`
const Hr_3 = styled.hr`
  border: 1px solid #63ecf7;
  position: relative;
  z-index: 1;
  margin-top: -150px;
  @media ${device.mobileM} {
    margin-top: -115px;
  }
  @media ${device.mobileL} {
    margin-top: -125px;
  }
`
