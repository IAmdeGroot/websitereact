import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Cross from '../img/cross.png';


class InfoBox extends Component {
  
    render() {
        return(
            
            <div style={this.props.style}>
            <div style={textHolder}>
            {this.renderText()}
            </div>
             </div>

        );
    }

renderText = () => {
    return(
    <MediaQuery minDeviceWidth={1025}>
    {(matches)  => {
          const STYLE = matches ?
          textDesktop :
          textMobile
          return(
            <p style={STYLE}> 
            Jag har blivit kallad avväpnande. Själv ser jag mig som en driven, organiserad och engagerad person som brinner för utveckling och IT. Utöver studiernas traditionella fokus på programspråk som JAVA och SQL besitter jag ett stort intresse för apputveckling då jag på fritiden spenderar tid med React Native (Javascript, CSS, React) för att skapa applikationer. <br/> <br/>
                        
            Hos mig finns även ett intresse för UX, användarcentrerad utveckling och design. Detta är något som återspeglas på mig som person då kvalitet och funktionalitet ligger i fokus på allt jag tar mig an. 
            Utöver min IT-bakgrund har jag även arbetat inom handelsbranschen i sju år. Detta har bidragit till en skicklighet i att skapa och bevara kundrelationer samt att arbeta i lag. <br/> <br/>
                        
            Jag lämnar gärna referenser vid förfrågan!
            </p>

          );

    }}
    </MediaQuery>
    );
}

}



const textHolder = {
    //marginRight: 'auto',
    display: 'flex',
    alignContent: 'center',
    alignSelf: 'center',
    width: '90%',
    height: '100%',
    
}

const textDesktop ={
    fontSize: '1.8vw',
    color: 'white',
    fontFamily: 'Architects Daughter'

}

const textMobile ={
    fontSize: '2vh',
    color: 'white',
    fontFamily: 'Architects Daughter'

}

/* !SKICKAR STYLE FRÅN STARTPAGE.JS!
const infoBoxStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    transition: 'all 1s ease-out',
    
}
*/




  export default InfoBox;