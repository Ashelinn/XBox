import React, {Component} from 'react';
import iconprev from '../assets/icon-prev.svg';
import iconnext from '../assets/icon-next.svg';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
//import img4 from '../assets/img4.jpg';
//import img5 from '../assets/img5.jpg';
//import img6 from '../assets/img6.jpg';
import fon from '../assets/rectangle.jpg';

const bgstyle = {
    fon: {
        backgroundImage: `url(${fon})`
    }
}

export default class Exclusive extends Component {
    render() {
        return(
            <>
                <section id="exclusive" style={bgstyle.fon}>
                    <div className="exclusive_header">
                        <div className="exclusive_arrow">
                            <img src={iconprev} alt="prev games" />
                        </div>
                        <h2 className="exclusive_title">Exclusive games on XBOX</h2>
                        <div className="exclusive_arrow">
                            <img src={iconnext} alt="next games" />
                        </div>
                    </div>
                    <div className="exclusive_main">
                        <div className="card">
                            <div className="card_img">
                                <img src={img1} alt="console Xbox" />
                            </div>
                            <div className="card_textcontent">
                                <h4 className="card_name">Call of Duty: WWII</h4>
                                <p className="card_text">The C.O.D.E. Bravery Pack is now available in WWII</p>
                            </div>
                            <button className="button_green card_button">See Details</button>
                        </div>

                        <div className="card">
                            <div className="card_img">
                                <img src={img2} alt="console Xbox" />
                            </div>
                            <div className="card_textcontent">
                                <h4 className="card_name">Destiny 2</h4>
                                <p className="card_text">Join your Guardian allies to destroy the empire</p>
                            </div>
                            <button className="button_green card_button">See Details</button>
                        </div>

                        <div className="card">
                            <div className="card_img">
                                <img src={img3} alt="console Xbox" />
                            </div>
                            <div className="card_textcontent">
                                <h4 className="card_name">STEEP</h4>
                                <p className="card_text">Ride the vast open world of alpine slopes</p>
                            </div>
                            <button className="button_green card_button">See Details</button>
                        </div>
                    </div>
                    <div className="exlusive_button">
                        <button className="button_gray">XBOX Store</button>
                    </div>
                </section>
            </>
        )
    }
}