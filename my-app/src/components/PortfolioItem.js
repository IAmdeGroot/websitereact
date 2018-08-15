import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
class PortfolioItem extends Component {

    render(){
        return(
            <MediaQuery minDeviceWidth={1025}>
            {(matches) => {
            const theSTYLE = matches? 
            containerStyle :
            containerMobile

            return(
            <div style={theSTYLE}>
                <div style={imageHolder}>
                <img src={this.props.thumbNail} style={imgStyle} />
                </div>
                    <div style={titleHolder}>
                    {this.renderTitle()}
                    </div>
            </div>
            );
    }}
    </MediaQuery>
        );
}


renderTitle = () => {
    return(
        <MediaQuery minDeviceWidth={1025}>
        {(matches) => {
            const STYLE = matches? 
            titleDesktop :
            titleMobile
            return(
                <p style={STYLE}> {this.props.title} </p>
            );
        }}
        </MediaQuery>

    );
}

}
const imgStyle = {
    display: 'flex',
    width: '100%'
}
const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '15vw',
    height: '20vh',
    borderStyle: 'solid',
    borderColor: 'white',
    margin: '1%',
}

const containerMobile = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '20vh',
    height: '20vh',
    margin: '1%',
    borderStyle: 'solid',
    borderColor: 'white',
    
}

const imageHolder = {
    display: 'flex',
    width: '100%',
    height: '80%',
  
}

const titleHolder = {
    display: 'flex',
    width: '100%',
    height: '20%',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    

}

const titleDesktop = {
    fontSize: '1.2vw',
    fontFamily: 'Raleway',
    color: 'white',
    alignSelf: 'center'
}

const titleMobile = {
    fontSize: '3.5vw',
    fontFamily: 'Raleway',
    color: 'white',
    alignSelf: 'center'
}

export default PortfolioItem;