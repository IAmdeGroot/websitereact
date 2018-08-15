import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class HeaderButton extends Component {
    render() {
        return(
            <button style={headerButtonStyle} onClick={this.props.onClick}>
            {this.props.name}
            </button>
        );
    }
}


const headerButtonStyle ={
    width: '125px',
    height: '60px',
    display: 'flex',
    position: 'aboslute',
    alignSelf: 'center',
    justifyContent: 'center',
    //margin: '2vw',
    backgroundColor: 'transparent',
    border: '0',
    outlineColor: 'white',
    color: 'white',
    fontSize: '2vh',
    fontFamily: 'Raleway',
   
    
    
}

const buttonMobileStyle ={
    width: '250px',
    height: '10vh',
    display: 'flex',
    alignSelf: 'center',
    margin: '0.5vw',
    backgroundColor: 'rgba(0,0,0,0.5)',
    border: '0',
    color: 'white',
    fontSize: '1vw',
    justifyContent: 'center',

}


export default HeaderButton;