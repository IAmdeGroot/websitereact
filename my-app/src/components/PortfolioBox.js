import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem'
import MediaQuery from 'react-responsive';
import Cross from '../img/cross.png';
import Mountain from '../img/berg2.jpg';
import ProfileImg from '../img/jag.jpg';
import BackgroundImg from '../img/background.jpg';
import ContainerImg from '../img/blackandwhite.jpg';
import Elephant from '../img/elephant.jpg';
import Blueberry from '../img/blueberry.jpg';
import Forest from '../img/forest.jpg';
import Rose from '../img/rose.jpg';
import Motorcycle from '../img/motorcycle.jpg';


class PortfolioBox extends Component {

    state = { images: [] };

    render() {
        return(
            <MediaQuery minDeviceWidth={1025}>
                {(matches) => {

                 const theSTYLE = matches? 
                 itemHolder :
                 itemHolderMob

                 return(
                    <div style={this.props.style}>
                    <div style={theSTYLE}>
                    <PortfolioItem title='Berries' thumbNail='https://firebasestorage.googleapis.com/v0/b/my-website-2d280.appspot.com/o/blueberry.jpg?alt=media&token=30a398a9-8786-4bea-85bb-6c589d30e7ac' />
                    <PortfolioItem title='Elephant' thumbNail='https://firebasestorage.googleapis.com/v0/b/my-website-2d280.appspot.com/o/elephant.jpg?alt=media&token=a7f7186d-5e2e-4bed-9f94-b2c291dc4cda' />
                   
                    
                    </div>
                        <div style={theSTYLE}>
                        <PortfolioItem title='Rose' thumbNail='https://firebasestorage.googleapis.com/v0/b/my-website-2d280.appspot.com/o/rose.jpg?alt=media&token=8341cb85-d7e4-447f-80b8-9b9c69cc856e' />
                        <PortfolioItem title='Mountain' thumbNail='https://firebasestorage.googleapis.com/v0/b/my-website-2d280.appspot.com/o/berg.jpg?alt=media&token=41e5b848-3764-460d-8a3d-56392cc99220' />
                        </div>
                            <div style={theSTYLE}>
                            <PortfolioItem title='Forest' thumbNail='https://firebasestorage.googleapis.com/v0/b/my-website-2d280.appspot.com/o/forest.jpg?alt=media&token=77e6399e-c21c-4952-a650-e24e3d6ea182' />
                            <PortfolioItem title='Motorcycle' thumbNail='https://firebasestorage.googleapis.com/v0/b/my-website-2d280.appspot.com/o/motorcycle.jpg?alt=media&token=e289f118-01dd-462e-b21b-3cec4ff2436b' />
                            
                            </div>
                      
                     </div>

                 );
                }
            }
            </MediaQuery>
        );
    }
}

const itemHolder = {
    display: 'flex',
    width: '100%',
    height: '33%',
    flexDirection: 'row',
    justifyContent: 'center',
    //borderStyle: 'solid',
    //borderColor: 'yellow'   
}

const itemHolderMob = {
    display: 'flex',
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    //borderStyle: 'solid',
    //borderColor: 'red' 

}

export default PortfolioBox;