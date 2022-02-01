import React, {Component} from 'react';
import War from '../assets/images/War.jpg';
import War1 from '../assets/images/WarOne.jpg';
import War2 from '../assets/images/WarTwo.jpg';
import WarVideo from '../assets/images/video/War.mp4';

function Details () {
    return (
        <div>
             <div class="bgfon">
                <div class="mainImage"  styles={{ background:`url(${War})` }} >
                    <div class="mainImage_content">
                        <div class="left-65"></div>
                        <div>
                            <h2>Call of Duty: WWII</h2>
                            <p>Released on: 23/11/2017</p>
                            <div class="mainImage_buttons">
                                <button class="button_green">Order Now</button>
                                <button class="button_green">More Games</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="trailer">
                    <h2 class="trailer_title">Call of Duty: WWII</h2>
                    <div class="trailer_buttons">
                        <button class="button_green">Order Now</button>
                        <button class="button_gray">Technical Specifications</button>
                    </div>
                    <div class="trailer_video">
                        <video controls="controls">
                            <source src={WarVideo} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                        </video>
                    </div>
                </div>

                <div class="stills">
                    <div class="stills_line">
                        <p class="stills_text">Life Advice Looking Through A Window</p>
                        <img src={War1} alt="stillsOne" class="left-200" />
                    </div>
                    <div class="stills_line">
                        <img src={War2} alt="stillsTwo" class="right-200" />
                        <p class="stills_text">The Best Answers</p>
                    </div>
                </div>

                <div class="specifications">
                    <h2>Technical Specifications</h2>
                    <div class="specifications_wrap">
                        <p class="specifications_text">
                            Computer Hardware Desktops And Notebooks And Handhelds Oh My
                        </p>
                        <p class="specifications_text">
                            For Women Only Your Computer Usage Could Cost You Your Job
                        </p>
                        <p class="specifications_text">
                            Party Jokes Startling But Unnecessary
                        </p>
                        <p class="specifications_text">
                            Microsoft Patch Management For Home Users
                        </p>
                        <p class="specifications_text">
                            Going Wireless With Your Headphones
                        </p>
                        <p class="specifications_text">
                            Get The Boot A Birds Eye Look Into Mcse Boot Camps
                        </p>
                    </div>
                    <div class="specifications_buttons">
                        <button class="button_green">XBOX Consoles</button>
                        <button class="button_gray">Start streaming on mixer</button>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Details;