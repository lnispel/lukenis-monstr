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
    color: white;
    border-bottom: 2px solid #1e0707;
    width: fit-content;
    color: black;
    white-space: nowrap;
    margin: 10px 10px 3px 10px;
    font-family: futura;
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
      margin-top: 6px;
      background-color: white;
    }

    &:hover .header-link {
      color: white
      border-bottom: 2px solid #63ecf7;
      height: 20px;
    }
`

const TopCircle = styled.div`
    background-color: transparent;
    border-radius: 25px;
    border: 2px solid #63ecf7;
    width: 15px;
    height: 15px;
    margin: 8px;
    margin-top: 13px;
    transition: background-color .2s ease-in-out, margin .2s ease-in-out;
`

const Circle = styled.div`
    background-color: white;
    border-radius: 25px;
    width: 17px;
    height: 17px;
    margin: 8px;
    margin-right: -26px;
    transition: margin .2s ease-in-out;
`
