import React from 'react';

//Импорт изображений
import Instagram from '../assets/images/icons/Instagram.svg';
import Facebook from '../assets/images/icons/Faacebook.svg';
import Twitter from '../assets/images/icons/Twitter.svg';

export default function Modal({active, setActive}) {
    return (
        <section className={active ? "modal active" : "modal"}>
            <div className="modal__content">
                <div className="modal__title">
                    Did you like this website? <br /> You can contact me at:
                </div>
                <div className="modal__icons">
                    <img src={Facebook} alt="facebook" />
                    <img src={Twitter} alt="twitter" />
                    <img src={Instagram} alt="instagram"/>
                </div>
                <button className="button_gray" onClick={()=> setActive(false)}>
                    Close this window
                </button>
            </div>
        </section>
    );
}