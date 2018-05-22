import React from 'react';
import Header from './Header.js';
import styled from 'styled-components';
import { device } from '../device';

const PageShell = Page => {
  return props =>
    <div className="page">
        <Header/>
        <Hr1/>
        <Hr2 />
        <Page {...props} />
        <Hr3 />
    </div>;
};

export default PageShell;


const Hr1 = styled.hr`
  border: 1px solid #63ecf7;
  position: relative;
  z-index: 1;
  margin-top: 300px;
  @media ${device.tablet} {
    margin-top: 425px;
  }
  @media ${device.mobileL} {
    margin-top: 200px;
  }
`
const Hr2 = styled.hr`
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
const Hr3 = styled.hr`
  border: 1px solid #63ecf7;
  position: relative;
  z-index: 1;
  margin-top: -150px;
  margin-bottom: 150px;

  @media ${device.mobileM} {
    margin-top: -115px;
    margin-bottom: 115px;
  }
  @media ${device.mobileL} {
    margin-top: -125px;
    margin-bottom: 125px;
  }
`
