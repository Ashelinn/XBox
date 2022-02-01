import React, {useState} from 'react';

//Подключение модулей
import CarouselBox from '../Components/CarouselBox';
import Modal from '../Components/Modal';

//Импорт изображений
import GoldGame from '../assets/images/Games-with-gold.jpg';
import Mixer from '../assets/images/mixer-logo.jpg';
import XBox from '../assets/images/xbox-one-x.jpg';
import Logo from '../assets/images/icons/Shape.svg';
import iconprev from '../assets/images/icons/icon-prev.svg';
import iconnext from '../assets/images/icons/icon-next.svg';
import fon from '../assets/images/rectangle.jpg';
import fonDesign from '../assets/images/design.jpg';

import data from '../bdgames.json';

const bgstyle = {
    fon: {
        backgroundImage: `url(${fon})`
    }
}

const bgDesign = {
    fn: {
        backgroundImage: `url(${fonDesign})`
    }
}

export default function Home () {
    const [modalActive, setModalActive] = useState(false);
    const bdgame = data.games.concat();
    const [gameNum, setGameNum] = useState(0);

        return(
            <>
                <CarouselBox />  
                <Modal active={modalActive} setActive={setModalActive} />
                {/* ------------------------------------------------------
                    Bestvalue section 
                ------------------------------------------------------- */}
                <section id="bestvalue">
                    <div className="page-container">

                        <div className="bestvalue__header">
                            <img src={Logo} alt="Xbox logo" />
                            <h1 className="bestvalue__title">The best value</h1>
                            <h2 className="bestvalue__subtitle">in games and entertainment</h2>
                        </div>

                        {/* Cards */}
                        <div className="card-container">
                            {/* --------- 1 --------- */}
                            <div className="card">
                                <div className="card__img">
                                    <img src={XBox} alt="console Xbox" />
                                </div>
                                <div className="card__content">
                                    <h4 className="card__title">XBOX ONE X</h4>
                                    <p className="card__text">Faster Processing Smoother Gameplay</p>
                                </div>
                                <button className="button_green" onClick={() => setModalActive(true)}>Explore Consoles &#38; Accessories</button>
                            </div>
                            {/* --------- 2 --------- */}
                            <div className="card">
                                <div className="card__img">
                                    <img src={Mixer} alt="console Xbox" />
                                </div>
                                <div className="card__content">
                                    <h4 className="card__title">Mixer Streaming</h4>
                                    <p className="card__text">The Next GenerationOf Life Game Streaming</p>
                                </div>
                                <button className="button_green" onClick={() => setModalActive(true)}>Start Watching mixer</button>
                            </div>
                            {/* --------- 3 --------- */}
                            <div className="card">
                                <div className="card__img">
                                    <img src={GoldGame} alt="console Xbox" />
                                </div>
                                <div className="card__content">
                                    <h4 className="card__title">Free Games Every Month</h4>
                                    <p className="card__text">Get up to $700 in free games</p>
                                </div>
                                <button className="button_green" onClick={() => setModalActive(true)}>Get Free Games</button>
                            </div>
                        </div>
    
                    </div>
                </section>

                {/* ------------------------------------------------------
                    Exclusive section 
                ------------------------------------------------------- */}
                <section id="exclusive" style={bgstyle.fon}>
                    <div className="page-container">
                        <div className="exclusive__header">
                            <div className="exclusive__arrow" onClick={() => {
                                setGameNum(gameNum-3)
                            }}>
                                <img src={iconprev} alt="prev games" />
                            </div>
                            <h2 className="exclusive__title">Exclusive games on XBOX</h2>
                            <div className="exclusive__arrow" onClick={() => {
                                setGameNum(gameNum+3)
                            }}>
                                <img src={iconnext} alt="next games" />
                            </div>
                        </div>

                        {/* Cards */}
                            <div className="exclusive__flex-container">
                            {
                            Object.keys(bdgame).map((index) => {
                                if (gameNum >= bdgame.length || gameNum < 0) 
                                    setGameNum(0)
                                else if (index >= gameNum && index < gameNum+3)
                                    return (
                                        <div className="card exclusive_scale" key={index}>
                                            <div className="card__img">
                                                <img src={bdgame[index].cover} alt={bdgame[index].name} />
                                            </div>
                                            <div className="card__content">
                                                <h3 className="card__title">{bdgame[index].name}</h3>
                                                <p className="card__text">{bdgame[index].description}</p>
                                            </div>
                                                <button className="button_green">Show details</button>
                                        </div>
                                )
                            })
                            }
                            </div>
                        </div>
                                       
                    <div className="exclusive__button">
                        <button className="button_gray">XBOX Store</button>
                    </div>
                </section>

                {/* ------------------------------------------------------
                    Design section 
                ------------------------------------------------------- */}
                <section id="design" style={bgDesign.fn}>
                    <div className="design_container">
                        <h2 className="design_title">Xbox Design Lab</h2>
                        <p className="design_text">Make yours one in a billion with new colors, metallic finishes and rubberized grips.</p>
                        <div className="design_buttons">
                            <button className="button_gray">Design Yours</button>
                            <button className="button_green">Explore Consoles &#38; Accessories</button>
                        </div>
                    </div>
                </section>
            </>
        )

}