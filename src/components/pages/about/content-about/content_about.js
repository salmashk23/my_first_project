import React from 'react';
import ReactDOM from 'react-dom';
import TextAbout from './text_about/text_about.js';
import CardAbout from './cards_about/card_about.js';


class ContentAbout extends React.Component{
    render(){
        return(
            <div>
                <TextAbout/>
                <CardAbout/>
            </div>
        )
    }
}
export default ContentAbout;
