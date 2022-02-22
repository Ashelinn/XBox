import React from 'react';
import CarouselBox from '../Components/CarouselBox';
import ReactPlayer from "react-player"

function Consoles () {
        return(
            <div>
                <CarouselBox /> 

                <div className="page-container">
                    <h1 className="page-title">5 most anticipated games of 2022</h1>

                    {/* --------------- 1 ----------------*/}
                    <div className='bmargin-80'>
                        <h2 className="dark-text">God of War</h2>
                        <h3 className="dark-text">Release date: January 14</h3>
                        <h3 className="dark-text">Platforms: PC</h3>
                        <div className='container-margins'>
                            <ReactPlayer url="https://youtu.be/u9wM2Zdeloc"/>
                        </div>
                        <h4 className="dark-text">
                        И сразу же ПК-порт великой игры — прогремевшего на PlayStation экшена God of War. В нем Кратос вместе с сыном Атреем путешествует по миру скандинавских (и не только) мифов, а игра радует не только отличными боями, но и на удивление взрослым сюжетом, который в том числе посвящен непростым отношениям сына и сурового отца.
                        </h4>
                    </div>

                    {/* --------------- 2 ----------------*/}
                    <div className='bmargin-80'>
                        <h2 className="dark-text">Uncharted: Legacy of Thieves Collection</h2>
                        <h3 className="dark-text">Release date: January 28 — PS 5, April 14 — PC</h3>
                        <h3 className="dark-text">Platforms: PlayStation 5, PC</h3>
                        <div className='container-margins'>
                            <ReactPlayer url="https://youtu.be/QyJ7sRru7LM"/>
                        </div>
                        <h4 className="dark-text">
                        Переиздание последней части Uncharted, а также дополнения The Lost Legacy. На PlayStation 5 игру стоит купить ради улучшенной графики, быстрых загрузок и поддержки контроллера DualSense. На ПК игра и вовсе еще не выходила, а обратить внимание есть за что: главный герой Натан Дрейк — настоящий современный Индиана Джонс, который во время очередной охоты за сокровищами попадает в самые неожиданные приключения.
                        </h4>
                    </div>

                    {/* --------------- 3 ----------------*/}
                    <div className='bmargin-80'>
                        <h2 className="dark-text">Sifu</h2>
                        <h3 className="dark-text">Release date: February 8</h3>
                        <h3 className="dark-text">Platforms: PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, Switch, PC</h3>
                        <div className='container-margins'>
                            <ReactPlayer url="https://youtu.be/NVBDTVaychw"/>
                        </div>
                        <h4 className="dark-text">
                        Необычный экшен о молодом бойце кун-фу, который должен отомстить врагам. Особенно интересной выглядит механика «старения»: каждая смерть меняет характеристики героя и приближает его к старости, которая значит полный конец игры.
                        </h4>
                    </div>

                    {/* --------------- 4 ----------------*/}
                    <div className='bmargin-80'>
                        <h2 className="dark-text">Horizon Forbidden West</h2>
                        <h3 className="dark-text">Release date: February 18</h3>
                        <h3 className="dark-text">Platforms: PlayStation 5, PlayStation 4</h3>
                        <div className='container-margins'>
                            <ReactPlayer url="https://youtu.be/1Vo-be7UEFc"/>
                        </div>
                        <h4 className="dark-text">
                        Продолжение приключений Элой — девушки, которая живет в необычном мире, где первобытные люди соседствуют с продвинутыми роботами, которые внешне похожи на животных. Игроков ждут новые локации, интересные и в меру сложные бои и красивая графика. Основная интрига заключается в сюжете: первая часть во многом увлекала вопросом — что же настолько изменило наш мир? В финале на него был дан ответ, так что авторам придется выдумывать новую интригу.
                        </h4>
                    </div>

                    {/* --------------- 5 ----------------*/}
                    <div className='bmargin-80'>
                        <h2 className="dark-text">Weird West</h2>
                        <h3 className="dark-text">Release date: March 31</h3>
                        <h3 className="dark-text">Platforms: PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, PC</h3>
                        <div className='container-margins'>
                            <ReactPlayer url="https://youtu.be/0NS3lzv0Nw4"/>
                        </div>
                        <h4 className="dark-text">
                        Ну очень необычная игра. Перед нами экшен-RPG в вестерн-сеттинге, где шерифы и охотники за головами живут бок о бок с оборотнями, магами и культистами. Сюжет расскажет о пятерке героев, непохожих друг на друга, но оказавшихся в этом странном и интересном мире. Кстати, решения, принятые в каждой главе отразятся на судьбе героя следующей — так что в какой-то мере игрок будет сам создавать историю.
                        </h4>
                    </div>

                </div>
            </div>
        )
    }

export default Consoles;