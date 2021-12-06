import React, {Component} from 'react';
import GoldGame from '../assets/Games-with-gold.jpg';
import Mixer from '../assets/mixer-logo.jpg';
import XBox from '../assets/xbox-one-x.jpg';
import Logo from '../assets/Shape.svg';

export default class BestValue extends Component {
    render() {
        return(
            <>
            <section id="bestvalue">
                <div className="bestvalue_header">
                    <img src={Logo} alt="Xbox logo" />
                    <h1 className="bestvalue_title">The best value</h1>
                    <h2 className="bestvalue_subtitle">in games and entertainment</h2>
                </div>
                <div className="bestvalue_container">
                    <div className="card">
                        <div className="card_img">
                            <img src={XBox} alt="console Xbox" />
                        </div>
                        <div className="card_textcontent">
                            <h4 class="card_name">XBOX ONE X</h4>
                            <p class="card_text">Faster Processing Smoother Gameplay</p>
                        </div>
                        <button className="button_green card_button">Explore Consoles & Accessories</button>
                    </div>
                    
                    <div className="card">
                        <div className="card_img">
                            <img src={Mixer} alt="console Xbox" />
                        </div>
                        <div className="card_textcontent">
                            <h4 className="card_name">mixer Streaming</h4>
                            <p className="card_text">The Next GenerationOf Life Game Streaming</p>
                        </div>
                        <button className="button_green card_button">Start Watching mixer</button>
                    </div>

                    <div className="card">
                        <div className="card_img">
                            <img src={GoldGame} alt="console Xbox" />
                        </div>
                        <div className="card_textcontent">
                            <h4 className="card_name">Free Games Every Month</h4>
                            <p className="card_text">Get up to $700 in free games</p>
                        </div>
                        <button className="button_green card_button">Get Free Games</button>
                    </div>
                </div>
            </section>
            </>
        )
    }
}