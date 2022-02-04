import React, {useState} from 'react';

import Modal from '../Components/Modal';

//Импорт изображений
import Instagram from '../assets/images/icons/Instagram.svg';
import Facebook from '../assets/images/icons/Faacebook.svg';
import Twitter from '../assets/images/icons/Twitter.svg';


export default function Footer () {
    const [modalActive, setModalActive] = useState(false);

        return(     
            <>    
            <Modal active={modalActive} setActive={setModalActive} />
            <footer>
                <div className="page-container">
                    <div className="footer__container">
                        <div className="footer__content">
                            <div>
                                <h4 className="footer__title">XBOX</h4>
                                <ul className="footer__link">
                                    <li><a href="#" onClick={() => setModalActive(true)}>Support</a></li>
                                    <li><a href="#" onClick={() => setModalActive(true)}>Contact us</a></li>
                                    <li><a href="#" onClick={() => setModalActive(true)}>Privacy &#38; cookies </a></li>
                                    <li><a href="#" onClick={() => setModalActive(true)}>Terms of use </a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="footer__title">Developers</h4>
                                <ul className="footer__link">
                                    <li><a href="#" onClick={() => setModalActive(true)}>Games</a></li>
                                    <li><a href="#" onClick={() => setModalActive(true)}>Windows 10</a></li>
                                    <li><a href="#" onClick={() => setModalActive(true)}>Creators Program</a></li>
                                    <li><a href="#" onClick={() => setModalActive(true)}>Developers</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="footer__title">Follow Us</h4>
                                <div className="footer__icons">
                                    <a href="https://ru-ru.facebook.com/"><img src={Facebook} alt="facebook" /></a>
                                    <a href="https://twitter.com/?lang=ru"><img src={Twitter} alt="twitter" /></a>
                                    <a href="https://www.instagram.com/"><img src={Instagram} alt="instagram"/></a>
                                </div>
                            </div>
                        </div>

                    <div className="footer__line"></div>
                    <div className="footer__copy">
                        <p>English (United States)</p>
                        <p> © Microsoft 2017</p>
                    </div>
                </div>
                </div>
            </footer> 
            </>       
        )
}