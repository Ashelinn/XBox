import React, {Component} from 'react';
import {Form, FormControl} from 'react-bootstrap';
import {NavLink, Link} from "react-router-dom";

//подключение стилей
import '../assets/css/fonts.css';
import '../assets/css/main.css';

//подключение картинок
import logo from '../assets/images/icons/xbox_logo.svg';
import user_logo from '../assets/images/icons/user.svg';
import drop from '../assets/images/icons/drop.svg';


//верхнее меню сайта
export default class Header extends Component {
    render() {
        return(
                <header>
                    <div className="header_logo">
                        <Link to="/" exact>
                            <img src={logo} alt="XBOX logo"/>
                        </Link>
                    </div>
                    <nav>
                        <ul className="nav__topmenu">
                            <li> <a href="#" className="drop">Games <img src={drop} alt="drop"/> </a>
                                <div className="dropdown">                                 
                                    <ul className="nav__submenu">
                                        <li><NavLink to="/games">Console Games</NavLink></li>
                                        <li><NavLink to="/games">PC Games</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#" className="drop">Consoles <img src={drop} alt="drop"/></a>
                                <div className="dropdown">
                                    <ul className="nav__submenu">
                                        <li><NavLink to="/details">Explore Games</NavLink></li>
                                        <li><NavLink to={{pathname:'/consoles', hash: 'blockd'}}>PC Games</NavLink></li>
                                        <li><a href="/accessories">Accessories</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><NavLink to="/community" exact>Community</NavLink></li>
                        </ul>
                        
                        <div className="header_serch">
                            <Form inline>
                                <FormControl type="text" placeholder="search"/>
                            </Form>
                        </div>
                        
                        <div className="header_login">
                            <img src={user_logo} alt="icon user"/>
                            <ul className="nav__topmenu">
                                <li><a href="/my_box" className="drop">My Xbox <img src={drop} alt="drop"/></a>
                                    <div className="dropdown">
                                        <ul className="nav__submenu">
                                            <li><a href="/register">Register</a></li>
                                            <li><a href="/login">Login</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header> 
        )
    }
}