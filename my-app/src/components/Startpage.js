import React, { Component } from 'react';
import Background from '../img/berg2.jpg';
import ProfileImg from '../img/jag.jpg';
import BackgroundImg from '../img/background.jpg';
import ContainerImg from '../img/blackandwhite.jpg';
import Header from './Header';
import InfoBox from './InfoBox';
import PortfolioBox from './PortfolioBox';
import Ball from './Ball';
import MediaQuery from 'react-responsive';
import {Animated} from 'react-animated-css';

class Startpage extends Component {

  state = {
    showPortfolio: false,
    showAboutMe: false,
     
  }


  render() {
    return (
      <div>
        <div style={containerDivStyle}>
        <div style={tint}>
        </div>
      
        <Header onAboutClick={this.onAboutMeClicked} onPortfolioClick={this.onPortfolioClicked} />
          <div style={imgandNameHolder}>
           {this.renderJDG()}
           <Ball/>
          </div>
          
        </div>
          <div style={boxContainer}>
        {this.renderAboutMe()}
        {this.renderPortfolio()}
          </div>
      </div>

    );
  }

  
  renderJDG = () => {
    return(
    <MediaQuery minDeviceWidth={1025}>
    {(matches) => {
      const STYLE = matches ?
      jdgDesktop :
      jdgMobile
      return(
      <h1 style={STYLE}> JDG. </h1>
      ); 
  }}
  </MediaQuery>
    );
  }

  onAboutMeClicked = () => {
    console.log('Click!');
    if (this.state.showAboutMe == true) {
      this.setState({showAboutMe: false})
    } if (this.state.showPortfolio == true) {
      this.setState({showPortfolio: false})
    } if (this.state.showAboutMe == false) {
    this.setState({showAboutMe: true});
    }
    }

    

    onPortfolioClicked = () => {
      console.log('PORTFOLIO');
      if (this.state.showPortfolio == true) {
        this.setState({showPortfolio: false})
      } if (this.state.showAboutMe == true) {
        this.setState({showAboutMe: false})
      } if (this.state.showPortfolio == false) {
      this.setState({showPortfolio: true});
      }
    }


  renderAboutMe = () => {
     if (this.state.showAboutMe == false) {
     return null;
    } else {
      return(
     
      <MediaQuery minDeviceWidth={1025}>
        {(matches) => {
         const STYLE = matches? 
         aboutMeDesktop :
         aboutMeMobile
         return(

      <div style={STYLE}>
      <InfoBox onCrossClick={this.onCrossClickedAbout} style={aboutmeBoxStyle}/>
      </div>
         );
        }}
      </MediaQuery>
      
    );
  }
}

renderPortfolio = () => {
  if (this.state.showPortfolio == false) {
  return null;
 } else {
   return(
  
   <MediaQuery minDeviceWidth={1025}>
     {(matches) => {
      const STYLE = matches? 
      portfolioDesktop :
      portfolioMobile
      return(

   <div style={STYLE}>
   <PortfolioBox onCrossClick={this.onCrossClickedPortfolio} style={portfolioBoxStyle}/>
   </div>
      );
     }}
   </MediaQuery>
   
 );
}
}

}



const containerDivStyle ={
  backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/my-website-2d280.appspot.com/o/background.jpg?alt=media&token=56f0c921-129e-4156-a135-fcb66e2e6e77)`,
  backgroundColor: 'white',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  opacity: '1',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  position: 'absolute'
 
}

const tint = {
  backgroundColor: 'black',
  opacity: '0.55',
  height: '100%',
  width: '100%',
  position: 'absolute'
}

const jdgDesktop = {
    fontSize: '8vw' ,
    fontFamily: 'Yeseva One',
    alignSelf: 'center',
    color: 'white'   
}

const jdgMobile = {
  fontSize: '100px' ,
  fontFamily: 'Yeseva One',
  alignSelf: 'center',
  color: 'white'   
}

const imgandNameHolder ={
  width: '60%',
  height: '70%',
  position: 'absolute',
  display: 'flex',
  marginTop: '3%',
  justifyContent: 'center',
  flexDirection: 'column',
  alignSelf: 'center',
  //backgroundImage: `url(${BackgroundImg})`,
  //backgroundSize: 'cover',
}

const boxContainer ={
  display: 'flex',
  width: '100%',
  height: '80%',
  position: 'absolute',
  marginTop: '15vh',
  justifyContent: 'center',
}

const aboutMeDesktop = {
  width: '70%',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  transition: 'height 2s ease-in, opacity 0.5s ease-in',
  
}

const aboutMeMobile = {
  width: '100%',
  height: '70vh',
  display: 'flex',
  position: 'relative',
  transition: 'height 0.5s ease-out',
  //borderStyle: 'solid',
  //borderColor:'purple'
}

const portfolioDesktop = {
  width: '70%',
  display: 'flex',
  position: 'relative',
  transition: 'height 2s ease-in, opacity 0.5s ease-in',

}

const portfolioMobile = {
  width: '100%',
  height: '100%',
  display: 'flex',
  position: 'relative',
  transition: 'height 0.5s ease-out',
}

const aboutmeBoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: 'rgba(0,0,0,0.8)',
  
}

const portfolioBoxStyle = {
  display: 'flex',
  width: '100%',
  backgroundColor: 'rgba(0,0,0,0.8)',
  flexDirection: 'column'

}

export default Startpage;
