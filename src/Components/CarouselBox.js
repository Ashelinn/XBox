import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';

//Подключение изображений
import StarWars from '../assets/images/StarWars.jpg';
import War from '../assets/images/War.jpg';
import Witcher from '../assets/images/Witcher.jpg';


export default class CarouselBox extends Component {
    render() {
        return(
            <Carousel>
                {/* ------ 1 -------- */}
                <Carousel.Item>
                    <img className="d-block w-100"  src={StarWars} alt="Star Wars game" />                               
                    <div className="carousel-caption">
                        <div className="slide__content">
                            <h2>Star Wars</h2>
                            <h3>Battlefront II</h3>
                            <div className="slide__buttons">
                                <a className="button_green rmargin-15">Watch Trailer</a>
                                <a className="button_gray">Explore Games</a>
                            </div>
                        </div>  
                    </div>
                </Carousel.Item>

                {/* ------ 2 -------- */}
                <Carousel.Item>
                    <img className="d-block w-100"  src={War} alt="War game" />
                    <div className="carousel-caption">
                        <div className="slide__content">
                            <h2>Call of Duty: WWII</h2>
                            <h3>Released on: 23/11/2022</h3>
                            <div className="slide__buttons">
                                <a className="button_green rmargin-15">Watch Trailer</a>
                                <a className="button_gray">Explore Games</a>
                            </div>
                        </div>  
                    </div>                    
                </Carousel.Item>

                {/* ------ 3 -------- */}
                <Carousel.Item>
                    <img className="d-block w-100"  src={Witcher} alt="Star Wars game" />
                    <div className="carousel-caption">
                        <div className="slide__content">
                            <h2>The Wither 3</h2>
                            <h3>Wild hunt</h3>
                            <div className="slide__buttons">
                                <a className="button_green rmargin-15">Watch Trailer</a>
                                <a className="button_gray">Explore Games</a>
                            </div>
                        </div>  
                    </div>                   
                </Carousel.Item>   
            </Carousel>
        )
    }
}