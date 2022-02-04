import React from 'react';
import main_img from '../assets/images/community_main.jpg';

export default function Community () {
        return(
            <div>
            <img src={main_img} alt="community main image" style={{width: '100%'}} />
            <div className='page-container'>
                <h1 style={{color: '#373A3C', textAlign: 'center', margin: '60px 0px'}}>ДОБРО ПОЖАЛОВАТЬ В XBOX</h1>
                <p style={{width: '50%', textAlign: 'center', margin: '20px auto 80px'}}>В Xbox мы верим, что игры должны быть доступны для всех.
                Мы стремимся сделать жизнь миллиардов людей по всему миру более увлекательной, создавая игровые возможности, которые будут доступны для каждого.
                Ведь когда каждый может играть, от этого выигрываем мы все.</p>
            </div>
            </div>
        )
    }