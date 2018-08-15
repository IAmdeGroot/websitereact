import React, { Component } from 'react';
import HeaderButton from './HeaderButton';
import MediaQuery from 'react-responsive';
import ProfileImg from '../img/jag.jpg';


class Header extends Component {
    render() {
        return(
<MediaQuery minDeviceWidth={1025}>
  {(matches) => {

      const theSTYLE = matches? 
      headerDesktopStyle :
      headerMobileStyle
     
      return(
      <div style={theSTYLE}>
      <HeaderButton name='ABOUT' onClick={this.props.onAboutClick} />
      <HeaderButton name='PORTFOLIO' onClick={this.props.onPortfolioClick}/>
      <HeaderButton name= 'CONTACT' />
      
       
      
      </div>
      );
    
  }}
</MediaQuery>

);
}

}



const headerMobileStyle = {
    height: '15vh',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'space-around',
    position: 'absolute',
   
}

const headerDesktopStyle ={
    height: '100px',
    //width: '400px',
    width: '100%',
    //backgroundColor: 'transparent',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    position: 'relative',
    justifyContent: 'flex-start',
    border: '0',
    borderColor: 'white',
    borderStyle: 'solid',
    marginRight: 'auto'
}

  const emailandPicHolder = {
      display: 'flex',
      width: '250px',
      marginLeft: 'auto',
      justifyContent: 'center',
      position: 'relative'
      
  }

  const emailHolder = {
      display: 'flex',
      width: '100%',
      height: '30%',
      position: 'absolute',
      bottom: '0',
      justifyContent: 'center',
      alginItems: 'center'
  }


  const emailStyle = {
      diplay: 'flex',
      fontSize: '1.5vw',
      fontFamily: 'Nunito',
      alignSelf: 'center',
      marginRight: '3%',
      color: 'white'
      

  }

  const imageStyle = {
    height: '70%',
    borderRadius: '50%',
    display: 'flex',
    position: 'absolute',
    marginTop: '3%'
  }

 

export default Header;