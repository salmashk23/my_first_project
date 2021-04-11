import React from 'react';
import ReactPlayer  from 'react-player';
import {Container, Col, Row} from 'reactstrap';
import CarouselVideo from "./carousel_video.js";


class FitnessContent extends React.Component{
    render(){
        return (
            <div>
                <CarouselVideo/>
            </div>
        );
      };

    }

export default FitnessContent ;
