import React, { Component } from 'react';
import styled from 'styled-components';
import DiscoverFamilyImg from '../content/discover-family-history.svg';
import Other77000Img from '../content/the-other-77000.svg';
import MeemoImg from '../content/meemo.svg';
import { device } from '../device';

class Portfolio extends Component {
  render() {
    return (
      <PortfolioWrapper>
          <PortfolioLink> <a className="portfolio-item-title second" href="https://the-other-77000-app.herokuapp.com/">The Other 77,000</a></PortfolioLink>
          <PortfolioItem placement="right" className="portfolio-item">
            <div>
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

          <PortfolioLink><a className="portfolio-item-title first" href="https://discover-family-history.herokuapp.com/">Discover Family History</a></PortfolioLink>
          <PortfolioItem className="portfolio-item">
            <div>
              <PortfolioText>Discover Family History is a geneology business owned by Gail Shaffer Blankenau. Mrs. Shaffer Blankenau came to me asking for a website upgrade from one she built back in the early 2000's and gave me full creative freedom to design and build it how I saw fit.</PortfolioText>
              <PortfolioText>The website was constructed using Ruby On Rails, Heroku, Git, Css, and Html</PortfolioText>

              <PortfolioLink><a href="https://bitbucket.org/lnispel/discover-family-history/src">BitBucket</a></PortfolioLink>
            </div>
            <div>
              <PortfolioImageHolder className="portfolio-item-holder">
                <PortfolioImage src={DiscoverFamilyImg}/>
              </PortfolioImageHolder>
            </div>
          </PortfolioItem>

          <PortfolioLink><a className="portfolio-item-title" href="https://github.com/lnispel/Meemo">Meemo</a></PortfolioLink>
          <PortfolioItem className="portfolio-item">
            <div>
              <PortfolioText>
                Meemo is an React Native app built with the intent of home automation. It's primary function is to turn on wifi connected lights when the phone that the app is downloaded on is within range of the selected bluetooth beacons. Once the beacons pick up the phones signal, the app sends a request to a node server built with graphql which in turn sends a call to the lights defined in the user's settings.
              </PortfolioText>
              <PortfolioText>
                The app was built using React Native and Styled Components while the node server was build with Node and GraphQl.
              </PortfolioText>
            </div>
            <div>
              <PortfolioImageHolder className="portfolio-item-holder">
                <PortfolioImage src={MeemoImg}/>
              </PortfolioImageHolder>
            </div>
          </PortfolioItem>
      </PortfolioWrapper>
    );
  }
}

export default Portfolio;

const PortfolioItem = styled.a`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
    display: flex;
    position: relative;
    z-index: 12;
    text-decoration: none;
    color: white;
    padding: 20px 50px 20px 30px;
    border-radius: 20px 10px;
    background: linear-gradient(black, #351111);

    transition: all .3s ease-in-out;

    .portfolio-item-holder {
      top: -40px;
      right: -40px;
    }

    @media ${device.mobileL} {
      width: unset;
      flex-direction: column;
      padding: 20px 39px 42px 30px;

      .portfolio-item-holder {
        top: 0;
        right: 0;
        position: relative;
        justify-content: center;
        width: 100%;
      }
    }

    &:hover .portfolio-item-holder {
      box-shadow: 0px 0px 12px 2px #ffff97
      background-color: white;
    }
`

const PortfolioWrapper = styled.div`
    padding: 0% 10%;
    margin-top: 100px;

    @media ${device.mobileL} {
      .portfolio-item-title.first {
        color: #1592e6;
      }

      .portfolio-item-title.second {
        color: #441919;
      }
    }

`
const PortfolioText = styled.div`
    padding: 15px;
    text-align: left;
`

const PortfolioLink = styled.div`
    width: 100%;

    a {
      text-decoration: none;
      display: block;
      margin: 10px;
    }

    a:not(.portfolio-item-title) {
      color: #25679e;
      font-size: 16px;
    }

    a.portfolio-item-title {
      color: #ffff97;
      font-size: 25px;
      text-align: left
      padding-left: 80px;
    }

    &:hover a:not(.portfolio-item-title) {
      color: #1592e6;
    }

    &:hover a.portfolio-item-title {
      color: #441919;
    }

    @media ${device.mobileL} {
      a.portfolio-item-title {
        text-align: center;
        padding-left: 0;
      }
    }

    transition: all .2s ease-in-out;
`

const PortfolioImageHolder = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 20%;
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
