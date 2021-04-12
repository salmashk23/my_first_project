import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Card, CardBody, CardTitle, CardText,CardFooter, Button ,CardImg} from 'reactstrap';
import Slider from "react-slick";
import NewItems from "./new_items.js";
import "../../../../general/card_carousel/card_carousel.css";

class NewCard extends React.Component{
        render(){
            const settings = {

             dots: false,
             infinite: true,
             speed: 500,
             slidesToShow: 3,
             slidesToScroll: 1
        };
            return(
                <Container className="cards-container" >
                    <Slider {...settings}>
                    {NewItems.map((item => {
                        return(
                            <div className="card-deck">
                                <Card className="cardd text-center" id="cardCaro" >
                                    <CardImg  src={item.image} alt="Card image cap"></CardImg>
                                    <CardBody>
                                        <CardTitle className="text-dark mb-3" tag="h3">{item.title}</CardTitle>
                                        <CardText tag="h4">
                                                {item.summary}
                                        </CardText>
                                    </CardBody>
                                    <Button className="m-4 bg-dark"  id="more">More Info</Button>
                                </Card>
                                </div>
                                    )
                                }
                            )
                        )
                    }
                    </Slider>
                </Container>
                );
            }
        }
export default NewCard;
