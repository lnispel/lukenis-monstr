import React, { Component } from 'react';
import styled from 'styled-components';
import DiscoverFamilyImg from '../content/discover-family-history.svg';
import Other77000Img from '../content/the-other-77000.svg';
import MeemoImg from '../content/meemo.svg';

class Portfolio extends Component {
  render() {
    return (
      <PortfolioWrapper>
          <PortfolioItem href="https://discover-family-history.herokuapp.com/">
            <div>
              <PortfolioImageHolder className="portfolio-item-holder">
                <PortfolioImage src={DiscoverFamilyImg}/>
              </PortfolioImageHolder>
            </div>
            <div>
              <a href="https://discover-family-history.herokuapp.com/">Discover Family History</a>

              <div>Discover Family History is a geneology business owned by Gail Shaffer Blankenau.</div>
            </div>
          </PortfolioItem>

          <PortfolioItem href="https://the-other-77000-app.herokuapp.com/" placement="right">
            <div>
              <a href="https://the-other-77000-app.herokuapp.com/">The Other 77,000</a>
              <div>The Other 77,000 was a project I designed for myself to document the rural decay in Nebraksa and other parts of the rural midwest

              Associated accounts:
              <a href='https://github.com/lnispel/TheOther77000'>Github</a>
              <a href='https://www.facebook.com/theother77000/'>Facebook</a>
              <a href='http://theother77000.tumblr.com/'>Tumblr</a>
              <a href='https://www.instagram.com/theother77000/'>Instagram</a>
              </div>
            </div>
            <div>
              <PortfolioImageHolder className="portfolio-item-holder">
                <PortfolioImage src={Other77000Img}/>
              </PortfolioImageHolder>
            </div>
          </PortfolioItem>

          <PortfolioItem href="https://github.com/lnispel/Meemo">
            <div>
              <PortfolioImageHolder className="portfolio-item-holder">
                <PortfolioImage src={MeemoImg}/>
              </PortfolioImageHolder>
            </div>
            <a href="https://github.com/lnispel/Meemo">Meemo</a>
          </PortfolioItem>
      </PortfolioWrapper>
    );
  }
}

export default Portfolio;

const PortfolioItem = styled.a`
    width: 40%;
    margin-left: ${props => props.placement == "right" ? 'auto' : '0'};
    display: flex;
    position: relative;
    z-index: 12;
    text-decoration: none;
    color: white;

    &:hover .portfolio-item-holder {
      box-shadow: 0px 0px 12px 2px #ffff97
      background-color: white;
    }
`

const PortfolioWrapper = styled.div`
    padding: 0% 10%;
`

const PortfolioImageHolder = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 20%;
    position: relative;
    background-color: #efefef;
    overflow: hidden;
    box-shadow: 1px 1px 1px 1px #efefef;
    display: flex;
    align-items: center;
    justify-content:center;
    transition: all .2s ease-in-out;
`

const PortfolioImage = styled.img`
    height: 75%;
    width: 75%;
`
