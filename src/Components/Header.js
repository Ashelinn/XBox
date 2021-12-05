import React, {Component} from 'react';
import {Form, FormControl} from 'react-bootstrap';

//подключение стилей
import './css/fonts.css';
import './css/main.css';

//подключение картинок
import logo from './img/xbox_logo.svg';
import user_logo from './img/user.svg';
import drop from './img/drop.svg';

import {Link} from "react-router-dom";

//верхнее меню сайта
export default class Header extends Component {
    render() {
        return(
                <header>
                    <div className="header_logo">
                        <Link to="/">
                            <img src={logo} alt="XBOX logo"/>
                        </Link>
                    </div>
                    <nav>
                        <ul className="nav_topmenu">
                            <li><Link to="/games" className="drop">Games <img src={drop} alt="drop"/></Link>
                                <div className="dropdown">                                 
                                    <ul className="nav_submenu">
                                        <li><a href="/console_games">Console Games</a></li>
                                        <li><a href="/buy_console">Buy console</a></li>
                                        <li><a href="/all_games">All Games</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link to="/consoles" className="drop">Consoles <img src={drop} alt="drop"/></Link>
                                <div className="dropdown">
                                    <ul className="nav_submenu">
                                        <li><a href="/xbox_console">xbox console</a></li>
                                        <li><a href="/pc_games">PC Games</a></li>
                                        <li><a href="/accessories">Accessories</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link to="/community">Community <img src={drop} alt="drop"/></Link></li>
                        </ul>
                        
                        <div className="header_serch">
                            <Form inline>
                                <FormControl type="text" placeholder="search"/>
                            </Form>
                        </div>
                        
                        <div className="header_login">
                            <img src={user_logo} alt="icon user"/>
                            <ul className="nav_topmenu">
                                <li><a href="/my_box" className="drop">My Xbox <img src={drop} alt="drop"/></a>
                                    <div className="dropdown">
                                        <ul className="nav_submenu">
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