import React, {Component} from 'react';
import {Form, FormControl} from 'react-bootstrap';
import logo from './img/xbox_logo.svg';
import user_logo from './img/user.svg';
import drop from './img/drop.svg';
import './css/fonts.css';
import './css/main.css';

export default class Header extends Component {
    render() {
        return(
                <header>
                    <div class="header_logo">
                        <a href="/">
                            <img src={logo} alt="XBOX logo"/>
                        </a>
                    </div>
                    <nav>
                        <ul class="nav_topmenu">
                            <li><a href="/games" class="drop">Games <img src={drop} alt="drop"/></a>
                                <div class="dropdown">
                                    <ul class="nav_submenu">
                                        <li><a href="/console_games">Console Games</a></li>
                                        <li><a href="/buy_console">Buy console</a></li>
                                        <li><a href="/all_games">All Games</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="/consoles" class="drop">Consoles <img src={drop} alt="drop"/></a>
                                <div class="dropdown">
                                    <ul class="nav_submenu">
                                        <li><a href="/xbox_console">xbox console</a></li>
                                        <li><a href="/pc_games">PC Games</a></li>
                                        <li><a href="/accessories">Accessories</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="/Community">Community <img src={drop} alt="drop"/></a></li>
                        </ul>
                        
                        <div class="header_serch">
                            <Form inline>
                                <FormControl type="text" placeholder="search"/>
                            </Form>
                        </div>
                        
                        <div class="header_login">
                            <img src={user_logo} alt="icon user"/>
                            <ul class="nav_topmenu">
                                <li><a href="/my_box" class="drop">My Xbox <img src={drop} alt="drop"/></a>
                                    <div class="dropdown">
                                        <ul class="nav_submenu">
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