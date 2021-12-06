import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';

import StarWars from '../assets/StarWars.jpg';
import War from '../assets/War.jpg';
import Witcher from '../assets/Witcher.jpg';

export default class CarouselBox extends Component {
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100"  src={StarWars} alt="Star Wars game" />
                    
                        <div className="slide-content_wrap">
                        <div className="slide-content">
                            <h2 className="slide_title">Star Wars</h2>
                            <h3 className="slide_subtitle">Battlefront II</h3>
                            <div id="slide_buttons">
                                <button className="button_green">Watch Trailer</button>
                                <button className="button_gray">Explore Games</button>
                            </div>
                        </div>
                        </div>
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100"  src={War} alt="War game" />
                    
                        <div className="slide-content">
                            <h2 className="slide_title">Call of Duty: WWII</h2>
                            <h3 className="slide_subtitle">Released on: 23/11/2017</h3>
                            <div id="slide_buttons">
                                <button className="button_green">Watch Trailer</button>
                                <button className="button_gray">Explore Games</button>
                            </div>
                        </div>
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100"  src={Witcher} alt="Star Wars game" />
                    
                        <div className="slide-content">
                            <h2 className="slide_title">Witcher</h2>
                            <h3 className="slide_subtitle">Wild hunt</h3>
                            <div id="slide_buttons">
                                <button className="button_green">Watch Trailer</button>
                                <button className="button_gray">Explore Games</button>
                            </div>
                        </div>
                    
                </Carousel.Item>
            </Carousel>
        )
    }
}