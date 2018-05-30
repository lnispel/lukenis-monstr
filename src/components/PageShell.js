import React from 'react';
import styled from 'styled-components';
import { device } from '../device';

const PageShell = Page => {
  return props =>
    <div className="page">
        <Hr1 className="divider"/>
        <Hr2 className="divider"/>
        <Page {...props} />
        <Hr3 className="divider" />
    </div>;
};

export default PageShell;


const Hr1 = styled.hr`
  border: 1px solid #ffff97;
  position: relative;
  z-index: 1;
  margin-top: 300px;

  @media ${device.tablet} {
    display: none;
  }
`
const Hr2 = styled.hr`
  border: 4px solid #ffff97;
  position: relative;
  z-index: 1;
  margin-bottom: -230px;

  @media ${device.tablet} {
    display: none;
  }
`
const Hr3 = styled.hr`
  border: 1px solid #ffff97;
  position: relative;
  z-index: 1;
  margin-top: -150px;
  margin-bottom: 250px;

  @media ${device.tablet} {
      display: none;
  }
`
