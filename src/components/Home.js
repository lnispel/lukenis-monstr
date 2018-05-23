import React, { Component } from 'react';
import logo from '../content/lukenis-monstr-home-image.svg';
import styled from 'styled-components';
import { device } from '../device';

class Home extends Component {
  render() {
    return (
      <div>
        <Logo src={logo} alt="logo" />
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
