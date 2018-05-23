import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../device';

class Header extends Component {
  render() {
    return (
        <HeaderContainer>
          <Circle className="circle-hover"/>
          <TopCircle className="top-circle-hover"/>
          <MainNav className="main-nav">
            <LinkContainer className="link-container">
              <HeaderLink className="header-link" to="/">
                Home
              </HeaderLink>
            </LinkContainer>
            <LinkContainer className="link-container">
              <HeaderLink className="header-link" to="/about_me">
                About Me
              </HeaderLink>
            </LinkContainer>
            <LinkContainer className="link-container">
              <HeaderLink className="header-link" to="/portfolio">
                Portfolio
              </HeaderLink>
            </LinkContainer>
            <LinkContainer className="link-container">
              <HeaderLink className="header-link" to="/contact">
                Contact
              </HeaderLink>
            </LinkContainer>
          </MainNav>
        </HeaderContainer>
    )
  }
}
export default Header;

const MainNav = styled.ul`
    list-style-type: none;
    text-decoration: none;
    display: flex;
    padding-left: 0;
    padding-top: 8px;
`

const HeaderLink = styled(Link)`
    text-decoration: none;
    width: fit-content;
    color: white;
    white-space: nowrap;
    height: 0;

    transition: all .2s ease-in-out;
`

const LinkContainer = styled.li `
    border-bottom: 2px solid #1e0707;
    height: 0;
    width: fit-content;
    margin: 3px 10px 3px 10px;
    transition: all .2s ease-in-out;
`

const HeaderContainer = styled.ul`
    list-style-type: none;
    text-decoration: none;
    display: flex
    padding-left: 10px;
    padding-top: 10px;
    height: 30px;
    display: flex;
    margin: 0;
    @media ${device.laptop} {
      &:hover .circle-hover {
        margin-top: 16px;
      }

      &:hover .top-circle-hover {
        margin-top: 7px;
        background-color: white;
      }

      &:hover .header-link {
        color: black

      }

      &:hover .link-container {
        border-bottom: 2px solid #63ecf7;
        height: 20px;
      }
    }
    @media ${device.tablet} {
      circle-hover {
        margin-top: 16px;
      }

      .top-circle-hover {
        margin-top: 7px;
        background-color: white;
      }

      .header-link {
        color: black

      }

      .link-container {
        border-bottom: 2px solid #63ecf7;
        height: 20px;
      }

      .main-nav {
        padding-top: 1px;
      }
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
