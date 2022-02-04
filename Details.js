import React from 'react';
import ReactPlayer from "react-player"

import War from '../assets/images/War.jpg';
import War1 from '../assets/images/WarOne.jpg';
import War2 from '../assets/images/WarTwo.jpg';



function Details () {

    return (
        <div>
             <div className="bgfon">
                <div className="mainImage"  style={{ backgroundImage:`url(${War})`, backgroundRepeat: 'no-repeat'}} >
                    <div className="mainImage_content">
                        <div className="left-65"></div>
                        <div>
                            <h2>Call of Duty: WII</h2>
                            <p>Released on: 20/11/2017 </p>
                            <p></p>
                            <div classNameName="mainImage_buttons">
                                <button className="button_green rmargin-15">Order Now</button>
                                <button className="button_gray">More Games</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="trailer">
                    <h2 className="trailer_title">Call of Duty: WWII</h2>
                    <div className="trailer_buttons">
                        <button className="button_green rmargin-15">Order Now</button>
                        <button className="button_gray">Technical Specifications</button>
                    </div>
                    <div className="trailer_video">
                        <ReactPlayer
                            url="https://youtu.be/nKuQwlbqTGk"
                        />
                    </div>
                </div>

                <div className="stills">
                    <div className="stills_line">
                        <p className="stills_text">Life Advice Looking Through A Window</p>
                        <img src={War1} alt="stillsOne" className="left-200" />
                    </div>
                    <div className="stills_line">
                        <img src={War2} alt="stillsTwo" className="right-200" />
                        <p className="stills_text">The Best Answers</p>
                    </div>
                </div>

                <div className="specifications">
                    <h2>Technical Specifications</h2>
                    <div className="specifications_wrap">
                        <p className="specifications_text">
                            Computer Hardware Desktops And Notebooks And Handhelds Oh My
                        </p>
                        <p className="specifications_text">
                            For Women Only Your Computer Usage Could Cost You Your Job
                        </p>
                        <p className="specifications_text">
                            Party Jokes Startling But Unnecessary
                        </p>
                        <p className="specifications_text">
                            Microsoft Patch Management For Home Users
                        </p>
                        <p className="specifications_text">
                            Going Wireless With Your Headphones
                        </p>
                        <p className="specifications_text">
                            Get The Boot A Birds Eye Look Into Mcse Boot Camps
                        </p>
                    </div>
                    <div className="specifications_buttons">
                        <button className="button_green rmargin-15">XBOX Consoles</button>
                        <button className="button_gray">Start streaming on mixer</button>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Details;