import React from 'react';

//Импорт изображений
import Instagram from '../assets/images/icons/Instagram.svg';
import Facebook from '../assets/images/icons/Faacebook.svg';
import Twitter from '../assets/images/icons/Twitter.svg';


export default function Footer () {
        return(     
            <>    
            <footer>
                <div className="page-container">
                    <div className="footer__container">
                        <div className="footer__content">
                            <div>
                                <h4 className="footer__title">XBOX</h4>
                                <ul className="footer__link">
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="#">Privacy &#38; cookies </a></li>
                                    <li><a href="#">Terms of use </a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="footer__title">Developers</h4>
                                <ul className="footer__link">
                                    <li><a href="#">Games</a></li>
                                    <li><a href="#">Windows 10</a></li>
                                    <li><a href="#">Creators Program</a></li>
                                    <li><a href="#">Developers</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="footer__title">Follow Us</h4>
                                <div className="footer__icons">
                                    <img src={Facebook} alt="facebook" />
                                    <img src={Twitter} alt="twitter" />
                                    <img src={Instagram} alt="instagram"/>
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