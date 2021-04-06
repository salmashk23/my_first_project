import React from 'react';
import Carousel from 'nuka-carousel';
import CarouselItems from "./carousel_items.js";
import "./carousel.css";

function DemoCarousel()
{
    return(
        <div>
            <h3 id="note" className="text-center">
                 <p>
                     Some of the people who "Healthy Weight"
                     changed their lives and there are many more <br/>
                     If you want to make your life healthier then
                    <a href="#" class="text-info"> Join us </a>
                </p>
            </h3>
            <Carousel autoplay={true} autoPlayInterval="2000" >
                {
                    CarouselItems.map((item, index) => {
                        return(
                            <img key={index} src={item.image}  className="sliderimg " alt={item.alt}/>
                            )
                        }
                    )
                }
            </Carousel>
        </div>
    );
}

export default DemoCarousel;
