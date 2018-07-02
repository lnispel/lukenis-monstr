import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../device';
import { withRouter } from "react-router-dom";
import Logo from '../content/lukenis-monstr-logo.svg';

class Header extends Component {
  constructor (props) {
      super(props)
      this.state ={
        selected: ""
      }
      this.changeSelected = this.changeSelected.bind(this);
  }
  componentDidMount() {
    this.changeSelected(this.props.history.location.pathname.split('/')[1])
  }

  changeSelected(selected) {
    this.setState({ selected: selected });
    this.props.history.push(selected)
  }

  render() {
    return (
        <HeaderContainer>
          <CircleHolder>
            <Circle className="circle-hover"/>
            <TopCircle className="top-circle-hover"/>
          </CircleHolder>
          <MainNav className="main-nav">
            <LinkContainer onClick={() => this.changeSelected('')} selected={this.state.selected} pathName="" className="link-container">
              <HeaderLink className="header-link home" to="/">
                Home
              </HeaderLink>
            </LinkContainer>
            <LinkContainer onClick={() => this.changeSelected('about_me')} selected={this.state.selected} pathName="about_me" className="link-container">
              <HeaderLink className="header-link" to="/about_me">
                About Me
              </HeaderLink>
            </LinkContainer>
            <LinkContainer onClick={() => this.changeSelected('portfolio')} selected={this.state.selected} pathName="portfolio" className="link-container">
              <HeaderLink className="header-link" to="/portfolio">
                Portfolio
              </HeaderLink>
            </LinkContainer>
            <LinkContainer onClick={() => this.changeSelected('contact')} selected={this.state.selected} pathName="contact" className="link-container">
              <HeaderLink className="header-link" to="/contact">
                Contact
              </HeaderLink>
            </LinkContainer>
          </MainNav>
        </HeaderContainer>
    )
  }
}
export default withRouter(Header);

const MainNav = styled.ul`
    list-style-type: none;
    text-decoration: none;
    display: flex;
    padding-left: 0;
    padding-top: 8px;
`

const HeaderLink = styled(NavLink)`
    text-decoration: none;
    width: fit-content;
    color: white;
    white-space: nowrap;
    height: 0;

    transition: all .2s ease-in-out;
`

const LinkContainer = styled.li `
    font-weight: bold;
    border-bottom: ${props => props.selected == props.pathName ?
      '2px solid #25679e' : '2px solid #25679e'};
    height:  ${props => props.selected == props.pathName ?
      '20px' : '0px'};
    box-shadow:  ${props => props.selected == props.pathName ?
      '0px 3px 2px 0px #ffff97' : ''};
    width: fit-content;
    margin: 3px 10px 3px 10px;
    transition: all .2s ease-in-out;

    .header-link {
      opacity: ${props => props.selected == props.pathName ? '1': '0'};
    }

    .header-link.home {
      color: ${props => props.selected == props.pathName ?
        '#351111': 'white'};
    }

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
        background-color: #25679e;
      }

      &:hover .top-circle-hover {
        margin-top: 7px;
        background-color: white;
      }

      &:hover .header-link {
        color: #441919;
        opacity: 1;
      }

      .header-link.active:not(.home){
        color: #25679e;
      }

      &:hover .header-link.home {
        color: #441919;
      }

      &:hover .link-container {
        border-bottom: 2px solid #441919;
        height: 20px;
      }
    }
    @media ${device.tablet} {
      .circle-hover {
        margin-top: 11px;
      }

      .top-circle-hover {
        margin-top: 2px;
        background-color: white;
      }

      .header-link {
        color: #441919;
        opacity: 1;
      }

      .header-link.active:not(.home) {
        color: #441919;
      }

      .header-link.home {
        color: #25679e;
      }

      .link-container {
        border-bottom: 2px solid #ffff97;
        height: 20px;
      }

      .main-nav {
        padding-top: 1px;
      }
    }
`

const CircleHolder = styled.div`
    display: flex;
    justify-content:center;
    width: 25px;
    align-items: center;
    transition: all .2s ease-in-out;
`

const TopCircle = styled.div`
    background-color: transparent;
    border-radius: 25px;
    border: 2px solid #ffff97;
    width: 10px;
    height: 15px;
    margin-top: 5px;
    position: absolute;
    transition: background-color .2s ease-in-out, margin .2s ease-in-out;
`

const Circle = styled.div`
    background-color: #441919;
    border-radius: 25px;
    width: 18px;
    height: 18px;
    margin-top: -4px;
    transition: margin .2s ease-in-out;
    position: absolute;
`
