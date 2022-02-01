import React from 'react';
import main_img from '../assets/images/community_main.jpg';

export default function Community () {
        return(
            <div className='container__center'>
                <img src={main_img} alt="community main image" />
                <h1 className='page-title'>ДОБРО ПОЖАЛОВАТЬ В XBOX</h1>
                <p className="page-text__wsmall">В Xbox мы верим, что игры должны быть доступны для всех.
                Мы стремимся сделать жизнь миллиардов людей по всему миру более увлекательной, создавая игровые возможности, которые будут доступны для каждого.
                Ведь когда каждый может играть, от этого выигрываем мы все.</p>
            </div>
        )
    }