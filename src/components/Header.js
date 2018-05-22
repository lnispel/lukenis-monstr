import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
        <HeaderContainer>
          <Circle className="circle-hover"/>
          <TopCircle className="top-circle-hover"/>
          <HeaderLink className="header-link" to="/">
            Home
          </HeaderLink>
          <HeaderLink className="header-link" to="/about_me">
            About Me
          </HeaderLink>
          <HeaderLink className="header-link" to="/portfolio">
            Portfolio
          </HeaderLink>
          <HeaderLink className="header-link" to="/contact">
            Contact
          </HeaderLink>
        </HeaderContainer>
    )
  }
}
export default Header;

const HeaderLink = styled(Link)`
    text-decoration: none;
    border-bottom: 2px solid #1e0707;
    width: fit-content;
    color: white;
    white-space: nowrap;
    margin: 10px 10px 3px 10px;
    height: 0;

    transition: height .2s ease-in-out, border .2s ease-in-out, color .2s ease-in-out, width .2s ease-in-out;
`

const HeaderContainer = styled.div`
    padding-left: 10px;
    padding-top: 10px;
    height: 30px;
    display: flex;

    &:hover .circle-hover {
      margin-top: 16px;
    }

    &:hover .top-circle-hover {
      margin-top: 7px;
      background-color: white;
    }

    &:hover .header-link {
      color: black
      border-bottom: 2px solid #63ecf7;
      height: 20px;
    }
`

const TopCircle = styled.div`
    background-color: #3a1111;
    border-radius: 25px;
    border: 2px solid #63ecf7;
    width: 15px;
    height: 15px;
    margin: 8px;
    margin-top: 13px;
    transition: background-color .2s ease-in-out, margin .2s ease-in-out;
`

const Circle = styled.div`
    background-color: #3a1111;
    border-radius: 25px;
    width: 17px;
    height: 17px;
    margin: 8px;
    margin-right: -26.3px;
    transition: margin .2s ease-in-out;
`
