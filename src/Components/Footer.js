import React, {Component} from 'react';
import Instagram from '../assets/Instagram.svg';
import Facebook from '../assets/Faacebook.svg';
import Twitter from '../assets/Twitter.svg';


export default class Footer extends Component {
    render() {
        return(     
            <>    
            <footer>
                <div className="footer_main">
                    <div className="footer_container">
                        <div className="footer_content">
                            <div className="footer_leftmenu">
                                <h4 className="footer_title">XBOX</h4>
                                <ul className="footer_link">
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="#">Privacy & cookies </a></li>
                                    <li><a href="#">Terms of use </a></li>
                                </ul>
                            </div>

                            <div className="footer_center">
                                <h4 className="footer_title">Developers</h4>
                                <ul className="footer_link">
                                    <li><a href="#">Games</a></li>
                                    <li><a href="#">Windows 10</a></li>
                                    <li><a href="#">Creators Program</a></li>
                                    <li><a href="#">Developers</a></li>
                                </ul>
                            </div>

                            <div className="footer_rightmenu">
                                <h4 className="footer_title">Follow Us</h4>
                                <div className="footer_icons">
                                    <img src={Facebook} alt="facebook" />
                                    <img src={Twitter} alt="twitter" />
                                    <img src={Instagram} alt="instagram"/>
                                </div>
                            </div>
                        </div>

                    <div className="footer_line"></div>
                    <div className="footer_copy">
                        <p className="footer_copytext">English (United States)</p>
                        <p className="footer_copytext"> © Microsoft 2017</p>
                    </div>
                </div>
                </div>
            </footer> 
            </>       
        )
    }
}