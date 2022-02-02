import React from 'react';
import data from '../bdgames.json';

export default function Games () {
    let games = data.games;
    return (
        <>
        <div className="page-container">
                <h2 className="page-title">Consoles Games</h2>
                <div className="page-container">

                <div className="card-container">
                    {
                        Object.keys(games).map((el) => {
                            return (
                                <div className="card">
                                    <div className="card__img">
                                        <img src={games[el].cover} alt={games[el].name}/>
                                    </div>
                                    <div className="card__content">
                                        <h3>{games[el].name}</h3>
                                        <h4>{games[el].subtitle}</h4>
                                    </div>
                                        <button className="button_green">Show details</button>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                
        </div>
        </>
    )
}