import React, { Component } from 'react';
import styled from 'styled-components';
import DiscoverFamilyImg from '../content/discover-family-history.svg';
import Other77000Img from '../content/the-other-77000.svg';
import MeemoImg from '../content/meemo.svg';

class Portfolio extends Component {
  render() {
    return (
      <PortfolioWrapper>
          <PortfolioItem className="portfolio-item-holder">
            <div>
              <PortfolioImageHolder className="portfolio-item">
                <PortfolioImage src={DiscoverFamilyImg}/>
              </PortfolioImageHolder>
            </div>
            <div>
              <PortfolioLink><a href="https://discover-family-history.herokuapp.com/">Discover Family History</a></PortfolioLink>

              <PortfolioText>Discover Family History is a geneology business owned by Gail Shaffer Blankenau.</PortfolioText>
              <PortfolioText>The website was constructed using Ruby On Rails, Heroku, Git, Css, and Html</PortfolioText>

              <PortfolioLink><a href="https://bitbucket.org/lnispel/discover-family-history/src">BitBucket</a></PortfolioLink>
            </div>
          </PortfolioItem>

          <PortfolioItem placement="right" className="portfolio-item">
            <div>
              <PortfolioLink> <a href="https://the-other-77000-app.herokuapp.com/">The Other 77,000</a></PortfolioLink>
              <PortfolioText>The Other 77,000 was a project I designed for myself to document the rural decay in Nebraska and other parts of the rural midwest</PortfolioText>
              <PortfolioText>The landing page was built using React, Create React App Npm package which includes Babel, Webpack and Yarn, Styled Components, React Router, and Git.
              </PortfolioText>
              <PortfolioLink><a href="https://github.com/lnispel/TheOther77000Landing">Github</a></PortfolioLink>
              <div>
                Associated accounts:
                <PortfolioLink><a href='https://www.facebook.com/theother77000/'>Facebook</a></PortfolioLink>
                <PortfolioLink><a href='http://theother77000.tumblr.com/'>Tumblr</a></PortfolioLink>
                <PortfolioLink><a href='https://www.instagram.com/theother77000/'>Instagram</a></PortfolioLink>
              </div>
            </div>
            <div>
              <PortfolioImageHolder className="portfolio-item-holder">
                <PortfolioImage src={Other77000Img}/>
              </PortfolioImageHolder>
            </div>
          </PortfolioItem>

          <PortfolioItem className="portfolio-item">
            <div>
              <PortfolioImageHolder className="portfolio-item-holder">
                <PortfolioImage src={MeemoImg}/>
              </PortfolioImageHolder>
            </div>
            <PortfolioLink><a href="https://github.com/lnispel/Meemo">Meemo</a></PortfolioLink>
          </PortfolioItem>
      </PortfolioWrapper>
    );
  }
}

export default Portfolio;

const PortfolioItem = styled.a`
    width: ${props => props.placement == "right" ? '45%' : '40%'};
    margin-left: ${props => props.placement == "right" ? 'auto' : '0'};
    display: flex;
    position: relative;
    z-index: 12;
    text-decoration: none;
    color: white;
    padding: 20px;
    border-radius: 20px 10px;
    background: linear-gradient(black, #351111);

    transition: all .3s ease-in-out;

    &:hover .portfolio-item-holder {
      box-shadow: 0px 0px 12px 2px #ffff97
      background-color: white;
    }
`

const PortfolioWrapper = styled.div`
    padding: 0% 10%;
`
const PortfolioText = styled.div`
    padding: 15px;
`

const PortfolioLink = styled.div`
    width: 100%;
    text-align:center;

    a {
      text-decoration: none;
      color: #25679e
      font-size: 25px;
      display: block;
      margin: 10px;
    }

    &:hover a {
      color: #1592e6;
    }

    transition: all .2s ease-in-out;
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
