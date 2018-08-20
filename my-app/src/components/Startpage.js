import React, { Component } from 'react';
import Background from '../img/berg2.jpg';
import ProfileImg from '../img/jag.jpg';
import BackgroundImg from '../img/background.jpg';
import ContainerImg from '../img/blackandwhite.jpg';
import Header from './Header';
import InfoBox from './InfoBox';
import PortfolioBox from './PortfolioBox';
import Ball from './Ball';
import Letter from './Letter';
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
           {this.renderJDG()}
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
      const LETTER = matches ?
      letterHolder :
      letterHolderMobile

      return(
        <div style={LETTER}>
        <Animated style={letterAnimation} animationIn="bounceInLeft" isVisible={true} animationInDelay={1500}>
      <Letter style={STYLE} title='J' />
        </Animated>

      <Animated style={letterAnimation} animationIn="bounceInDown" isVisible={true} animationInDelay={1000}>
      <Letter style={STYLE} title='D' />
      </Animated>

      <Animated style={letterAnimation} animationIn="bounceInRight" isVisible={true} animationInDelay={2000}>
      <Letter style={STYLE} title='G.' />
      </Animated>
      </div>
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
      
      <Animated style={aboutAnimation} animationIn="slideInDown" animationOut="slideOutUp">
      <div style={STYLE}>
      <InfoBox style={aboutmeBoxStyle}/>
      </div>
      </Animated>
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

   <Animated style={portAnimation} animationIn="slideInDown">
   <div style={STYLE}>
   <PortfolioBox style={portfolioBoxStyle}/>
   </div>
   </Animated>
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
    color: 'white',
    
}

const jdgMobile = {
  fontSize: '100px' ,
  fontFamily: 'Yeseva One',
  alignSelf: 'center',
  color: 'white'   
}

const letterAnimation = {
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  
}

const letterHolder ={
  width: '20vw',
  height: '12vw',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  flexDirection: 'row',
  alignSelf: 'center',
  //borderColor: 'white',
  //borderStyle: 'solid'
}

const letterHolderMobile ={
  width: '250px',
  height: '200px',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  flexDirection: 'row',
  alignSelf: 'center',
  //borderColor: 'white',
  //borderStyle: 'solid'
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

const aboutmeBoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: 'rgba(0,0,0,0.8)',
  
}

const aboutAnimation = {
  display: 'flex',
  justifyContent: 'center',
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

const portfolioBoxStyle = {
  display: 'flex',
  width: '100%',
  backgroundColor: 'rgba(0,0,0,0.8)',
  flexDirection: 'column'

}

const portAnimation = {
  display:'flex',
  width:'100%',
  alignContent: 'center',
  justifyContent: 'center'
}





export default Startpage;
