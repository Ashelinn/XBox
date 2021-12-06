import React, {Component} from 'react';
import fon from '../assets/design.jpg';

const bgstyle = {
    fon: {
        backgroundImage: `url(${fon})`
    }
}

export default class Design extends Component {
    render() {
        return(
            <>
            <section id="design" style={bgstyle.fon}>
                <div className="design_container">
                    <h2 className="design_title">Xbox Design Lab</h2>
                    <p className="design_text">Make yours one in a billion with new colors, metallic finishes and rubberized grips.</p>
                    <div className="design_buttons">
                        <button className="button_gray">Design Yours</button>
                        <button className="button_green">Explore Consoles & Accessories</button>
                    </div>
                </div>
            </section>
            </>
        )
    }
}