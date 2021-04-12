import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselItems from "./carousel_items.js";
import "./carousel.css";


class DemoCarousel extends React.Component{
    render(){
    return(
        <div>
            <h3 id="note" className="text-center">
                 <p>
                     Some of the people who "Healthy Weight"
                     changed their lives and there are many more <br/>
                     If you want to make your life healthier then
                    <a href="/register_page" class="text-warning"> Join us </a>
                </p>
            </h3>
            <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false}>
                {
                    CarouselItems.map((item => {
                        return(
                            <img src={item.image}  className="sliderimg" alt={item.alt}/>
                                )
                            }
                        )
                    )
                }
            </Carousel>
        </div>
    );
}
}

export default DemoCarousel;
